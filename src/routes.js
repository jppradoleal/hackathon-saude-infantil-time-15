const router = require('express').Router();
const UtilsController = require('./controllers/UtilsController');
const ChildController = require('./controllers/ChildController');

router.get('/', (req, res) => {
  return res.json({message: 'Hello World!'});
});

router.post('/child', ChildController.store);
router.get('/child', ChildController.index);
router.get('/child/:id', ChildController.show);
router.put('/child/update/:id', ChildController.update);
router.delete('/child/delete/:id', ChildController.delete);

// IMC
router.get('/utils/imc', UtilsController.getImc);

module.exports = router;