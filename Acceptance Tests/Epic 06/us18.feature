Feature: Dejar reseña después del alquiler
  Como estudiante
  Quiero dejar una reseña y calificación sobre la propiedad y el arrendador después de mi estadía
  Para ayudar a otros estudiantes

Scenario: Dejar reseña exitosamente
  Given que el estudiante ha completado su período de alquiler
  When accede a la propiedad en su historial
  And hace clic en "Dejar reseña"
  And completa los campos de comentario y puntuación
  And envía la reseña
  Then el sistema publicará la reseña después de verificación