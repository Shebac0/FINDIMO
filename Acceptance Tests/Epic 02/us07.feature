Feature: Consultar indicadores de seguridad de la zona
  Como estudiante
  Quiero ver indicadores de seguridad del distrito donde se ubica la propiedad
  Para evaluar mi seguridad personal

Scenario: Ver indicadores de seguridad
  Given que el estudiante está viendo los detalles de una propiedad
  When accede a la sección "Seguridad de la zona"
  Then el sistema mostrará índices de criminalidad, iluminación y presencia policial