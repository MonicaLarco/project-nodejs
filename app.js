const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send("Monica Larco"));

app.listen(port, () => console.info(`Listening on ${ port }`));

// express()
//   .get("/", (req, res) => res.send("Monica Larco"))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`));

// server.listen(PORT, function() {
//   console.log('App server running');
// });
