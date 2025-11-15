Feature: Ver perfil de estudiante interesado
  Como arrendador
  Quiero ver el perfil verificado de un estudiante interesado
  Para evaluar su idoneidad

Scenario: Ver perfil de estudiante
  Given que un estudiante ha contactado al arrendador
  When el arrendador hace clic en el perfil del estudiante
  Then el sistema mostrara informacion como universidad, historial de reseñas y verificacion de identidad