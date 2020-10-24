const { ErrorRequestHandler } = require('express');
const { ValidationError } = require('yup');

const errorHandler = (error, req, res, next) => {
    if(error instanceof ValidationError) {
        let errors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });
        return res.status(400).json({ message: 'Validation fails', errors})
    }

    console.error(error);

    return res.status(500).json({ message: 'Internal server error' })
};

module.exports = errorHandler;