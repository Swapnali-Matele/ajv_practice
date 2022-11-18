const express = require('express');
const app = express();
//const router = express.Routerr
const router = require('./routes/index')

app.use(express.json());
app.use(router)


app.listen(3000,()=> console.log('server running on port 3000'));