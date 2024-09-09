# Portal-web Scrum Latam

Este es un proyecto de Next.js desarrollado con TypeScript. A continuación, se describe la estructura de carpetas y el propósito de cada una.

# Estructura de Carpetas

- **/src**
  - **/app**
  - **/core**
    - **/config**
    - **/interfaces**
    - **/services**
    - **/utils**
  - **/fonts**
  - **/hooks**
  - **/store**

## Descripción de Carpetas

- **/src**: Carpeta principal para todo el código fuente del proyecto.

  - **/app**: Aquí se encuentran las vistas de la página (ej: /home, /community /login etc...).
    - **/home**: Esta es la carpeta de la vista "/home".
      - **/components**: Contiene todos los componentes de la vista (importar y exportar los componentes en un archivo index.ts).
      - **/hooks**: Contiene los hooks específicos de la vista.
  - **/core**: Contiene las configuraciones generales de la aplicación.

    - **/config**: Contiene las configuraciones del proyecto en general.

    - **/interfaces**: Aquí se encuentran las interfaces a nivel global de la aplicación.

    - **/services**: Servicios para manejar la lógica de negocio.

    - **/utils**: Funciones utilitarias.

  - **/fonts**: Contiene archivos de fuentes tipográficas que se utilizan en el proyecto.

  - **/hooks**: Contiene los hooks a nivel global de la aplicación.

  - **/store**: Gestion de estados globales de la aplicación.

## Configuración del Proyecto

Para instalar las dependencias, ejecuta:

```bash
npm install
```

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```
