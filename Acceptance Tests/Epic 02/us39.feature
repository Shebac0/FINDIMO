Feature: Historial de búsquedas
  Como estudiante
  Quiero ver mi historial de búsquedas
  Para volver a propiedades que vi anteriormente

Scenario: Ver historial de búsquedas
  Given que el estudiante ha realizado búsquedas previas
  When accede a "Historial de búsquedas"
  Then el sistema mostrará una lista de sus búsquedas recientes
  And al hacer clic en una, repetirá la búsqueda