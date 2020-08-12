module.exports = () =>
    process.on('SIGINT', () => process.exit(0));
