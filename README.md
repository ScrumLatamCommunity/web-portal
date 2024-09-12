# Portal-web Scrum Latam

Este es un proyecto de Next.js desarrollado con TypeScript. A continuación, se describe la estructura de carpetas y el propósito de cada una.

## Estructura de Carpetas

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

### Descripción de Carpetas

- **/src**: Carpeta principal para todo el código fuente del proyecto.

  - **/app**: Aquí se encuentran las vistas de la página (ej: /home, /community, /login, etc.).
    - **/home**: Esta es la carpeta de la vista "/home".
      - **/components**: Contiene todos los componentes de la vista (importar y exportar los componentes en un archivo `index.ts`).
      - **/hooks**: Contiene los hooks específicos de la vista.
  - **/core**: Contiene los componentes reutilizables a nivel global.

  - **/config**: Contiene las configuraciones generales del proyecto.

  - **/interfaces**: Aquí se encuentran las interfaces a nivel global de la aplicación.

  - **/services**: Servicios para manejar la lógica de negocio.

  - **/utils**: Funciones utilitarias.

  - **/fonts**: Contiene archivos de fuentes tipográficas que se utilizan en el proyecto.

  - **/hooks**: Contiene los hooks a nivel global de la aplicación.

  - **/store**: Gestión de estados globales de la aplicación.

## Configuración del Proyecto

Para instalar las dependencias, ejecuta:

```bash
npm install
```

Para la librería **`husky`** ( control de commits ) ejecutar el siguiente script:

```bash
npm run prepare
```

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

## Conventional Commits admitidos en este proyecto

A continuación se describe como deberían ser los commits:

```bash
git commit -m "<type>[(optional scope)]: <description>

[optional body]

[optional footer(s)]"
```

- Documentación completa de **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)**

## Nombramientos de ramas

El nombramiento de las ramas van a ser en definición de la tarjeta generada en Jira/Trello.

También debe ser descriptivo en relación con la tarea que se esté realizando.

Ejemplo de `Jira`:

Nombre de la tarjeta: `PWS1-12 Carrusel desplazable con novedades / Próximos eventos`

Nombre de la rama: `PWS1-12-<type>/<component-name-or-task>`

# Todo código, rama o commit se deberan crear en inglés.
