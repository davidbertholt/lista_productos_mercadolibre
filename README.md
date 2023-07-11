# lista_productos_mercadolibre
Este es un producto generado para la instancia técnica del proceso de entrevistas con Mercadolibre

El proyecto puede ser ejecutado y construido mediante contenedores de Docker

Build de una imagen de la aplicación para producción:

    docker compose -f docker-compose.prod.yml up

Build de una imagen de la aplicación para desarrollo con hot-reload:

    docker compose -f docker-compose.dev.yml up

Dentro del archivo .env podremos encontrar las variables de entorno respectivas en cada caso

