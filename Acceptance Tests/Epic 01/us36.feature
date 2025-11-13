Feature: Recuperación de contraseña
  Como usuario
  Quiero recuperar mi contraseña si la olvido
  Para acceder a mi cuenta nuevamente

Scenario: Recuperar contraseña exitosamente
  Given que el usuario ha olvidado su contraseña
  When hace clic en "Olvidé mi contraseña"
  And ingresa su correo electrónico
  And hace clic en "Enviar"
  Then el sistema enviará un enlace de recuperación al correo
  And al hacer clic en el enlace, podrá establecer una nueva contraseña