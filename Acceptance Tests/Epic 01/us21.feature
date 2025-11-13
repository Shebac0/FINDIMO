Feature: Inicio de sesión de arrendador
  Como arrendador registrado
  Quiero iniciar sesión con mis credenciales
  Para gestionar mis propiedades

Scenario: Inicio de sesión exitoso de arrendador
  Given que el arrendador tiene una cuenta válida
  When ingresa su correo electrónico y contraseña
  And hace clic en "Iniciar sesión"
  Then el sistema accederá a su cuenta
  And lo redirigirá a su dashboard de arrendador