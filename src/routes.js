const router = require('express').Router();
const NurseController = require('./controllers/NurseController');
const UtilsController = require('./controllers/UtilsController');

router.get('/', (req, res) => {
  return res.json({message: 'Hello World!'});
});

router.post('/nurse', NurseController.store);
router.get('/nurse', NurseController.index);
router.get('/nurse/:id', NurseController.show);
router.put('/nurse/update/:id', NurseController.update);
router.delete('/nurse/delete/:id', NurseController.delete);

// IMC
router.get('/utils/imc', UtilsController.getImc);

module.exports = router;