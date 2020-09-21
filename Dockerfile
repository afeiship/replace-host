FROM node:14

WORKDIR /www/app
COPY package*.json ./
COPY src .
RUN npm install

EXPOSE 8080
CMD [ "node", "server.js" ]
