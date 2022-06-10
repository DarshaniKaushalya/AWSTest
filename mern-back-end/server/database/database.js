const mongoose = require("mongoose");
/**
 * MongoDB database connection
 */
const connectDatabase = async () => {
    try {
        //MongoDB Cloud
        // await mongoose.connect(process.env.MONGO_URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // });

        //Local DB
        await mongoose.connect(process.env.LOCAL_URI, { useNewUrlParser: true });

        console.log("mongoDB is connected")
    } catch (err) {
        console.log({
            message: 'Unable to connect to the database',
            err,
        });
    }
};

module.exports = connectDatabase;

//mongodb connection
//mongodb+srv://admin:<password>@cluster0.y39op.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// mongoose.connect(
//     'mongodb+srv://admin:admin777@cluster0.y39op.mongodb.net/myecom?retryWrites=true&w=majority',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,

//     }
// ).then(() => {
//     console.log('Database connected');
// });