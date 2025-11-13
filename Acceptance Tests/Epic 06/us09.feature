Feature: Leer reseñas de propiedades
  Como estudiante
  Quiero leer reseñas y calificaciones de otros estudiantes sobre una propiedad
  Para conocer experiencias previas

Scenario: Leer reseñas de propiedad
  Given que el estudiante está en la página de una propiedad
  When se desplaza a la sección "Reseñas"
  Then el sistema mostrará comentarios y puntuaciones de estudiantes anteriores