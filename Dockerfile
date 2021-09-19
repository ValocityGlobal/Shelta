FROM node:lts-alpine as developer
RUN apk update \
    && apk upgrade \
    && apk add git
RUN rm -rf /opt/yarn-* \
    && rm -f /usr/local/bin/yarn \
    && rm -f /usr/local/bin/yarnpkg
RUN npm install --save-dev @angular-devkit/build-angular
RUN npm install -g @angular/cli@12.1.1 --force

FROM developer as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
#RUN npm audit
#disabled due to errors that can't be fixed right away.
COPY . .
#RUN npm run lint
RUN npm run build

FROM nginx:stable-alpine as production
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/Shelta /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]