Feature: Soporte multidioma
  Como usuario
  Quiero usar la plataforma en mi idioma preferido
  Para entender mejor el contenido

Scenario: Cambiar idioma de la plataforma
  Given que el usuario prefiere otro idioma
  When accede a "Configuración"
  And seleccione un idioma como inglés o español
  And guarda la preferencia
  Then el sistema cambiará el idioma de la interfaz
  And mostrará todo el contenido en el idioma seleccionado