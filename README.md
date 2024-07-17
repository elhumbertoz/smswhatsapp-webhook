# Ejemplo de Servidor Webhook para SMSWhatsApp

Este es un ejemplo de un servidor webhook para SMSWhatsApp, el cual habilita un servidor para recibir notificaciones en tiempo real sobre mensajes recibidos, archivos multimedia, acknowledgments (acks) y más.

## Cómo Funciona

El servidor escucha las notificaciones entrantes de los webhooks desde SMSWhatsApp. Dependiendo del contenido de la notificación, procesa mensajes, acknowledgments o archivos multimedia.

### Activando el Webhook

Para activar el webhook, los usuarios deben llamar al siguiente endpoint POST para indicar la URL de su servidor:

```bash
curl --location "https://mywhatsapp.jca.ec:5433/auth/setWebhook?number=Token" \
--header "Content-Type: application/json" \
--data "{ \"webhookUrl\": \"https://mi-servidor/webhook\" }"
```
Reemplaza Token con tu token de SMSWhatsApp y https://mi-servidor/webhook con la URL del webhook de tu servidor.

## Cómo Empezar
* Clona este repositorio.
```bash
git clone https://github.com/elhumbertoz/smswhatsapp-webhook
```
* Instala las dependencias usando npm install.
```bash
npm install
```
* Ejecuta el servidor.
```bash
node index.js
```

## Dependencias
* Express: Un framework web rápido, minimalista y sin opiniones para Node.js.
* Body-parser: Middleware de análisis del cuerpo de las solicitudes para Node.js.
Licencia
Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

## Contribuir
Siéntete libre de enviar issues y pull requests.

##Contacto
Si tienes alguna pregunta, no dudes en ponerte en contacto.

Este proyecto es un ejemplo y debe adaptarse para ajustarse a tu caso de uso y requisitos específicos.
