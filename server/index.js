const express = require("express");
require('dotenv').config();

const kestrel = express();
const port = process.env.PORT || 3000; //port of kestrel-server

kestrel.post("/api", (req, res) => {
  res.send("Hello from Kestrel server!");
  console.log('Request received from collector.' + req);
});

kestrel.listen(port, () => {
  console.log(`kestrel-server listening on port ${port}`);
});