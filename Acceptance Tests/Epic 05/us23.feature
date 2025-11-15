Feature: Gestionar múltiples propiedades
  Como arrendador
  Quiero gestionar todas mis propiedades desde un dashboard central
  Para ver y editar cada una fácilmente

Scenario: Gestionar propiedades desde dashboard
  Given que el arrendador tiene propiedades listadas
  When accede a su dashboard
  Then el sistema mostrará una lista de todas sus propiedades con opciones para editar, pausar o eliminar