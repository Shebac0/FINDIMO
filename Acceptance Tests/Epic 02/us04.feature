Feature: Búsqueda de propiedades con filtros básicos
  Como estudiante
  Quiero buscar propiedades usando filtros básicos como precio, ubicación y tipo de habitación
  Para encontrar opciones que se ajusten a mis necesidades

Scenario: Búsqueda con filtros aplicados
  Given que el estudiante está en la página de búsqueda
  When selecciona filtros como rango de precio, distrito, tipo de propiedad
  And hace clic en "Buscar"
  Then el sistema mostrará una lista de propiedades que coincidan con los filtros