Feature: Ver detalles completos de una propiedad
  Como estudiante
  Quiero ver detalles completos de una propiedad incluyendo fotos, descripción y servicios
  Para tomar una decisión informada

Scenario: Ver detalles de propiedad
  Given que el estudiante encuentra una propiedad de interés
  When hace clic en la propiedad
  Then el sistema mostrará una página con fotos, descripción, precios, servicios incluidos y reglas de la casa