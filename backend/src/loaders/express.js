const express = require("express");
const {correlationMiddleware} = require('../middleware/correlationMiddleware');

/**
 * Configure base middleware for express app
 * @param app
 * @param config
 */
module.exports = ({app, config}) => {
    app.use(express.json());
    // Correlation ID middleware
    app.use(correlationMiddleware());
};
