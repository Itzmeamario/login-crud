const router = require('express').Router();
const controller = require('./controller');

router.route('/users/:id')
.get(controller.get);

module.exports = router;