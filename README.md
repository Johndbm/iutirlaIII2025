# Página de Portafolio Escolar

Este proyecto es una página de aterrizaje (landing page) escolar diseñada para mostrar los horarios y equipos de cada trimestre con un estilo temático de cómic. La landing page incluye una sección principal (hero), horarios trimestrales con códigos QR y una sección para la información de los equipos.

## Estructura del Proyecto

- **public/**: Contiene archivos estáticos.
  - **index.html**: Documento HTML principal de la landing page.
  - **hero-placeholder.jpg**: Imagen de ejemplo para la sección principal (hero).

- **src/**: Contiene el código fuente de la aplicación.
  - **assets/**: Contiene recursos como los códigos QR.
    - **qr-codes/**: Directorio para las imágenes de los códigos QR de cada trimestre.
  - **components/**: Contiene los componentes React para las diferentes secciones de la landing page.
    - **HeroSection.tsx**: Renderiza la sección principal (hero).
    - **TrimesterSchedule.tsx**: Muestra los horarios trimestrales y los códigos QR.
    - **TeamsSection.tsx**: Presenta la información de los equipos.
    - **Footer.tsx**: Renderiza el pie de página de la landing page.
  - **styles/**: Contiene los estilos CSS de la aplicación.
    - **comic-theme.css**: Estilos que implementan la temática de cómic.
  - **App.tsx**: Componente principal de la aplicación que combina todos los demás componentes.
  - **main.tsx**: Punto de entrada de la aplicación React.

- **package.json**: Archivo de configuración de npm, lista las dependencias y scripts.
- **tsconfig.json**: Archivo de configuración de TypeScript que especifica las opciones del compilador.

## Tecnologías Utilizadas

- **React**: Para construir la interfaz de usuario de manera modular, permitiendo un fácil mantenimiento y reutilización de componentes.
- **TypeScript**: Proporciona seguridad de tipos, ayudando a detectar errores durante el desarrollo.
- **CSS**: Para estilizar la aplicación con una temática de cómic, usando una paleta de colores oscuros y tipografía estilo cómic (amarillo o azul).

## Despliegue

Este proyecto puede ser desplegado fácilmente en servicios en la nube como Vercel, que soporta aplicaciones React de forma nativa. Simplemente conecta tu repositorio de GitHub a Vercel y este se encargará del proceso de despliegue.

## Instrucciones de Configuración

1. Clona el repositorio:
   ```
   git clone <url-del-repositorio>
   ```
2. Navega al directorio del proyecto:
   ```
   cd ProyectoFinal
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```
   npm start
   ```

## Contribución

¡Siéntete libre de contribuir a este proyecto enviando issues o pull requests! Tus comentarios y contribuciones son bienvenidos!