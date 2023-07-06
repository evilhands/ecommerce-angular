#Stage 1
FROM node:18-alpine3.15 as build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

#Stage 2
FROM nginx:alpine
COPY --from=build /app/dist/ecommerce-angular /usr/share/nginx/html