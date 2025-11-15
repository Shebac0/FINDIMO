Feature: Gestionar reglas de convivencia
  Como arrendador
  Quiero establecer y comunicar reglas de convivencia claras para mi propiedad
  Para asegurar un ambiente de armonía con los estudiantes

Scenario: Establecer reglas de convivencia
  Given que el arrendador quiere definir reglas claras
  When accede a "Reglas de convivencia" en la gestión de su propiedad
  And establece normas como horarios de silencio, uso de áreas comunes y visitas
  And guarda la configuración
  Then el sistema mostrará estas reglas en el perfil de la propiedad
  And los estudiantes las verán antes de contactar