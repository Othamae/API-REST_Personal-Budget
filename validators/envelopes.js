const {check} = require('express-validator');
const {validateResult} = require('../utils/handleValidators');
const {handleHttpError} = require('../utils/handleError');
const Envelopes = require('../models/envelopes');

const validatorCreateEnvelope = [
    check("name").exists().notEmpty(),
    check("amount").exists().notEmpty(), 
    check("userid").exists().notEmpty(),
    (req, res, next)=>{
       return validateResult(req, res, next);
    }
]

const validatorGetEnvelope = [ 
    check("id").exists().notEmpty(),
    (req, res, next)=>{
       return validateResult(req, res, next);
    }
]

const validatorTransfer = [ 
    check("id").exists().notEmpty(),
    async (req, res, next)=>{
        try {             
            const from = req.params.from;
            const to = req.params.to;      
            const {amount} = req.body;
            const fromEnvelope = await Envelopes.findOne({where: {"name": from}});             
            const toEnvelope =await Envelopes.findOne({where: {"name": to}}); 
            if (fromEnvelope.amount <amount){
                res.status(400).send(`Sorry, the budget in envelope ${from} is not enough`)
            } else {                
                fromEnvelope.amount -=amount;
                toEnvelope.amount +=amount;
                req.fromEnvelope = fromEnvelope;
                req.toEnvelope = toEnvelope;             
                next() 
            }     
        } catch (e) {
            handleHttpError(res, 'ERROR_validatorTransfer')
        }
    }
]


module.exports =  {validatorCreateEnvelope, validatorGetEnvelope, validatorTransfer}