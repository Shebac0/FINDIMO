Feature: Integración de redes sociales
  Como usuario
  Quiero iniciar sesión usando mis redes sociales
  Para facilitar el registro y acceso

Scenario: Inicio de sesión con Facebook exitoso
  Given que el usuario prefiere usar redes sociales
  When hace clic en "Iniciar sesión con Facebook"
  And autoriza la aplicación
  Then el sistema accederá a la cuenta
  And creará o vinculará el perfil