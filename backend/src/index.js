const config = require('chen.js').config('.config.js');
require('./logging/logger').init(config);

const logger = require('./logging/logger').logger('API');

const express = require('express');
const app = express();

require('./loaders/swagger')({app, config});
require('./loaders/metrics')({app, config});
require('./loaders/express')({app, config});
require('./loaders/routes')({app, config});
require('./loaders/shutdown')({config});


app.listen(config.api.port, () => logger.info(`Server running on 0.0.0.0:${config.api.port}`));
