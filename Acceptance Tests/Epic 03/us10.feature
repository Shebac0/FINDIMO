Feature: Contactar arrendador via chat
  Como estudiante
  Quiero contactar al arrendador a traves de un chat integrado
  Para hacer consultas especificas sobre la propiedad

Scenario: Iniciar chat con arrendador
  Given que el estudiante esta interesado en una propiedad
  When hace clic en el boton "Contactar arrendador"
  And escribe un mensaje
  And lo envia
  Then el sistema entregara el mensaje al arrendador
  And notificara al estudiante cuando responda