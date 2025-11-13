Feature: Registro de arrendador
  Como arrendador
  Quiero registrarme en la plataforma usando mi correo electrónico y contraseña
  Para listar mis propiedades

Scenario: Registro exitoso de arrendador
  Given que el arrendador no tiene una cuenta
  When ingresa su correo electrónico, contraseña y datos básicos
  And hace clic en "Registrarse"
  Then el sistema creará una cuenta de arrendador
  And enviará un correo de verificación