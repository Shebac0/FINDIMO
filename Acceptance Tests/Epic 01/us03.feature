Feature: Completar perfil del estudiante
  Como estudiante
  Quiero completar mi perfil con información personal y preferencias
  Para recibir recomendaciones personalizadas

Scenario: Perfil completado exitosamente
  Given que el estudiante ha iniciado sesión
  When accede a la sección "Mi perfil"
  And completa campos como universidad, presupuesto máximo, preferencias de zona
  And guarda los cambios
  Then el sistema almacenará esta información
  And la usará para personalizar las búsquedas