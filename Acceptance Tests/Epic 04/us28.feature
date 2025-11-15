Feature: Recibir pagos seguros
  Como arrendador
  Quiero recibir pagos de alquiler y depósitos en la plataforma de forma segura
  Para tener comprobante y seguridad

Scenario: Recibir pago exitosamente
  Given que el estudiante ha iniciado un pago
  When el sistema procesa el pago exitosamente
  Then el arrendador recibirá una notificación
  And el dinero se depositará en su cuenta asociada