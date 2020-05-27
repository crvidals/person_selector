# Aplicación colorselector

Esta aplicación está diseñada para consumir los datos de una api y mostrarlos
en una grid. Su función principal es la de mostrar los colores y poder copiar 
con un click el color al portapapeles.

Se aplica el paginador de angular material y además, se establece mostrar 8 registros
por página. Aunque es parametrizable por variable y también desde la misma página. 
Las etiquetas de texto del paginador están en español.

Se genera un pipe customizado para leer las variables y mostrar los resultados
según se requiera en el paginador.

Se agrega una redireccionamiento en caso de ingresar a una url que no corresponda.
Ejemplo: https://colorselector.herokuapp.com/colores redirecciona al index.

También se agrega un loading que debe desaparecer cuando se carga el subscribe.

Cada cuadro de la grid: 
-   Tiene un tooltip que indica al usuario que debe hacer.
-   Muestra dinamicamente su color correspondiente que viene desde la api.
-   Al hacer click en cualquier parte de un cuadro de la grid, muestra una modal que
    indica que el color ha sido copiado.
-   Tiene la propiedad border-color del color correspondiente.

# Listado de dependencias y frameworks utilizados

-   Angular                             9.1.6
-   jquery                              3.4.1
-   Bootstrap                           4.4.1
-   node                                13.12.0
-   npm                                 6.14.4
-   Angular CLI                         9.1.5
-   Angular Material                    6.14.4
-   OS                                  Ubuntu 18.04.4 LTS
-   @angular/animations                 9.1.0
-   @angular/cdk                        9.2.3
-   @angular/common                     9.1.0
-   @angular/compiler                   9.1.0
-   @angular/core                       9.1.0
-   @angular/forms                      9.1.0
-   @angular/material                   9.2.3
-   @angular/platform-browser           9.1.0
-   @angular/platform-browser-dynamic   9.1.0
-   @angular/router                     9.1.0
-   express                             4.17.1
-   ngx-pagination                      5.0.0
-   rxjs                                6.5.4
-   tslib                               1.10.0
-   zone.js                             0.10.2

# Instalación

Todo el desarrollo de este proyecto fue realizado en Ubuntu 18.04.4 LTS.

Instalar Angular
-   sudo apt update
-   sudo apt install nodejs
-   sudo apt install npm
-   npm install -g @angular/cli

Instalar Angular Material
-   Abrir terminal en la carpeta del proyecto
-   ng add @angular/material

Abrir el proyecto en local
-   Abrir terminal en la carpeta del proyecto
-   ng serve --aot

Heroku
-   npm install express --save

# URLs

-   Para ver el código      https://github.com/crvidals/colorselector
-   Para visitar el sitio   https://colorselector.herokuapp.com/# person_selector
