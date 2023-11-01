FROM bitnami/node:20 as builder

WORKDIR /app

ARG HUSKY=0

COPY . .

RUN npm ci
RUN npm run build

## install deps
FROM bitnami/node:20 as deps

WORKDIR /app

ARG HUSKY=0

COPY . .

RUN npm ci --ignore-scripts --omit=dev
RUN npx prisma generate

COPY ./.dockerignore ./dist/broswer/

## runtime
FROM bitnami/node:20

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=deps /app/package.json .
COPY --from=deps /app/node_modules ./node_modules

CMD ["-r", "dotenv/config", "./dist/server/index.js"]