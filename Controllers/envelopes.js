const { matchedData } = require('express-validator');
const { where } = require('sequelize');
const Envelopes = require('../models/envelopes');
const {handleHttpError} = require('../utils/handleError')

const CreateEnvelope = async (req, res)=>{
   try {
    const body = req.body;
    const data = await Envelopes.create(body);
        res.send(data)        
    } catch (e) {
        handleHttpError(res, 'ERROR_CREATING_ENVELOPE')
    }

}

const ListOfEnvelopes = async (req, res)=>{
    try {
        const data = await Envelopes.findAll({});
        res.send(data)
    } catch (e) {
        handleHttpError(res, 'ERROR_GETTING_ENVELOPES')
    }
    
}

const GetEnvelope = async (req, res)=>{
    try {
        req = matchedData(req)
        const {id} = req;
        const data = await Envelopes.findByPk(id);
        res.send(data)
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ENVELOPE')
    }   
}

const UpdateAmount = async (req, res)=>{
    try {       
        const {id} = req.params;        
        const body = req.body;
        await Envelopes.update(body, {where: { id: id }});
        const data = await Envelopes.findByPk(id);         
        res.send(data)               
    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATIGN_ENVELOPE')
    }

}

const TransferAmount = async (req, res)=>{
    try {
        const idFrom = req.fromEnvelope.id;
        const idTo = req.toEnvelope.id;
        await Envelopes.update({"amount": req.fromEnvelope.amount}, {where: { id: idFrom }})   
        const dataFrom = await Envelopes.findByPk(idFrom);  
        await Envelopes.update({"amount":req.toEnvelope.amount}, {where: { id: idTo }})    
        const dataTo = await Envelopes.findByPk(idTo); 
        const data = [dataFrom, dataTo]
        res.send(data)       
    } catch (e) {
        handleHttpError(res, 'ERROR_TRANSFERING_AMOUNT')
    }

}

const DeleteEnvelope = async (req, res)=>{
    try {
        req = matchedData(req)
        const {id} = req;
        const data = await Envelopes.findByPk(id);
        data.destroy()
        res.send(`Envelope ${data.name} has been deleted`)
    } catch (e) {
        handleHttpError(res, 'ERROR_DELETE_ENVELOPE')
    }   
}


module.exports = {CreateEnvelope, ListOfEnvelopes, GetEnvelope, UpdateAmount,TransferAmount, DeleteEnvelope};