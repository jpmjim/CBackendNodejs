# Curso de Backend con Node.js: API REST con Express.js

2.-Configuración del entorno de desarrollo
------------------------------------------
Creamos la carpeta mkdir my-store
Accedemos ala carpeta cd my-store
Iniciamos el proyecto npm init -y configuracion general
Creamos los siguientes archivo dentro de my-store
  - .gitignore lo hacemos con gitignore.io
  - .editorconfig instalamos un extension "EditorConfig for VS Code"
  - .eslintrc.json
  - index.js
Instalación de dependencias 
npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D

Correr proyecto con
npm run dev "en modo desarrollo"
npm run start "en modo producción servidor node plano"

3.-Instalación de Express.js y tu primer servidor HTTP
------------------------------------------------------
Instalación de express como dependencia de producción diferente a las de desarrollo.
npm i express

se puede tener console.log en desarrollo pero no en producción 