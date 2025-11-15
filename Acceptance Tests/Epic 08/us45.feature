Feature: Accesibilidad para personas con discapacidad
  Como usuario con discapacidad visual
  Quiero que la plataforma sea compatible con lectores de pantalla
  Para navegar fácilmente

Scenario: Accesibilidad con lector de pantalla
  Given que el usuario usa un lector de pantalla
  When accede a la plataforma
  Then el sistema tendrá etiquetas ARIA adecuadas
  And el lector de pantalla podrá leer todo el contenido