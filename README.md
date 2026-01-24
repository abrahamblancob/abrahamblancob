# Abraham Blanco - Portfolio Landing Page

Portfolio personal profesional construido con React, Tailwind CSS y Framer Motion, siguiendo principios SOLID para máxima escalabilidad.

## 🎯 Características

- ✨ **Diseño Dark Mode Moderno** con efectos glassmorphism
- 🎨 **Animaciones Fluidas** con Framer Motion
- 📱 **Totalmente Responsive** (Mobile First)
- 🏗️ **Arquitectura SOLID** para fácil escalabilidad
- ⚡ **Alto Rendimiento** con Vite
- 🎭 **Componentes Reutilizables** y modulares

## 🚀 Tecnologías

- **React 18** - Framework UI
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animaciones profesionales
- **Lucide React** - Iconos modernos

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── common/          # Componentes reutilizables (Button, Card, etc.)
│   ├── layout/          # Layout (Navbar, Footer)
│   └── sections/        # Secciones de página (Hero, About, etc.)
├── hooks/               # Custom hooks (useScrollAnimation, etc.)
├── constants/           # Datos y configuración
│   ├── profile.js       # Información personal
│   └── theme.js         # Tema y animaciones
└── styles/              # Estilos globales
```

## 🛠️ Instalación

### Prerequisitos

Necesitas tener instalado **Node.js** (versión 18 o superior).

Si no tienes Node.js instalado:
1. Descarga desde: https://nodejs.org/
2. Instala la versión LTS (Long Term Support)
3. Verifica la instalación:
   ```bash
   node --version
   npm --version
   ```

### Pasos de Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   - El servidor se ejecutará en: `http://localhost:5173`
   - La página se recargará automáticamente al hacer cambios

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea el build de producción
- `npm run preview` - Previsualiza el build de producción

## 🎨 Personalización

### Actualizar Información Personal

Edita el archivo `src/constants/profile.js`:

```javascript
export const profileData = {
  name: "Tu Nombre",
  title: "Tu Título",
  // ... más configuración
}
```

### Modificar Colores y Tema

Edita `tailwind.config.js` para cambiar la paleta de colores:

```javascript
colors: {
  primary: '#3B82F6',  // Azul eléctrico
  accent: '#06B6D4',   // Cian
}
```

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `src/components/sections/`
2. Importa y agrega en `src/App.jsx`
3. Actualiza la navegación en `src/constants/theme.js`

## 🏗️ Arquitectura SOLID

Este proyecto sigue los principios SOLID:

- **Single Responsibility**: Cada componente tiene una única responsabilidad
- **Open/Closed**: Componentes extensibles vía props
- **Liskov Substitution**: Interfaces consistentes
- **Interface Segregation**: Props específicos por componente
- **Dependency Inversion**: Lógica separada en hooks/services

## 🚀 Escalabilidad Futura

La arquitectura está preparada para:

- ✅ Blog con CMS
- ✅ Showcase de proyectos
- ✅ Panel de administración
- ✅ Multi-idioma (i18n)
- ✅ Integración con APIs

## 📝 Licencia

© 2025 Abraham Blanco. Todos los derechos reservados.

## 📧 Contacto

- **Email**: abrahamblancob@gmail.com
- **LinkedIn**: [Abraham Blanco](https://www.linkedin.com/in/abrahamblanco)

---

**Desarrollado con ❤️ siguiendo las mejores prácticas de desarrollo frontend**
