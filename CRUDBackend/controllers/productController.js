const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Products} = require('../models/products');

//
router.get('/', (req, res) => {
    Products.find((err, docs) =>{
        if (!err) { 
            res.send(docs);
        }else{
            console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Products.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2)); }
    });
});



router.post('/', (req, res) => {
    var newProduct = new Products({
        name: req.body.pname,
        description: req.body.pdescription,
        quantity: req.body.pquantity,
        uid: req.body.uid,
    
    });

    newProduct.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Save :' + JSON.stringify(err, undefined, 2)); }

    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var newProduct = {
        name: req.body.pname,
        description: req.body.pdescription,
        quantity: req.body.pquantity,
        uid: req.body.uid,
    };
    Products.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Products.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Products Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;