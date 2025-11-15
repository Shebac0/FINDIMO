Feature: Solicitar verificación de identidad
  Como arrendador
  Quiero solicitar verificación de identidad a estudiantes interesados
  Para mayor seguridad

Scenario: Solicitar verificación de identidad
  Given que un estudiante contacta para alquilar
  When el arrendador hace clic en "Solicitar verificación"
  Then el sistema enviará una solicitud al estudiante
  And una vez verificada, mostrará un sello en su perfil