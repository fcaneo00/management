const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const port = config.server.port;

const app = express();

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
  next();
});

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint for /
app.get("/", (req, res) => {
  res.send("Index");
});


// Route for /api/v1/products/
app.use("/api/v1/products/", require("./routes/product"));
// Route for /api/v1/users/
app.use("/api/v1/users/", require("./routes/User"));
// Route for /api/v1/roles/
app.use("/api/v1/roles/", require("./routes/Role"));
// Route for /api/v1/orders/
app.use("/api/v1/orders/", require("./routes/Order"));
// Route for /api/v1/orderDetails/
app.use("/api/v1/orderDetails/", require("./routes/orderDetail"));
// Route for /api/v1/measure/
app.use("/api/v1/measure/", require("./routes/Measure"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})