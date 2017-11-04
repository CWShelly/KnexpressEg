

const app = require(__dirname + '/_server.js');
const PORT = 4000;

app(PORT, console.log('server is up on ' + PORT));
