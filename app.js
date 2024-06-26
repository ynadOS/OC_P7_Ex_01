const express = require("express")
const mongoose = require("mongoose")
const app = express()
const path = require('path');

const stuffRoutes = require("./routes/stuff.js")
const userRoutes = require("./routes/user.js")

mongoose.connect("mongodb+srv://champloo63:OpenclassroomsExercise01@cluster0.m7cs0z6.mongodb.net/",
{ useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))
    
// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next();
})
    
app.use(express.json())
app.use("/api/stuff", stuffRoutes)
app.use("/api/auth", userRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app