FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG VITE_BACKEND_URL=http://localhost
ARG VITE_BACKEND_PORT=8080
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV VITE_BACKEND_PORT=$VITE_BACKEND_PORT

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/ .
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]  