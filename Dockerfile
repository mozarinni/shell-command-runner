FROM node:12-alpine
WORKDIR /kaholo
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node", "/kaholo/srv/server.js"]