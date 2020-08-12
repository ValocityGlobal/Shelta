# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
#RUN yarn install
#RUN yarn upgrade
COPY . .
RUN npm install --save-dev @angular-devkit/build-angular
RUN npm install -g @angular/cli --force
#RUN ng add @angular/material
#RUN ng add @angular/pwa
RUN ng build --prod

# production stage
FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist/Handup /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]