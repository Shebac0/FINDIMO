Feature: Guardar propiedades favoritas
  Como estudiante
  Quiero guardar propiedades en una lista de favoritas
  Para compararlas después

Scenario: Guardar propiedad en favoritos
  Given que el estudiante encuentra una propiedad de interés
  When hace clic en el icono "Favorito"
  Then el sistema agregará la propiedad a su lista de favoritos
  And podrá acceder a ella desde su perfil