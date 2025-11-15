Feature: Exportar datos de propiedades
  Como arrendador
  Quiero exportar los datos de mis propiedades a un archivo CSV
  Para llevar registros externos

Scenario: Exportar datos exitosamente
  Given que el arrendador quiere backup de sus propiedades
  When accede a "Exportar datos"
  And selecciona el formato CSV
  And hace clic en "Descargar"
  Then el sistema generará un archivo con toda la información de sus propiedades