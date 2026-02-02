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

## 🌐 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages con dominio personalizado.

### Configuración Inicial

1. **Habilitar GitHub Pages en tu repositorio:**
   - Ve a Settings → Pages
   - En "Source", selecciona "GitHub Actions"
   - En "Custom domain", ingresa: `www.abrahamblancob.com`
   - Marca "Enforce HTTPS"

2. **Configurar DNS en GoDaddy:**
   - Ve a tu panel de GoDaddy → DNS Management
   - Agrega los siguientes registros:
   
   **Registro A (para dominio raíz):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   TTL: 600
   ```
   
   **Registro CNAME (para www):**
   ```
   Type: CNAME
   Name: www
   Value: abrahamblancob.github.io
   TTL: 1 Hour
   ```

3. **Hacer push de los cambios:**
   ```bash
   git add .
   git commit -m "Configure custom domain for GitHub Pages"
   git push origin main
   ```

4. **El despliegue se ejecutará automáticamente:**
   - Ve a la pestaña "Actions" en tu repositorio
   - Verás el workflow "Deploy to GitHub Pages" ejecutándose
   - Una vez completado, tu sitio estará disponible en: `https://www.abrahamblancob.com`

### Verificar DNS

Espera 24-48 horas para que los cambios DNS se propaguen completamente. Puedes verificar con:

```bash
nslookup abrahamblancob.com
```

### Despliegue Manual

Si necesitas desplegar manualmente:

```bash
npm run build
```

Luego sube la carpeta `dist` a la rama `gh-pages` o usa el workflow de GitHub Actions.

### Actualizar el Sitio

Cada vez que hagas push a la rama `main`, el sitio se actualizará automáticamente.

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
