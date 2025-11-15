Feature: Solicitar alquiler de propiedad
  Como estudiante
  Quiero solicitar el alquiler de una propiedad directamente en la plataforma
  Para iniciar el proceso formal

Scenario: Solicitar alquiler exitoso
  Given que el estudiante ha decidido alquilar una propiedad
  When hace clic en "Solicitar alquiler"
  And completa cualquier información requerida
  And envía la solicitud
  Then el sistema notificará al arrendador
  And actualizará el estado de la propiedad