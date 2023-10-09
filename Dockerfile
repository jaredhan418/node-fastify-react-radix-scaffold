FROM bitnami/node:18

WORKDIR /app

ARG HUSKY=0

COPY . .

RUN npm ci --ignore-scripts
RUN npm run build

CMD ["-r", "dotenv/config", "./dist/server/index.js"]