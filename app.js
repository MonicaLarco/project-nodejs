const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.get("/", function (req, res){
    res.send("Monica Larco");
});

server.listen(PORT, function() {
  console.log('App server running');
});
