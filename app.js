const express = require("express");
const path = require("path");
const app = express();
const port = 3000

app.use(express.static(path.resolve(__dirname,"public")))

app.get("/",(req,res) => res.sendFile(path.join(__dirname,"views","index.html")))
app.get("/about",(req,res) => res.sendFile(path.join(__dirname,"views","about.html")))
app.get("/contact",(req,res) => res.sendFile(path.join(__dirname,"views","contact.html")))
app.get("/music",(req,res) => res.sendFile(path.join(__dirname,"views","music.html")))
app.get("/*",(req,res) => res.sendFile(path.join(__dirname,"views","404.html")))



app.listen(port, () => console.log(`El servidor fue levantado con exito el dia lunes a las 9 de la mañana en el puerto ${port}`))