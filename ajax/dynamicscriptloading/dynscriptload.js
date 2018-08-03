//ajout d'un autre fichier de script
//à la page après son chargement
window.addEventListener('load', function(){
    var scriptElement = document.createElement("script");
    scriptElement.src = "dynscriptload2.js";
    document.body.appendChild(scriptElement);
});

var bt = document.getElementById("senddsl");
bt.addEventListener("click",sendDSL);

function sendDSL(){
    var scriptElement = document.createElement("script");
    //scriptElement.src = "dsl_script.js";
    //avec du PHP:
    scriptElement.src = "dsl_script.php?pseudo=" + prompt("quel est votre pseudo?");
    document.body.appendChild(scriptElement);
}

var btjson = document.getElementById("sendjsondsl");
btjson.addEventListener("click", sendJSONDSL);

function sendJSONDSL(){
   var scriptElement = document.createElement("script");
   scriptElement.src = "jsonlist.php";
   document.body.appendChild(scriptElement); 
}

function receiveMessage(message){
    console.log(message);
}

function receiveObject(jsonObj){
    var tree = "";
    var nbItems = i = 0;
    for (node in jsonObj){
        tree += node + "\n";
        nbItems = jsonObj[node].length;
        for (i = 0; i < nbItems; i++){
            tree += "\t" + jsonObj[node][i] + "\n";
        }
    }
    console.log(jsonObj);
    console.log(tree);
}

console.log("fin dynscriptload");