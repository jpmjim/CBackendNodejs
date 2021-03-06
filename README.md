# Curso de Backend con Node.js: API REST con Express.js

2.-Configuración del entorno de desarrollo
------------------------------------------
Creamos la carpeta mkdir my-store
Accedemos ala carpeta cd my-store
Iniciamos el proyecto npm init -y configuracion general
Instalamos extensión de google chrome JSON Viewer
Para pruebas instalacion dependencia faker para datafake "npm i faker -D"
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
Se puede tener console.log en desarrollo pero no en producción 

5.-¿Qué es una RESTful API?
---------------------------

REST: Representational State Transfer
Es una conveccion que se refiere a servicios web por protocolo HTTP
Metodos:
    Get: Obtener
    Put: Modificar/Actualizar
    Patch: Modificar/Actualizar
    Post: Crear
    Delete: Eliminar

Patch
El método de solicitud HTTP PATCH aplica modificaciones parciales a un recurso.
PATCH es algo análogo al concepto de “actualización” que se encuentra en CRUD, Una solicitud se considera un conjunto de instrucciones sobre cómo modificar un recurso. Contrasta esto con PUT; que es una representación completa de un recurso.PATCH
No es necesariamente idempotente, aunque puede serlo. Contrasta esto con PUT; que siempre es idempotente.
La palabra “idempotente” significa que cualquier número de solicitudes repetidas e idénticas dejará el recurso en el mismo estado.
Por ejemplo, si un campo de contador de incremento automático es una parte integral del recurso, entonces un PUT lo sobrescribirá naturalmente (ya que sobrescribe todo), pero no necesariamente para .PATCH
PATCH (como POST) puede tener efectos secundarios sobre otros recursos.
PATCH - HTTP | MDN

Los endpoints son las URLs de un API o un backend que responden a una petición. Los mismos entrypoints tienen que calzar con un endpoint para existir. Algo debe responder para que se renderice un sitio con sentido para el visitante.


16.-¿Qué son los Middlewares?
-----------------------------
Middleware es software que permite uno o más tipos de comunicación o conectividad entre dos o más aplicaciones o componentes de aplicaciones en una red distribuida. Al facilitar la conexión de aplicaciones que no fueron diseñadas para conectarse entre sí, y al brindar funcionalidad para conectarlas de manera inteligente, el middleware agiliza el desarrollo de aplicaciones y acelera el tiempo de comercialización.
 - Funcionar como pipes
 - Validar datos
 - Capturar errores
 - Validar permisos
 - Controlar accesos

18.-Boom
--------
Manejo de errores con la libreria Boom "Status Code"
instalación npm i @hapi/boom

19.-Joi
-------
Validación de datos con la libreria Joi "validacion schemas"
npm i joi

21.-Middlewares populares en Express.js
---------------------------------------
CORS
Middleware para habilitar CORS (Cross-origin resource sharing) en nuestras rutas o aplicación. http://expressjs.com/en/resources/middleware/cors.html

Morgan
Un logger de solicitudes HTTP para Node.js. http://expressjs.com/en/resources/middleware/morgan.html

Helmet
Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. ¡No es a prueba de balas de plata, pero puede ayudar! https://github.com/helmetjs/helmet

Express Debug
Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando. https://github.com/devoidfury/express-debug

Express Slash
Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas. https://github.com/ericf/express-slash

Passport
Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones. https://github.com/jaredhanson/passport

Puedes encontrar más middlewares populares en el siguiente enlace: http://expressjs.com/en/resources/middleware.html

22.-Consideraciones para producción
Lista de consideraciones antes de llevar a producción
 - Cors niveles de accesos
 - Https servidor seguro
 - Procesos de Build proceso de información correcto
 - Remover logs captura logs pueden causar delays
 - Seguridad (Helmet) seguridad desde la primera vista, helmet colección middlerwars que coloca capas de seguridad en node
 - Testing pruebas unitarias, pruebas de integración

23.-Problema de CORS (conexión)
-------------------------------
Solucion de probblema CORS
instalamos libreria de cors
npm i cors

24.-Heroku Deployment
---------------------
Instalamos pasos en esta dirección
https://devcenter.heroku.com/articles/heroku-cli#download-and-install
heroku create
ver errores en heroku
heroku logs --tail

