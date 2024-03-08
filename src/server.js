const cors = require('cors')
const express = require('express')
const {routes} = require('./routes')
const {db} = require('./database/connect')


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 5555,()=>console.log("server rodando!!!"))