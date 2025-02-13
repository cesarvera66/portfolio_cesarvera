# Contact Form (Disabled) / Formulario de Contacto (Deshabilitado)

## English

This contact form section is currently **disabled**, but the code remains available in case you want to enable and implement it in the future.

### Description
The form is designed to send messages to an email address configured in the backend. It uses an AJAX request to submit data without reloading the page and includes Google reCAPTCHA integration to prevent spam.

### Current Status
- **Disabled**: Not operational in the current project version.
- **Code available**: You can enable it by modifying the configuration and ensuring the backend is correctly set up.

### How to Enable It
1. **Configure the backend:**
   - Modify `contact.php` by adding a valid email address in the `$receiving_email_address` variable.
   - Ensure that `php-email-form.php` is present in the correct path.
   - If you wish to use SMTP, configure the correct values in the appropriate section.

2. **Enable the form in the frontend:**
   - In the JavaScript file (`contact.js` or similar), ensure the `action` URL points correctly to `contact.php`.
   - If using Google reCAPTCHA, replace the key in `data-recaptcha-site-key`.

3. **Testing:**
   - Verify that the form sends data correctly and that emails are received without issues.
   - Use the browser console to debug AJAX request errors.

### Notes
- If you decide not to enable this functionality, you can delete the code or keep it commented for future reference.
- If the hosting does not allow `mail()`, consider configuring an SMTP email service such as Gmail, SendGrid, or Mailgun.

### Security
- **Sanitize and validate input data** before sending it to the backend.
- **Avoid exposing credentials in the frontend**.
- **Use reCAPTCHA or alternative mechanisms to prevent spam**.

---

## Español

Esta sección del formulario de contacto está actualmente **deshabilitada**, pero el código sigue disponible en caso de que desees habilitarlo e implementarlo en el futuro.

### Descripción
El formulario está diseñado para enviar mensajes a un correo electrónico definido en el backend. Utiliza una solicitud AJAX para el envío de datos sin recargar la página e incluye integración con Google reCAPTCHA para evitar spam.

### Estado Actual
- **Deshabilitado**: No está operativo en la versión actual del proyecto.
- **Código disponible**: Puedes activarlo modificando la configuración y asegurándote de que el backend esté configurado correctamente.

### Cómo Habilitarlo
1. **Configurar el backend:**
   - Modifica `contact.php` agregando un correo válido en la variable `$receiving_email_address`.
   - Asegúrate de que `php-email-form.php` esté presente en la ruta correcta.
   - Si deseas usar SMTP, configura los valores correctos en la sección correspondiente.

2. **Habilitar el formulario en el frontend:**
   - En el archivo JavaScript (`contact.js` o similar), verifica que la URL de `action` apunte correctamente a `contact.php`.
   - Si usas Google reCAPTCHA, reemplaza la clave en `data-recaptcha-site-key`.

3. **Pruebas:**
   - Verifica que el formulario envía correctamente los datos y que los correos se reciben sin problemas.
   - Usa la consola del navegador para depurar errores en la solicitud AJAX.

### Notas
- Si decides no habilitar esta funcionalidad, puedes eliminar el código o mantenerlo comentado para referencia futura.
- Si el hosting no permite `mail()`, considera configurar un servicio de correo SMTP como Gmail, SendGrid o Mailgun.

### Seguridad
- **Sanitiza y valida los datos de entrada** antes de enviarlos al backend.
- **Evita exponer credenciales en el frontend**.
- **Usa reCAPTCHA o mecanismos alternativos para prevenir spam**.

---
If you need assistance with the configuration, check your hosting or email service documentation.
Si necesitas asistencia para la configuración, revisa la documentación del hosting o servicio de correo que utilizarás.


