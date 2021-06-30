const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");

// Routes
const postsRoutes = require("./routes/api/posts");

const app = express();

// BodyParse Middleware
app.use(express.json());

//uBwanBKzMjkQbqAT

//ROUTES
/* app.get("/", (req, res) => {
  res.send("We are on home");
}); 
*/
//Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(err));

// User routes
app.use("/api/posts", postsRoutes);

const PORT = process.env.PORT || 5000;

//How to we start listening to the server
app.listen(PORT, () => console.log(`Server run at port ${PORT}`));
