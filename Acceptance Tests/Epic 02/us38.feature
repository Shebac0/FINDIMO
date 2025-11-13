Feature: Búsqueda avanzada con más filtros
  Como estudiante
  Quiero usar filtros avanzados como amueblado, servicios incluidos y tipo de arrendador
  Para refinar mi búsqueda

Scenario: Búsqueda avanzada exitosa
  Given que el estudiante está en la página de búsqueda
  When activa "Búsqueda avanzada"
  And selecciona filtros adicionales como amueblado, internet incluido, tipo de arrendador
  And hace clic en "Buscar"
  Then el sistema mostrará propiedades que coincidan con todos los filtros