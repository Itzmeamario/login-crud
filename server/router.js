const router = require('express').Router();
const controller = require('./controller');

router.route('/users/:username')
.get(controller.users.get)
.post(controller.users.post)
.put(controller.users.put)
.delete(controller.users.delete);

router.route('/auth/:username')
.get(controller.auth.get)

module.exports = router;