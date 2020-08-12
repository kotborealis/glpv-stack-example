module.exports = {
    api: {
        port: process.env.API_PORT || 3000
    },
    logging: {
        transports:
            (process.env.LOGGING_TRANSPORTS || 'syslog,console')
                .split(',').filter(i => i),
        syslog: {
            host: process.env.LOGGING_SYSLOG_HOST || 'vector',
            port: process.env.LOGGING_SYSLOG_PORT || 513,
            protocol: 'udp4'
        }
    }
};
