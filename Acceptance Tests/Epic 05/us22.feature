Feature: Listar nueva propiedad
  Como arrendador
  Quiero listar una nueva propiedad completando un formulario con detalles y fotos
  Para atraer estudiantes

Scenario: Listar propiedad exitosamente
  Given que el arrendador ha iniciado sesión
  When accede a "Agregar propiedad"
  And completa campos como dirección, precio, servicios, fotos
  And guarda la información
  Then el sistema publicará la propiedad después de verificación