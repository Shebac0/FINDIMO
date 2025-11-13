Feature: Modo offline para ver propiedades guardadas
  Como estudiante
  Quiero acceder a mis propiedades guardadas sin conexión a internet
  Para revisarlas en cualquier momento

Scenario: Acceso offline a propiedades guardadas
  Given que el estudiante tiene propiedades guardadas
  When no tiene conexión a internet
  And abre la aplicación
  Then el sistema mostrará las propiedades guardadas en caché
  And permitirá ver detalles básicos