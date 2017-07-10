# tls_cr
Mapa de sitios web de Costa Rica, con ranking de seguridad de TLS

## ¿Para que?

Durante los cursos de seguridad informática que estoy impartiendo en Greencore Solutions, he aprovechado para capacitar a docenas de estudiantes en temas como seguridad de TLS.

Uno de los ejercicios de la clase es buscar sitios web de Costa Rica y analizarlos usando el servicio de SSLLabs de Qualys. Los estudiantes notan con preocupación como instituciones -especialmente financieras y de gobierno- obtienen pésimas calificaciones.

La intensión del sitio es poder mostrar de una forma clara la enorme cantidad de sitios web con pésima seguridad, y motivación nula para arreglar sus sitios.

## Mi sitio tienen mala calificación, ¿Que hago?

Comience por encontrar o por capacitar a su personal técnico en seguridad informática.

Si usted es el administrador del sitio web, puede usar Let's Encrypt para obtener un certificado de TLS válido, así como la herramienta de Mozilla SSL Configuration Generator, y puede obtener una calificación de **A+** en menos de 10 minutos.

## TODO
- [x] Uso de ssllabs-cli
- [x] Generar mini lista de sitios para prueba
- [x] Generar json con ssllabs-cli, usando la mini lista de sitios de prueba (data/ssllabs.json)
- [x] Cambiar ejemplo de D3js para que use objetos en archivo JSON
- [x] Generar archivo JSON para alimentar ejemplo de D3js
- [x] Cambiar el color de host basado en puntuación
- [ ] Cambiar color de nodos padre, basado en promedio de puntuación de sus hijos
- [ ] Tooltips, mostrando los pecados
- [ ] Búsqueda
- [ ] ¿Zoom?

## Alistando los JSON

```bash
ssllabs-scan -usecache -maxage 192 -hostfile data/mini-sitios.txt -quiet > data/ssllabs.json

```
