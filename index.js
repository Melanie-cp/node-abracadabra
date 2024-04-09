import express from 'express';
const app = express()

const usuarios = ["Juan", "Jocelyn", "Astrid", "María", "Ignacia", "Javier", "Brian"]

app.get('/abracadabra/usuarios', (req, res) => {
    return res.json({
        ok: true,
        usuarios: usuarios
    })
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
