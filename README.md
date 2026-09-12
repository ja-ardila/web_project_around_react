# Around the U.S. — React y TypeScript

## Descripción

Around the U.S. es una aplicación web interactiva que permite consultar y
actualizar un perfil de usuario, además de administrar una galería de lugares.
La interfaz original fue migrada a React con TypeScript y sus datos se
sincronizan con la API de Around.

## Funcionalidades

- Carga del usuario y de las tarjetas desde la API.
- Edición del nombre y la descripción del perfil.
- Actualización del avatar mediante una URL.
- Creación de nuevas tarjetas al principio de la galería.
- Ampliación de las imágenes en una ventana emergente.
- Activación y eliminación de Me gusta.
- Eliminación de tarjetas propias con confirmación previa.
- Validación de formularios y mensajes de error por campo.
- Indicadores de carga durante las solicitudes.
- Cierre de ventanas emergentes con el botón de cierre o al hacer clic en el
  fondo.
- Diseño adaptable para escritorio y dispositivos móviles.

## Tecnologías utilizadas

- React 19
- TypeScript
- Vite
- CSS y metodología BEM
- Context API
- Fetch API
- ESLint

## Estructura principal

```text
src/
├── blocks/       # Estilos organizados por bloques BEM
├── components/   # Componentes React
├── contexts/     # Contexto global del usuario
├── hooks/        # Hook reutilizable de validación
├── images/       # Recursos gráficos
├── interfaces/   # Tipos e interfaces de TypeScript
├── utils/        # Instancia y métodos de la API
├── App.tsx       # Estado global y controladores de la aplicación
├── index.css     # Punto de entrada de los estilos
└── main.tsx      # Punto de entrada de React
```

## Instalación y ejecución

Clona el repositorio e instala sus dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

## Comandos disponibles

```bash
npm run dev      # Inicia Vite en modo desarrollo
npm run build    # Comprueba TypeScript y crea la versión de producción
npm run lint     # Analiza el código con ESLint
npm run preview  # Previsualiza la compilación de producción
```

## Arquitectura

`App.tsx` concentra el estado del usuario, las tarjetas y la ventana emergente
activa. También ejecuta las solicitudes a la API y actualiza el estado local con
las respuestas del servidor.

`CurrentUserContext` comparte el usuario y los controladores de los formularios
con los componentes que los necesitan. Los componentes `Main` y `Card` consumen
este contexto para renderizar la información actual y determinar qué tarjetas
pertenecen al usuario conectado.
