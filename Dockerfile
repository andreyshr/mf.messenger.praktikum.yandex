FROM mhart/alpine-node:12

COPY . /app
COPY package*.json ./

RUN npm ci --production

EXPOSE 4000

CMD node app/server.js
