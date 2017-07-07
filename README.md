# tls_cr
Mapa de sitios web de Costa Rica, con ranking de seguridad de SSL

## TODO
- [x] Uso de ssllabs-cli
- [x] Generar mini lista de sitios para prueba
- [x] Generar json con ssllabs-cli, usando la mini lista de sitios de prueba (data/ssllabs.json)
- [ ] Cambiar ejemplo de D3js para que use objetos en archivo JSON
- [ ] Generar archivo JSON para alimentar ejemplo de D3js
- [ ] Cambiar el color de host basado en puntuación
- [ ] Cambiar color de nodos padre, basado en promedio de puntuación de sus hijos
- [ ] Tooltips, mostrando los pecados


## Alistando los JSON

```bash
ssllabs-scan -usecache -maxage 192 -hostfile data/mini-sitios.txt -quiet > data/ssllabs.json

```
