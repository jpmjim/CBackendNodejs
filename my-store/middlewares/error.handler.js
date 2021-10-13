//los middleware de tipo error se debe hacer despues de definir los errores
//middleware para log de errores
function logErros (err, req, res, next) {
  console.log('logErros');
  console.error(err);
  next(err);
}

//para crear un formato  para errores stacks
function errorHandler (err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
     messange: err.messange,
     stack: err.stack,
  });
}

module.exports = { logErros, errorHandler };
