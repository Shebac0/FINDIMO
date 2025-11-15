Feature: Enviar contrato digital
  Como arrendador
  Quiero enviar un contrato digital al estudiante
  Para formalizar el alquiler

Scenario: Enviar contrato exitosamente
  Given que el arrendador ha aceptado una solicitud de alquiler
  When accede a la opción "Generar contrato"
  And complete los términos del contrato
  And lo envía al estudiante
  Then el sistema notificará al estudiante
  And almacenará el contrato pendiente de firma