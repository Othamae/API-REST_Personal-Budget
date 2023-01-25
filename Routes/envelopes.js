const express = require ('express');
const router = express.Router();
const  {CreateEnvelope, ListOfEnvelopes, GetEnvelope, UpdateAmount, TransferAmount, DeleteEnvelope} = require('../controllers/envelopes')
const {validatorCreateEnvelope, validatorGetEnvelope, validatorTransfer} = require('../validators/envelopes');

/**
 * Routers: 
 */
router.get('/',  ListOfEnvelopes);

router.post('/', validatorCreateEnvelope, CreateEnvelope);

router.get('/:id',validatorGetEnvelope, GetEnvelope);

router.put('/:id',validatorCreateEnvelope, UpdateAmount);

router.put('/:userid/:from/transfer/:to',validatorTransfer, TransferAmount);

router.delete('/:id',validatorGetEnvelope, DeleteEnvelope);



module.exports = router;