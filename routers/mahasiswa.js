const express = require('express')
const routerMHS = express.Router()
const ctrMHS = require('../controller/mahasiswa.js')

routerMHS.get('/mahasiswa',ctrMHS.getMHS);
routerMHS.get('/mahasiswa/:nim',ctrMHS.getMHSByNim);
routerMHS.post('/mahasiswa', ctrMHS.create);
routerMHS.put('/mahasiswa/:nim', ctrMHS.update);
routerMHS.delete('/mahasiswa/:nim', ctrMHS.delete);

module.exports=routerMHS