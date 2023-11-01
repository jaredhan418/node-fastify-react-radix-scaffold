# node-short-link
 Node.js short link service and website.

## Running via Docker

```
docker build -t <name of image>
docker run -i -t --env-file ./.env -p <localport>:<port in env file> <name of image>
```