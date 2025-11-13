Feature: Blog o recursos para estudiantes
  Como estudiante
  Quiero acceder a artículos y recursos sobre cómo buscar alquiler y vivir en Lima
  Para estar mejor informado

Scenario: Acceder a blog de recursos
  Given que el estudiante necesita información adicional
  When accede a la sección "Blog" o "Recursos"
  Then el sistema mostrará artículos sobre tips de alquiler, seguridad, y vida estudiantil
  And permitirá leerlos completos