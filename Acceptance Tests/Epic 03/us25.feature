Feature: Gestionar calendario de visitas
  Como arrendador
  Quiero gestionar un calendario de visitas virtuales y presenciales
  Para organizar mi tiempo eficientemente

Scenario: Gestionar calendario de visitas
  Given que el arrendador tiene solicitudes de visita
  When accede a la seccion "Calendario"
  Then el sistema mostrara todas las visitas agendadas con opciones para confirmar, reprogramar o cancelar