FROM node:17-alpine

WORKDIR /docker

COPY . .

RUN npm install

EXPOSE 3030

CMD ["node", "server.js"]