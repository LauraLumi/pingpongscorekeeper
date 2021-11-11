const express = require('express') //Impordime express serveri
const app = express() //Teeme rakenduse
const path = require('path') //Kaustade "liitmiseks"


app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.redirect('/index.html');  
})

app.get('*', (req, res) => {
    res.redirect('/');
})

//Serveri k2ivitamine pordil 3000
app.listen(3000, () => {
    console.log("Pingpong 3000")
})