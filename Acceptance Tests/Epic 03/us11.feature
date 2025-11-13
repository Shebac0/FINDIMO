Feature: Agendar visita virtual
  Como estudiante
  Quiero agendar una visita virtual a una propiedad
  Para verla en tiempo real sin desplazarme

Scenario: Agendar visita virtual exitosa
  Given que el estudiante quiere ver una propiedad
  When selecciona la opcion "Visita virtual"
  And elige una fecha y hora disponible
  And confirma la cita
  Then el sistema programara la visita
  And enviara un recordatorio a ambos