Feature: Realizar pago de depósito
  Como estudiante
  Quiero realizar el pago del depósito de alquiler en la plataforma
  Para asegurar la propiedad

Scenario: Pago de depósito exitoso
  Given que el contrato está firmado
  When el estudiante accede a la sección "Pagos"
  And selecciona la opción de pago del depósito
  And completa los datos de pago
  And confirma la transacción
  Then el sistema procesará el pago
  And enviará un comprobante