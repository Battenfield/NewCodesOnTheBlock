/* jshint esversion:6 */
const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const ip = process.env.IP || '127.0.0.1';

app.use( express.static(__dirname+'/client') );

app.get('/', (req, res)=>{
  res.send('/index.html');
});
app.set('port', port);

app.listen(app.get('port'), ()=>{
  console.log('listening on', port);
});
