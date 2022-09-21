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


//juliana - juliana es una mujer muy amable

//esto es un nuevo cambio que voy a realizar 

// daviddiaz,  es un muy buen trabajor