# Shelta

## Getting started

[Setup for container based development](https://code.visualstudio.com/docs/remote/containers-tutorial)

### Windows users

> ⚠ Suggest you use Windows Subsystem for linux (WSL) as the default container runtime for Docker and when you clone the repository do so into a WSL native directory to avoid major development time performance issues.

### Angular version

Current [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

### Development environment

Once the cotnainer has been built and launched using the remote developer extensions in VS Code:

Run `ng serve --ssl` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.
note: Chrome fails to launch non ssl site on localhost.   Using the --ssl to resolve this issue.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further reading

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

A good online tutorial to build a leaflet map with Angular:

- [Part 1: Setup the Map object](https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet) 
- [Part 2: The Marker Service](https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-marker-service) 
- [Part 3: The Popup Service](https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-popup-service) 
- [Part 4: The Shape Service](https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-shape-service)

Key Angular dependencies used
- [material.angular.io](https://material.angular.io/)
- [progressive web app](https://angular.io/guide/service-worker-intro)

