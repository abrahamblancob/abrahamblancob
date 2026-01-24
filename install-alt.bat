@echo off
REM Script alternativo para instalar dependencias
REM Usa --ignore-scripts para evitar problemas con PATH en subprocesos

REM Agregar Node.js al PATH para esta sesion
SET "PATH=C:\Program Files\nodejs;%PATH%"

echo ========================================
echo Verificando Node.js y npm...
echo ========================================
node --version
npm --version
echo.

echo ========================================
echo Instalando dependencias (sin scripts)...
echo ========================================
npm install --ignore-scripts

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: La instalacion fallo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Ejecutando scripts de post-instalacion...
echo ========================================
npm rebuild esbuild

echo.
echo ========================================
echo Dependencias instaladas correctamente!
echo ========================================
echo.
echo Iniciando servidor de desarrollo...
echo El sitio estara disponible en: http://localhost:5173
echo.
echo Presiona Ctrl+C para detener el servidor
echo ========================================
echo.

npm run dev
