Feature: Verificación de documentos
  Como arrendador
  Quiero verificar documentos de estudiantes con su DNI o contrato de estudios
  Para asegurar su identidad

Scenario: Verificar documentos exitosamente
  Given que el arrendador solicita verificación de documentos
  When el estudiante suba sus documentos a la plataforma
  And el sistema los valide
  Then el arrendador verá un sello de verificación en el perfil
  And podrá confiar en la información