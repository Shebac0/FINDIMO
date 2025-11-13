Feature: Edición de perfil
  Como usuario
  Quiero editar mi perfil para actualizar mi información personal cuando cambie
  Para mantener mis datos actualizados

Scenario: Editar perfil exitosamente
  Given que el usuario ha iniciado sesión
  When accede a "Mi perfil"
  And hace clic en "Editar"
  And modifica campos como número de teléfono o preferencias
  And guarda los cambios
  Then el sistema actualizará la información
  And mostrará un mensaje de confirmación