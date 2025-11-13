Feature: Compartir anuncio de propiedad con amigos
  Como estudiante
  Quiero compartir una propiedad con amigos a través de las redes sociales o enlaces
  Para obtener su opinión

Scenario: Compartir propiedad exitosamente
  Given que el estudiante encuentra una propiedad interesante
  When hace clic en "Compartir"
  And selecciona una plataforma como WhatsApp o Facebook o copia el enlace
  Then el sistema generará un enlace compartible