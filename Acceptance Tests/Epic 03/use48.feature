Feature: Sistema de mensajería avanzada
  Como usuario
  Quiero enviar archivos y fotos en el chat
  Para compartir información adicional con arrendadores o estudiantes

Scenario: Enviar archivo en chat
  Given que el usuario está en una conversación de chat
  When hace clic en "Adjuntar archivo"
  And seleccione un archivo o foto de su dispositivo
  And lo envía
  Then el sistema subirá el archivo
  And lo mostrará en el chat para el receptor