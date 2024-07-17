const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT_WEB = 5025; // Puerto para el servidor web

// Aumentar el límite de tamaño del cuerpo de la solicitud
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

// Endpoint para el webhook
app.post('/webhook', async (req, res) => {
    let { content, ...data } = req.body;

    switch (content) {
        case 'message':
            // Procesar mensaje
            console.log('Mensaje recibido:', data);
            break;
        case 'ack':
            // Procesar ACK
            console.log('ACK recibido:', data);
            break;
        case 'media':
            // Procesar media
            try {
                data = await saveMediaData(data);
            } catch (error) {
                console.log("Error al guardar media", error);
            }
            console.log('Media recibida:', data);
            break;
        default:
            console.log('Tipo de contenido desconocido:', content);
    }

    try {
        saveBuffer({
            content: content,
            ...data
        });
    } catch (error) {
        console.log("Error al guardar datos en archivo", error);
    }

    // Responder con éxito
    res.status(200).send('Datos recibidos con éxito');
});

// Iniciar el servidor web
app.listen(PORT_WEB, () => {
    console.log(`Servidor web escuchando en el puerto ${PORT_WEB}`);
});