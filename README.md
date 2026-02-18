# Proyecto de Interfaces de Software - Layouts con Tailwind CSS

Este proyecto implementa tres vistas diferentes mostrando conceptos de CSS Flexbox, Grid y un taller práctico con tarjetas de vuelos.

## Características Implementadas

### 1. Flex Layout
- Fondo oscuro (azul marino #0a1628)
- Tarjetas con efecto glassmorphism (backdrop-blur)
- Bordes redondeados (rounded-2xl)
- Transparencias y sombras

### 2. Grid Layout
- Mismo estilo visual que Flex Layout
- Demuestra conceptos de CSS Grid

### 3. Taller Práctico (Flight Cards)
- Tarjetas de vuelos estilo móvil
- Imágenes con bordes muy redondeados (rounded-4xl)
- Efecto blur/gradiente sobre las imágenes
- Iconos SVG inline (corazón, precio, avión)
- Botones con bordes completamente redondeados (rounded-full)
- Sombras suaves (shadow-2xl)
- Estados interactivos (hover, like)

## Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Notas Importantes

- Las imágenes de los vuelos usan URLs de Unsplash como placeholder
- Puedes reemplazarlas con tus propias imágenes en la carpeta `/public`
- Todos los iconos son SVG inline para mejor rendimiento
- El proyecto usa Tailwind CSS v4 con la nueva sintaxis

## Estructura del Proyecto

```
/app
  - page.tsx (página principal con navegación)
  - layout.tsx
  - globals.css
/components
  - FlexLayout.tsx
  - GridLayout.tsx
  - FlightCards.tsx
/public
  - (imágenes)
```
