Feature: Recibir notificaciones de interés
  Como arrendador
  Quiero recibir notificaciones cuando un estudiante muestre interés en mi propiedad
  Para responder rápidamente

Scenario: Notificación de interés recibida
  Given que un estudiante contacta o guarda una propiedad
  When el arrendador tenga las notificaciones activadas
  Then el sistema enviará una notificación push o email con detalles del estudiante