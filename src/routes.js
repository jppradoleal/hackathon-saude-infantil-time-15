const router = require('express').Router();
const UtilsController = require('./controllers/UtilsController');
const ChildController = require('./controllers/ChildController');
const authHandler = require('./middleware/authHandler');
const UserController = require('./controllers/UserController');

router.get('/', (req, res) => {
  return res.json({message: 'Hello World!'});
});

// Child Registries Routes
router.post('/child', ChildController.store);
router.get('/child', ChildController.index);
router.get('/child/:id', ChildController.show);
router.put('/child/update/:id', ChildController.update);
router.delete('/child/delete/:id', ChildController.delete);

// Login and Create User Routes;
router.post('/user/login', authHandler.login);
router.post('/user/create', UserController.create);

// IMC
router.get('/utils/imc', UtilsController.getImc);

module.exports = router;