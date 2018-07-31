//ex d'utilisation de l'obj JSON
var obj = {
    index: "contenu"
};
var string = JSON.stringify(obj);

console.log(typeof string + " : " + string);//{"index":"contenu"}

obj = JSON.parse(string);
console.log(typeof obj + " : " + obj);//object : [object Object]




console.log("ajax fin");
