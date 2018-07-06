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
## Creación de un carrousel de imagenes

Antes que nada vamos a crear un carrousel con html y bootstrap

el html es el siguiente

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">
    <title>Carousel</title>
</head>
<body>
  <div id="wrapper">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
      
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="img/wp1.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="img/wp7.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="img/wp8.jpg" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
</body>
</html>

```

Crearemos un carrousel de imagenes haciendo uso de Angular, Bootstrap y un paquete extra llamado ng-bootstrap.

Primero crearemos un nuevo proyeto de Angular con el comando:

```bash
$ ng new ngb-carousel
```

A continuación crearemos el componente _ngb-carousel_:
```bash
$ ng generate component ngb-carousel
```

Luego instalamos las dependencias necesarias para el carousel:

```bash
$ npm install bootstrap
$ npm install @ng-bootstrap/ng-bootstrap
```

Ahora a trabajar en el template del componente carousel:

```html
<div id="wrapper">
<ngb-carousel *ngIf="images">
  <ng-template ngbSlide>
    <img [src]="images[0]" alt="Random first slide">
  </ng-template>
  <ng-template ngbSlide>
    <img [src]="images[1]" alt="Random second slide">
  </ng-template>
  <ng-template ngbSlide>
    <img [src]="images[2]" alt="Random third slide">
  </ng-template>
  <ng-template ngbSlide>
    <img [src]="images[3]" alt="Random fourth slide">
  </ng-template>
</ngb-carousel>
</div>
```

En los estilos del componente carousel colocaremos lo que sigue:

```
#wrapper {
    max-width: 940px;
    margin: 0 auto;
    padding: 0 5%;
}


img {
    max-width: 100%
}
```

En el módulo raíz de la aplicación lo siguiente:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NgbCarouselComponent } from './ngb-carousel/ngb-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NgbCarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Y finalmente el componente:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NgbCarouselComponent } from './ngb-carousel/ngb-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NgbCarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
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
* https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a
* https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/
* https://medium.com/codingthesmartway-com-blog/building-an-angular-5-project-with-bootstrap-4-and-firebase-4504ff7717c1
* https://netbasal.com/building-a-simple-carousel-component-with-angular-3a94092b7080
* https://medium.com/@balramchavan/integrating-google-maps-in-angular-5-ca5f68009f29
