FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
USER node

RUN npm install
COPY --chown=node:node . .

EXPOSE 5173
CMD [ "npm", "run", "start" ]