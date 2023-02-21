const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

// const DB = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     // console.log(con.connections);
//     console.log(log.black, "DB is connected to app.....");
//   })
//   .catch((err) => {
//     console.log(log.danger, `db error ${err.message}`);
//   });

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`server is running on ${port} .......`);
});
