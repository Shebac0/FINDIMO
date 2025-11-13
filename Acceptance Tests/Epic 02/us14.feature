Feature: Recibir recomendaciones personalizadas
  Como estudiante
  Quiero recibir recomendaciones de propiedades basadas en mi perfil y busquedas previas
  Para descubrir opciones relevantes

Scenario: Ver recomendaciones personalizadas
  Given que el estudiante ha completado su perfil
  When accede a la pagina principal
  Then el sistema mostrara una seccion de "Recomendados para ti" con propiedades que coincidan con sus preferencias