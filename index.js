import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

const nombreArchivo = fileURLToPath(import.meta.url);
const directorioActual = dirname(nombreArchivo);

app.use(express.static(directorioActual + '/assets'));

const usuarios = [
    'Juan',
    'Jocelyn',
    'Astrid',
    'Maria',
    'Ignacia',
    'Javier',
    'Brian'
];

let numeroAleatorio = Math.floor(Math.random() * 4) + 1;

const nuevoNumeroAleatorio = numeroAnterior => {
    let nuevoNumero = Math.floor(Math.random() * 4) + 1;

    while (nuevoNumero === numeroAnterior) {
        nuevoNumero = Math.floor(Math.random() * 4) + 1;
    }

    return nuevoNumero;
};

const usuarioMiddleware = (req, res, next) => {
    const nombreUsuario = req.params.usuario;
    const usuarioExiste = usuarios.find(u => u.toLowerCase() === nombreUsuario.toLowerCase());

    if (usuarioExiste) {
        next();
    } else {
        res.status(404).sendFile(directorioActual + '/assets/who.jpeg');
    }
};

app.get('/abracadabra/usuarios', (req, res) => {
    return res.json({
        usuarios: usuarios
    });
});

app.get('/abracadabra/juego/:usuario', usuarioMiddleware, (req, res) => {
    res.sendFile(directorioActual + '/index.html');
});

const nConejoMiddleware = (req, res, next) => {
    const numeroConejo = req.params.n;

    if (numeroAleatorio == numeroConejo) {
        next();
    } else {
        return res.sendFile(directorioActual + '/assets/voldemort.jpg');
    }
};

app.get('/abracadabra/conejo/:n', nConejoMiddleware, (req, res) => {
    numeroAleatorio = nuevoNumeroAleatorio(numeroAleatorio);
    return res.sendFile(directorioActual + '/assets/conejito.jpg');
});

app.get('/*', (req, res) => {
    return res.send('Esta página no existe!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})
