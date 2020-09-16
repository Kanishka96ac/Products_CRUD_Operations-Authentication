const mongoose = require('mongoose');

require ('./user.model');

mongoose.connect(process.env.MONGODB_URL, (err) => {
    if (!err) { console.log("MongoDB connection succeeded.");
        
    }else{
        console.log("Error in MongoDB connection : " + JSON.stringify(err, undefined , 2));
    }
});

module.exports = mongoose;