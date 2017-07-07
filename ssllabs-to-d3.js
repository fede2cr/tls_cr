var ssllabs = require("./ssllabs.json");
var ssltree = {
    "name": "Costa Rica",
    "children": [
      { 
        "name": "Go.cr",
        "children": [
          { "name": "Son of A" },
          { "name": "Daughter of A" }
        ]
      },
      { "name": "Fi.cr" }
    ]
};

	
//console.log(ssllabs[0].host);

for(var hostKey in ssllabs) {
    console.log("key:"+hostKey+", value:"+ssllabs[hostKey].host);
    ssltree[hostKey] = (ssllabs[hostKey].host);
}

console.log(ssltree);
