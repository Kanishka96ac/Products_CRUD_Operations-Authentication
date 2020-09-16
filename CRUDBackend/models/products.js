const mongoose = require('mongoose');

var Products = mongoose.model('Products', {
    name: { type: String },
    description: { type: String },
    quantity: { type: String },
    uid: { type: String }
});

module.exports = { Products };