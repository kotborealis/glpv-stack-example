const {Router} = require('express');
const logger = require(('../logging/logger')).logger('router/pets');

module.exports = (config) => {
    const state = [];

    const router = Router();

    router.get('/', (req, res) => {
        res.json(state);
    })

    router.post('/', (req, res) => {
        const pet = req.body;
        logger.info(`Pushing new pet`, {pet, state});
        state.push({...pet, id: state.length});
        res.status(200).end();
    });

    router.get('/:petId/', (req, res) => {
        const id = req.params.petId;
        logger.info(`Searching pet by id`, {id, state});

        if(Number(id) < 0){
            logger.error("Invalid input", {id});
            res.status(500).end();
            return;
        }

        if(state[id])
            res.json(state[id]);
        else {
            logger.error(`Pet not found`, {id, state});
            res.status(404).end();
        }
    });

    return router;
};
