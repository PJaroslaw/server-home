FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

WORKDIR /app
COPY --from=builder /app/dist /usr/sharenginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
