Feature: Sistema de recomendaciones entre estudiantes
  Como estudiante
  Quiero recomendar propiedades a otros estudiantes
  Para ayudarles en su búsqueda de alojamiento

Scenario: Recomendar propiedad a compañeros
  Given que el estudiante encuentra una propiedad de calidad
  When hace clic en "Recomendar a compañeros"
  And selecciona estudiantes de su universidad
  And envía la recomendación
  Then el sistema notificará a los estudiantes seleccionados
  And mostrará la recomendación en sus perfiles