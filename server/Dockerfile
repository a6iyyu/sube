FROM node:12.22.1-alpine3.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY dist/server.js .

EXPOSE 2001
CMD ["node","server.js"]