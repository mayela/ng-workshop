# Tutorial paso a paso para crear nuestra primera aplicación en Angular

Angular es un framework web que nos ayuda a crear aplicaciones web fácilmente.
Utiliza la arquitectura Modelo-Vista-Controlador(MVC) y actualmente usa
Typescript(super conjunto de Javascript) como lenguaje.

## Instalación de Angular

Primero, vamos a descargar la versión de NodeJS 8.11.3.

```bash
$ nvm install 8.11.3
```

A continuación vamos a instalar Angular con la ayuda de npm.

```bash
$ npm install -g @angular/cli
```

Una vez realizados los pasos anteriores debemos de tener disponible el comando
_ng_ para manejar el proyecto.

## Creación de mi primera aplicación Angular

Ahora podemos hacer uso del comando ng para crear nuestra primera aplicación
pero primero revisemos algunos de los comandos disponibles. Ejecutaremos la
siguiente instrucción para sicho propósito:

```bash
$ ng help
```

Obtendremos la siguiente salida:

```bash
Available Commands:
  add Add support for a library to your project.
  new Creates a new directory and a new Angular app.
  generate Generates and/or modifies files based on a schematic.
  update Updates your application and its dependencies.
  build Builds your app and places it into the output path (dist/ by default).
  serve Builds and serves your app, rebuilding on file changes.
  test Run unit tests in existing project.
  e2e Run e2e tests in existing project.
  lint Lints code in existing project.
  xi18n Extracts i18n messages from source code.
  run Runs Architect targets.
  eject Temporarily disabled. Ejects your app and output the proper webpack configuration and scripts.
  config Get/set configuration values.
  help Help.
  version Outputs Angular CLI version.
  doc Opens the official Angular API documentation for a given keyword.
```

A continuación crearemos una nueva aplicación de Angular con el siguiente comando:

```bash
$ ng new angular-project
```

Ahora entraremos al proyecto y ejecutaremos la siguiente instrucción:

```bash
$ ng serve
```

Dirígete al navegador y escribe en una nueva pestaña la url _localhost:4200_,
deberá de salir una imagen como la siguiente:

![](img/ng-serve.png)

### Componentes

El bloque de construcción básico de Angular son los componentes. Se encargan de
mostrar datos al usuario, recibir datos de entrada y realizar alguna acción 
con base en esos datos de entrada.

Dentro de la carpeta _src_ de _angular-project_ encontrarás la carpeta de la 
aplicación llamada _app_:

```bash
...
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   ├── browserslist
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json
```

Vamos a realizar una modificación al título de la aplicación modificando el valor de 
_title_ dentro del archivo _app.component.ts_:

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular project';
}
```

## Referencias

* https://angular-templates.io/tutorials/about/learn-angular-from-scratch-step-by-step
* https://angular.io/docs
* https://angular.io/tutorial
* https://angular-templates.io/tutorials/about/learn-how-to-build-a-mean-stack-application
* https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador
* https://medium.mybridge.co/18-amazing-open-source-angular-projects-dd9e81d921ee
* https://malcoded.com/posts/angular-beginners-guide
* https://docs.npmjs.com/getting-started/using-a-package.json
* https://code.visualstudio.com/docs/nodejs/angular-tutorial
