const router = require('express').Router();
const upload = require('multer')(require('./config/upload'));

const UtilsController = require('./controllers/UtilsController');
const ChildController = require('./controllers/ChildController');
const authHandler = require('./middleware/authHandler');
const UserController = require('./controllers/UserController');
const ChildDataController = require('./controllers/ChildDataController');
const PostController = require('./controllers/PostController');

router.get('/', (req, res) => {
  return res.json({message: 'Hello World!'});
});

// Child Registries Create and Index Routes
router.post('/child', authHandler.authenticate, ChildController.store);
router.get('/child', authHandler.authenticate, ChildController.index);

// Login and Create User Routes;
router.post('/user/login', authHandler.login);
router.post('/user/create', UserController.create);

// Create Post Route
router.post('/posts/create', authHandler.authenticate, upload.single('image'), PostController.create);
router.get('/posts', PostController.index);

// Child Data Index and Show
router.get('/child/data', authHandler.authenticate, ChildDataController.index);
router.get('/child/data/:id', authHandler.authenticate, ChildDataController.show);

// Child Registries Show, Update and Delete Routes
router.get('/child/detail', authHandler.authenticate, ChildController.show);
router.put('/child/update/:id', authHandler.authenticate, ChildController.update);
router.delete('/child/delete/:id', authHandler.authenticate, ChildController.delete);

// IMC
router.get('/utils/imc', UtilsController.getImc);

module.exports = router;