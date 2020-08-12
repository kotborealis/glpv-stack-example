const petsRouter = require('../routers/pets');

/**
 * Configure routes for express app
 * @param app
 * @param config
 */
module.exports = ({app, config}) => {
    app.use('/pets/', petsRouter(config));
};
