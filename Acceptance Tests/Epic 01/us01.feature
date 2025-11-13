Feature: Registro de estudiante
  Como estudiante universitario
  Quiero registrarme en la plataforma usando mi correo electrónico y contraseña
  Para acceder a las funcionalidades de búsqueda de alquiler

Scenario: Registro exitoso de estudiante
  Given que el estudiante no tiene una cuenta en FINDIMO
  When ingresa su correo electrónico, contraseña y confirma la contraseña
  And hace clic en el botón "Registrarse"
  Then el sistema creará una nueva cuenta
  And enviará un correo de verificación