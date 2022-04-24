FROM node:12-alpine
WORKDIR /kaholo
COPY . .
RUN npm install
CMD ["node", "/kaholo/srv/server.js"]