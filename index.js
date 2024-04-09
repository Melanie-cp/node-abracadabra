import express from 'express';
const app = express()



// 404
app.get('/*', (req, res) => {
    res.send('404 😣')
})

// Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})
