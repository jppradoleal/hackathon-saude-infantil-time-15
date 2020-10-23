const router = require('express').Router();

router.get('/', (req, res) => {
  return res.json({message: 'Hello World!'});
});

module.exports = router;