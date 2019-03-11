const express = require('express');

let env = process.env.NODE_ENV || 'development'
let settings = require ('./config/setings')[env];

const app = express();

require('.config/database')(settings);
require('.config/express')(app);
require('.config/routes')(app);
require('.config/passport')();

app.listen(settings.port)
console.log(`Server linstening on port ${settings.port}`)
