const boom = require('@hapi/boom')

//middlewar normal de forma dinamico para esu de clousers
function validatorHandler (schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
