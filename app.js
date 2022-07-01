const express = require('express');
const PORT = process.env.PORT || 5000;

express()
  .get("/", (req, res) => res.send("Monica Larco"))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

// server.listen(PORT, function() {
//   console.log('App server running');
// });
