# Tripleten web_project_around_react

# Around the U.S. — React

## Descripción

**Around the U.S.** es una aplicación web interactiva que presenta un perfil de usuario y una galería de lugares.

En esta etapa, la interfaz visual del proyecto original desarrollado con JavaScript fue migrada a **React con TypeScript**. La aplicación se dividió en componentes reutilizables y se implementó la interacción de las ventanas emergentes mediante hooks de React.

Este sprint se enfoca en la estructura visual y la migración a React. La conexión con la API y las operaciones para modificar los datos se implementarán en la siguiente etapa del proyecto.

## Funcionalidades actuales

- Visualización del perfil del usuario.
- Renderizado de cards a partir de datos locales.
- Apertura y cierre de ventanas emergentes.
- Popup para editar la información del perfil.
- Popup para cambiar la imagen del avatar.
- Popup para agregar un nuevo lugar.
- Vista ampliada de la imagen de una card.
- Diseño adaptable para diferentes tamaños de pantalla.
- Componentes reutilizables para cards y popups.

Los formularios y botones cuentan actualmente con su presentación e interacción visual. Los cambios todavía no se guardan ni se envían a un servidor.

## Tecnologías utilizadas

- React
- TypeScript
- TSX
- Vite
- HTML5
- CSS3
- Metodología BEM
- ESLint

## Aprendizajes

Durante el desarrollo de esta etapa se trabajó con:

- Creación y organización de componentes de React.
- Escritura de marcado mediante TSX.
- Definición de tipos para componentes y propiedades.
- Uso de props para comunicar componentes.
- Renderizado de listas con `map`.
- Uso de `key` para identificar componentes renderizados.
- Manejo del estado con el hook `useState`.
- Comunicación entre componentes mediante funciones callback.
- Renderizado condicional de ventanas emergentes.
- Configuración y ejecución de un proyecto con Vite.

## Instalación y ejecución

Para ejecutar el proyecto localmente, primero instala las dependencias:

```bash
npm install
```

Después, inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite abrirá la aplicación en el navegador. Si no se abre automáticamente, utiliza la dirección local que aparecerá en la terminal.

## Comandos disponibles

Iniciar el entorno de desarrollo:

```bash
npm run dev
```

Comprobar el código con ESLint:

```bash
npm run lint
```

Crear la versión de producción:

```bash
npm run build
```

Previsualizar la versión de producción:

```bash
npm run preview
```

## Próxima etapa

En el siguiente sprint se implementará la parte funcional de la aplicación mediante la conexión con una API. Esto permitirá:

- Obtener la información del usuario desde el servidor.
- Cargar las cards desde la API.
- Editar la información del perfil.
- Actualizar el avatar.
- Crear y eliminar cards.
- Dar y quitar “Me gusta”.
- Guardar los cambios de forma persistente.
