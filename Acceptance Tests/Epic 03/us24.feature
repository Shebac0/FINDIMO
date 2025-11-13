Feature: Responder consulta via chat
  Como arrendador
  Quiero responder consultas de estudiantes a traves del chat integrado
  Para aclarar dudas rapidamente

Scenario: Responder consulta de estudiante
  Given que el arrendador recibe un mensaje de un estudiante
  When accede al chat
  And escribe una respuesta
  And la envia
  Then el sistema entregara el mensaje al estudiante
  And marcara la conversacion como respondida