Feature: Sistema de alertas por precio
  Como estudiante
  Quiero establecer alertas de precio para una zona específica
  Para ser notificado cuando haya propiedades dentro de mi presupuesto

Scenario: Crear alerta de precio exitosa
  Given que el estudiante quiere monitorizar precios en una zona
  When accede a "Alertas de precio"
  And configura zona, precio máximo y frecuencia
  And guarda la alerta
  Then el sistema enviará notificaciones cuando haya propiedades que coincidan