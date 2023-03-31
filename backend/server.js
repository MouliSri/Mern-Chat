const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes=require("./routes/chatRoutes")
const {notFound,errorHandler}=require("./middleware/errorMiddleware")

dotenv.config();
connectDB();
const app = express();

app.use(express.json());




app.get("/", function (req, res) {
    res.send("api is running on get method");
})

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, console.log('the server started at the PORT 5000'.red.bold));
