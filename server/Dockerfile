FROM node:12.22.1-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 2001
CMD ["node", "dist/server.js"]