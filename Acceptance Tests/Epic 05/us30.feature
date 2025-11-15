Feature: Actualizar disponibilidad de propiedad
  Como arrendador
  Quiero actualizar la disponibilidad de mi propiedad manual o automáticamente
  Para reflejar el estado actual

Scenario: Actualizar disponibilidad exitosa
  Given que la propiedad está alquilada
  When el arrendador accede a la gestión de la propiedad
  And cambie el estado a "No disponible"
  Then el sistema ocultará la propiedad de las búsquedas