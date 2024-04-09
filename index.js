import express from 'express';
const app = express()

app.get("/Inicio", (req, res) => {
    res.send("Hola mundo! Servidor con Express js &#128526;")
})


// 404
app.get('/*', (req, res) => {
    res.send('404 😣')
})

// Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})
