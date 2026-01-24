# Guía de Solución - Problema de Instalación

## 🔍 Problema Detectado

Node.js v24.13.0 está instalado correctamente en `C:\Program Files\nodejs`, pero hay dos problemas:

1. **PowerShell Execution Policy**: PowerShell no puede ejecutar scripts npm
2. **PATH no configurado**: Node.js no está en el PATH del sistema

## ✅ Soluciones (en orden de preferencia)

### Solución 1: Agregar Node.js al PATH del Sistema (RECOMENDADO)

Esta es la solución permanente y más limpia:

1. **Abrir Variables de Entorno**:
   - Presiona `Windows + R`
   - Escribe: `sysdm.cpl` y presiona Enter
   - Ve a la pestaña "Opciones avanzadas"
   - Haz clic en "Variables de entorno"

2. **Editar PATH**:
   - En "Variables del sistema", busca `Path`
   - Haz clic en "Editar"
   - Haz clic en "Nuevo"
   - Agrega: `C:\Program Files\nodejs`
   - Haz clic en "Aceptar" en todas las ventanas

3. **Reiniciar PowerShell**:
   - Cierra TODAS las ventanas de PowerShell
   - Abre una nueva ventana de PowerShell
   - Verifica con: `node --version` y `npm --version`

4. **Instalar y ejecutar**:
   ```powershell
   cd c:\Users\abrah\Documents\repos\abrahamblancob\abrahamblancob
   npm install
   npm run dev
   ```

---

### Solución 2: Usar el Script Batch (RÁPIDO)

He creado scripts batch que evitan los problemas de PowerShell:

1. **Opción A - Script completo** (instala y ejecuta):
   ```cmd
   cd c:\Users\abrah\Documents\repos\abrahamblancob\abrahamblancob
   start.bat
   ```

2. **Opción B - Script alternativo** (si el anterior falla):
   ```cmd
   cd c:\Users\abrah\Documents\repos\abrahamblancob\abrahamblancob
   install-alt.bat
   ```

---

### Solución 3: Usar CMD en lugar de PowerShell

CMD no tiene problemas de execution policy:

1. **Abrir CMD** (no PowerShell):
   - Presiona `Windows + R`
   - Escribe: `cmd` y presiona Enter

2. **Configurar PATH temporalmente**:
   ```cmd
   SET "PATH=C:\Program Files\nodejs;%PATH%"
   ```

3. **Navegar e instalar**:
   ```cmd
   cd c:\Users\abrah\Documents\repos\abrahamblancob\abrahamblancob
   npm install
   npm run dev
   ```

---

### Solución 4: Habilitar Scripts en PowerShell

Si prefieres usar PowerShell:

1. **Abrir PowerShell como Administrador**:
   - Busca "PowerShell" en el menú inicio
   - Click derecho → "Ejecutar como administrador"

2. **Cambiar Execution Policy**:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. **Cerrar y abrir PowerShell normal**, luego:
   ```powershell
   cd c:\Users\abrah\Documents\repos\abrahamblancob\abrahamblancob
   npm install
   npm run dev
   ```

---

## 🚀 Después de la Instalación

Una vez que `npm install` termine correctamente, verás:

```
added XXX packages in XXs
```

Luego, ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Deberías ver:

```
VITE v5.x.x  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**Abre tu navegador en:** `http://localhost:5173`

---

## 📝 Archivos Creados

- `start.bat` - Script principal para instalar y ejecutar
- `install-alt.bat` - Script alternativo con --ignore-scripts
- `README.md` - Documentación completa del proyecto

---

## ❓ Si Sigues Teniendo Problemas

1. **Verifica la instalación de Node.js**:
   ```cmd
   "C:\Program Files\nodejs\node.exe" --version
   ```

2. **Reinstala Node.js**:
   - Desinstala Node.js desde Panel de Control
   - Descarga la última versión LTS desde https://nodejs.org/
   - Instala marcando la opción "Add to PATH"

3. **Limpia caché de npm**:
   ```cmd
   "C:\Program Files\nodejs\npm.cmd" cache clean --force
   ```

---

## 💡 Recomendación Final

**La mejor solución es la #1** (agregar Node.js al PATH del sistema). Es permanente y evitará problemas futuros con cualquier proyecto Node.js.
