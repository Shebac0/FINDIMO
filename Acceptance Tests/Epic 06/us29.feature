Feature: Calificar estudiante después del alquiler
  Como arrendador
  Quiero calificar al estudiante después de su estadía
  Para ayudar a otros arrendadores

Scenario: Calificar estudiante exitosamente
  Given que el período de alquiler ha terminado
  When el arrendador acceda al perfil del estudiante
  And haga clic en "Calificar"
  And complete la puntuación y comentarios
  And envíe la calificación
  Then el sistema publicará la calificación después de verificación