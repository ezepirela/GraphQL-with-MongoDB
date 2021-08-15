const mongoose = require('mongoose');
 async function connectDB () {
    try{
        await mongoose.connect('mongodb://localhost:27017/graphql', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('mongoDB connected')
    }catch(e){
        console.log('mongoDB error ')
    }
    
};
module.exports = connectDB;


