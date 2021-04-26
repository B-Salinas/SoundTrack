const { validationResult } = require('express-validator');

// for formatting errors from express-validator
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req); // im p sure this returns an object

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
      .array()
      .map((error) => `${error.msg}`);

    const err = Error('Bad Request.');
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad Request.';
    next(err);
  }

  next();
};


module.exports = {
  handleValidationErrors,
} 