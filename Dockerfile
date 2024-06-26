FROM node:alpine as base

WORKDIR /app/server

COPY package.json ./

RUN rm -rf node_modules
RUN npm install --only=production
RUN npm cache clean --force

ENV NODE_ENV=production

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]
