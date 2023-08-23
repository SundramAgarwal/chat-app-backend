const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose"); //imported all dependencies
mongoose.set("strictQuery", false);
const bodyParser = require("body-parser");
const cors = require("cors");
const { chats } = require("./data/data");

const userRoutes = require("./Routes/userRoutes");

const app = express();

app.use(express.json());
// app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      // "https://chat-app.vercel.app"
    ],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Server is running fine!!");
});

// app.get("/api/chats", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
