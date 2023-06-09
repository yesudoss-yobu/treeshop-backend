const express = require("express");
// const compression = require("compression");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const port = process.env.PORT;
const RemoteDB = process.env.REMOTE_DB;
const LocalDb = process.env.LOCAL_DB;
// app.use("/", (req, res) => {
//   res.json("port 5000 is working");
// });
// app.use(compression());
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "5mb" }));
// app.use(express.urlencoded({ limit: "2mb" }));
//Router
const infoRouter = require("./Router");

// for test next function
// app.use((req, res, next) => {
//   console.log(req);
//   next();
// });

app.use("/info", infoRouter);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find document!");
});

//listening port
app.listen(port, () => {
  console.log("server started on 5000");
});

//db connections
// mongoose.connect("mongodb://localhost/mydb").then((client, err) => {
//   if (!err) {
//     console.log("db connected");
//   }
// });

mongoose.connect(RemoteDB).then((client, err) => {
  if (!err) {
    console.log("db connected");
  }
});
