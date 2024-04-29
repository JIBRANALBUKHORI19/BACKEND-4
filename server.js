const express = require('express');
const app = express();
const port = 5000

const routerMHS = require('./routers/mahasiswa')
const routerMK = require('./routers/matakuliah')
const routerNILAI = require('./routers/nilai')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(routerMHS)
app.use(routerMK)
app.use(routerNILAI)

app.listen(port, () => {
    console.log(`server berjalan dengan localhost:${port}`);
})