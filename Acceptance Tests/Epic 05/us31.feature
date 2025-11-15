Feature: Ver análisis de propiedades
  Como arrendador
  Quiero ver el análisis sobre el desempeño de mis propiedades como visitas y contactos
  Para optimizar mis listados

Scenario: Ver análisis de desempeño
  Given que el arrendador tiene propiedades listadas
  When accede a la sección "Análisis"
  Then el sistema mostrará gráficos de visitas, contactos y conversiones por propiedad