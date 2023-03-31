const mongoose=require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDb Connected "+ conn.connection.host.blue.bold);
    }
    catch (error)
    {
        console.log("the error :" + error.message);
        process.exit();
    }
}
mongoose.set('strictQuery', false);

module.exports = connectDB;