 const express = require('express');
 const app = express();
 const egRouter = require(__dirname + '/routes/egRouter').egRouter;
 const port = 4000;

 app.use(function(req, res, next) {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, token');
     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
     next();
 });

 app.use('/api', egRouter);
 app.listen(port, console.log('up on ' + port));
