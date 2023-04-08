FROM node:18-alpine3.17

WORKDIR /app

COPY package.json /app/package.json
COPY . /app

RUN yarn install --production
RUN yarn build

EXPOSE 4561

ENTRYPOINT ["node", "dist/server.js"]
