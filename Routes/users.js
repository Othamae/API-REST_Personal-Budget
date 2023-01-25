const express = require ('express');
const router = express.Router();
const  { Register, getItems, getItem} = require('../controllers/users')
const {validatorGetUser, validatorCreateUser} = require('../validators/users')

/**
 * Routers:
 */
router.post('/register', validatorCreateUser, Register);

router.get('/', getItems);

router.get('/:id', validatorGetUser,getItem);

module.exports = router;