Feature: Visualización de mapa interactivo
  Como estudiante
  Quiero ver las propiedades en un mapa interactivo con indicadores de seguridad
  Para evaluar la zona visualmente

Scenario: Ver mapa con propiedades
  Given que el estudiante ha realizado una búsqueda
  When activa la vista de mapa
  Then el sistema mostrará un mapa con marcadores de las propiedades disponibles
  And al hacer clic en un marcador, mostrará información básica de la propiedad