FROM node:12-alpine
RUN yarn install --production
WORKDIR /app
COPY . .
CMD node app.js