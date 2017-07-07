var ssllabs = require("./data/ssllabs.json");
var ssltree = {
  "name": "Costa Rica",
  "children": [
    {
      "name": "go.cr",
      "children": []
    },
    {
      "name": "fi.cr",
      "children": []
    }
  ]
};

let getKey = (hostname) => {
  /**
   * Aquí la idea es sacar del hostname el identificador
   * que ayude a encontrar en ssltree la rama correcta
   */
  hostname = hostname.replace(/\/\s*$/, ''); //Si hay un slash al final, quite quite
  hostname = hostname.split('.'); //Parta el string en un array usando el punto como separador
  return `${hostname[hostname.length-2]}.${hostname[hostname.length-1]}`; // un string compuesto de los dos últimos campos del array
}

/**
 * Iteramos por los ítems del array que viene en el archivo json
 */
ssllabs.forEach(item => {

  let key = getKey(item.host);
  let index = ssltree.children.findIndex(i => i.name === key); // Qué rama es

  if(index !== -1) {
    ssltree.children[index].children.push({
      name: item.host,
      grade: item.endpoints[0].grade ? item.endpoints[0].grade : 'F', // Operador ternario por si no hay grade, ponga "F"
      protocols: item.endpoints[0].details.protocols,
      supportsRc4: item.endpoints[0].details.supportsRc4,
      forwardSecrecy: item.endpoints[0].details.forwardSecrecy
    })
  }
});

/**
 * Aquí en vez de a consola hay que tirarlo a un archivo, pero por ahora y para
 * facilidad de desarrollo, va pa'consola
 */
console.log(JSON.stringify(ssltree, null, '  '));
