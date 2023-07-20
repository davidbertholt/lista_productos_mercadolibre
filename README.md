# lista_productos_mercadolibre

Este es un proyecto de tipo SPA (single page aplication) generada para la instancia técnica del proceso de entrevistas con Mercadolibre

Dentro de la estructura del mismo vamos a poder ver tres directorios en los que se encuentran las funcionalidades de nuestra aplicación:

- Dominio: Contiene el modelo de nuestra aplicación, no accede a los componentes del exterior.
- Infraestructura: Aqui se contienn los diferentes servicios y la estructura de Redux, para la conexión de las apis se utilizó axios, configurado para poder obtener los endpoints base según variables de entorno.
- View: Aqui tenemos las diferentes visas de nuestraa aplicación, estas utilizan tanto el dominio como los servicios prestados por el directorio de infraestructura para poder desarrollar sus funcionalidades, también aquí se encuentran los componentes comunes que conforman el layput utilizado dentro de ReactRouter opara contener las diferentes pntallas de nuestra aplicación.

En la construcción del proyecto React se utilizó la libreria Vite, ya que soporta Typescript de manera nativa, su facilidad al crear una aplicación, la velocidad de hot reload, tambien nos permitió generar alias de forma muy rápida, como así su integración con docker y variables de entorno.

Al usar Vite, usamos Vitest como framework de testing ya que nos da grandes facilidades y un debugger muy útil. También se usaron más librerias para testear, entre las que podemos destacar React testing library, redux-mock-store.

Para la construcción de las visas se utilizaron las librerias de styled-components y material-ui

El proyecto puede ser ejecutado y construido mediante contenedores de Docker

Build de una imagen de la aplicación para producción:

    docker compose -f docker-compose.prod.yml up

Build de una imagen de la aplicación para desarrollo con hot-reload:

    docker compose -f docker-compose.dev.yml build

Dentro del archivo .env podremos encontrar las variables de entorno respectivas en cada caso

Para ejecutar los tests se debe correr en el raiz el comando

    npm run test

Próximos pasos:

1. Completar los pipelines de gitHub Actions para que nos permita buildear nuestra aplicacion y desplegarla automaticamente.
2. Configurar GitHub Pages para que muestre la imagen generada mediante docker.
