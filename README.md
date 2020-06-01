# Aplicación verpersonas

Esta aplicación está diseñada para consumir los datos de una api y mostrarlos
en una grid. para esto, un usuario puede registrarse y posteriormente acceder a la
cuenta que se creó con su email.

Su función principal es la de mostrar a las personas, desplegar una modal 
con los datos de la persona seleccionada. En la modal, está la posibilidad de guardar 
el usuario en firebase.

Se aplica el paginador de angular material y además, se establece mostrar 6 registros
por página. Aunque es parametrizable por variable y también desde la misma página. 
Las etiquetas de texto del paginador están en español.

Se genera un pipe customizado para leer las variables y mostrar los resultados
según se requiera en el paginador.

En la opción Registrados, se muestra una tabla que contiene a las personas 
que han sido guardadas. 

Esta página tiene un paginador sencillo, el de la libreria ngx-pagination.

```sh
En la tabla, cada registro que se muestra tiene dos botones: Eliminar y Editar.

Eliminar despliega una modal hecha en sweetalert2 que pregunta si efectivamente desea
borrar ese contenido de firebase.

Editar redirecciona a otra página en donde es posible editar los datos del usuario.
```

Se agrega un redireccionamiento en caso de ingresar a una url que no corresponda.
Ejemplo: https://verpersonas.herokuapp.com/error redirecciona al index.

También se agrega un loading que debe desaparecer cuando se carga el subscribe.

Cada cuadro de la grid: 
-   Tiene un tooltip que indica al usuario que debe hacer.
-   Al hacer click en cualquier parte de un cuadro de la grid, se despliega una modal que
    muestra los principales datos de la persona.

# Listado de dependencias y frameworks utilizados
-   Angular                             9.1.6
-   jquery                              3.4.1
-   Bootstrap                           4.4.1
-   node                                13.12.0
-   npm                                 6.14.4
-   Angular CLI                         9.1.5
-   Angular Material                    6.14.4
-   sweetalert2                         9.14.0
-   ngx-pagination                      5.0.0
-   typed-countries                     1.1.1

# Instalación
Todo el desarrollo de este proyecto fue realizado en Ubuntu 18.04.4 LTS.

```sh
# Instalar ngx-pagination
-   npm install ngx-pagination --save

# Instalar Angular Material
-   ng add @angular/material

# Instalar typed-countries
-   npm install typed-countries

# Instalar SweetAlert2
-   npm install sweetalert2
```

# URLs
-   https://github.com/crvidals/person_selector
-   https://verpersonas.herokuapp.com