@echo off
REM Script para instalar dependencias y ejecutar el servidor de desarrollo
REM Evita problemas con PowerShell execution policy

REM Agregar Node.js al PATH para esta sesion
SET "PATH=C:\Program Files\nodejs;%PATH%"

echo ========================================
echo Verificando Node.js y npm...
echo ========================================
node --version
npm --version
echo.

echo ========================================
echo Instalando dependencias...
echo ========================================
npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: La instalacion de dependencias fallo.
    echo Por favor revisa los errores anteriores.
    pause
    exit /b 1
)

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
