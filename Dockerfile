FROM node:14

WORKDIR /www/app
COPY src .
RUN npm install

EXPOSE 8080
CMD [ "node", "server.js" ]
