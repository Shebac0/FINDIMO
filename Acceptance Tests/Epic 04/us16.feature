Feature: Firma contrato digital
  Como estudiante
  Quiero firmar el contrato de alquiler digitalmente
  Para formalizar el acuerdo sin papel

Scenario: Firma de contrato exitosa
  Given que el arrendador ha enviado un contrato
  When el estudiante revisa el contrato
  And hace clic en "Firmar"
  And confirma su identidad
  Then el sistema registrará la firma
  And almacenará el contrato firmado