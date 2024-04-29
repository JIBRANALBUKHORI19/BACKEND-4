const express = require('express')
const routerMK = express.Router()
const ctrMK = require('../controller/matakuliah.js')

routerMK.get('/matakuliah', ctrMK.getMK);
routerMK.get('/matakuliah/:kdmk', ctrMK.getMKByKodeMK);
routerMK.post('/matakuliah', ctrMK.create);
routerMK.put('/matakuliah/:kdmk', ctrMK.update);
routerMK.delete('/matakuliah/:kdmk', ctrMK.delete);

module.exports=routerMK