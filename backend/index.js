require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

const dbconnect = require("./config/db");

const users = require("./routes/userLogin");

const user = require("./routes/user");
const path = require("path");

const changePasswordRouter = require("./routes/change_password");
const membershipRouter = require("./routes/membership");
const forgotPasswordRouter = require("./routes/forgot_password");
const paymentRouter = require("./routes/payment");


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));


dbconnect()
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((err) => {
    console.log(
      "MongoDB connection failed:",
      err.message
    );
  });


app.use("/", users);

app.use("/user", user);

app.use("/", changePasswordRouter);
app.use("/", forgotPasswordRouter);
app.use("/", membershipRouter);
app.use("/", paymentRouter);
app.use(
    "/uploads",
    express.static(
        path.join(__dirname, "uploads")
    )
);


app.listen(3040, () => {
  console.log("Server is running on port 3040");
});