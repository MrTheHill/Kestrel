const express = require("express");
require('dotenv').config();

const kestrel = express();
const port = process.env.PORT || 3000;


kestrel.listen(port, () => {
  console.log(`kestrel-server listening on port ${port}`);
});