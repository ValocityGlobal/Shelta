# Shelta

## Getting started

[Setup for container based development](https://code.visualstudio.com/docs/remote/containers-tutorial)

## How we got here

### Created the development container

[devcontainer.json](.devcontainer/devcontainer.json)

### Install angular and core dependencies

```bash
# yarn global add @angular/cli # This didnt work had to run the below with a --force after
npm install -g @angular/cli
ng add @angular/material
ng add @angular/pwa
```

To read

- [material.angular.io](https://material.angular.io/)
- [progressive web app](https://angular.io/guide/service-worker-intro)

### This project

... was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Online Resources

A good online tutorial to build a leaflet map with Angular:
- [Part 1: Setup the Map object](https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet) 
- [Part 2: The Marker Service](https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-marker-service) 
- [Part 3: The Popup Service](https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-popup-service) 
- [Part 4: The Shape Service](https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-shape-service)
