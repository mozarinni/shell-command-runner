const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://dbUser:dbUser@cluster0.y6ect.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectDB = async () => {
    try{
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        //Exit process with failture
        process.exit(1);
    }  
};

module.exports = connectDB;