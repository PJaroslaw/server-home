FROM node:lts-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

from alpine:latest

WORKDIR /app
COPY --from=builder /app/dist /app
