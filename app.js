const express = require("express");
const app = express();
app.use(express.static('public'));
const rutasMain = require("./routes/main");
const rutasAbout = require("./routes/about");


app.listen(3000, () => {
    console.log("Portafolio corriendo en el puerto 3000")
})


app.use("/", rutasMain)
app.use("about", rutasAbout)


//juliana

//esto es un nuevo cambio que voy a realizar
// listo de una escribo en la linea 20
// daviddiaz 