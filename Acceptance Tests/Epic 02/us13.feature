Feature: Comparar propiedades lado a lado
  Como estudiante
  Quiero comparar hasta tres propiedades lado a lado en una tabla
  Para evaluar diferencias clave

Scenario: Comparar propiedades seleccionadas
  Given que el estudiante tiene propiedades en favoritos
  When selecciona la opción "Comparar"
  And elige dos o tres propiedades
  Then el sistema mostrará una tabla comparativa con precio, ubicación, servicios y calificaciones