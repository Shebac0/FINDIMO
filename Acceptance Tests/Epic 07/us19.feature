Feature: Recibir notificaciones de nuevas propiedades
  Como estudiante
  Quiero recibir notificaciones push cuando nuevas propiedades que coincidan con mis filtros estén disponibles
  Para no perderme oportunidades

Scenario: Notificación de nueva propiedad
  Given que el estudiante tiene filtros guardados
  When un arrendador publique una propiedad que coincida
  Then el sistema enviará una notificación push al estudiante con un enlace a la propiedad