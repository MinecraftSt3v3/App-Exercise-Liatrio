FROM node:latest

WORKDIR /app

ENV PORT 80

COPY package.json /app/package.json

RUN npm install

COPY . /app

CMD node app.js