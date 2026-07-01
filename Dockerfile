FROM alpine:latest AS clone

WORKDIR /source
RUN apk add git
RUN git clone https://github.com/dimastadeoo/koda-b8-react .

FROM node:alpine AS build

WORKDIR /app
COPY --from=clone /source .
RUN npm install
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/ .
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf