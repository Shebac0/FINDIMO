Feature: Inicio de sesión de estudiante
  Como estudiante registrado
  Quiero iniciar sesión con mis credenciales
  Para acceder a mi perfil y buscar alquileres

Scenario: Inicio de sesión exitoso
  Given que el estudiante tiene una cuenta válida
  When ingresa su correo electrónico y contraseña
  And hace clic en "Iniciar sesión"
  Then el sistema accederá a su cuenta
  And lo redirigirá a su dashboard de estudiante