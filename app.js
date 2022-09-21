const express = require("express");
const app = express();
const path = require('path')



app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname)

const rutasMain = require("./routes/main");
app.use("/", rutasMain)

app.listen(3000, () => {
    console.log("Portafolio corriendo en el puerto 3000")
})