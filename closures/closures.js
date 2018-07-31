function area(){
    var myVar = 1;

    function show(){
        console.log("fct show exécutée 2 sec après area, affiche myVar: " +myVar);
    }
    setTimeout(show, 2000);
    console.log("fin de fonction area(), myVar = " + myVar + " et va être détruite");
}
area();

var number = 1;
setTimeout(function(){
    console.log("number vaut 1 dans le code mais incrémenté après Timeout exécutant ce code donc number vaut : " + number);
});
number++;


//si on execute le code suivant, ça ne fonctionnera
//pas car la function exécutée en timeout
//prendra en valeur i qui sera déjà à sa valeur max
//var divs = document.getElementsByClassName("divs");
//var divlen = divs.length;
//for (var i = 0; i < divlen; i++){
//    setTimeout(function(){
//        divs[i].style.display = "block";
//        console.log("display div " + i);
//    }, 200 * i);
//}
//même pas d'ailleurs il dit que divs[i] n'existe pas
//ON VA DONC UTILISER UNE IIFE 
var divs = document.getElementsByClassName("divs");
var divlen = divs.length;
for (var i = 0; i < divlen; i++){
    (function(){
        var currentI = i;
        setTimeout(function(){
            divs[currentI].style.display = "block";
            console.log("i = " + i + " mais currentI = " + currentI);
        }, 200 * i);
    })();
}
//ATTENTION EN GENERAL UNE CLOSURE S'ECRIT COMME SUIT
for (var i = 0; i < divlen; i++){
    (function(currentI){
        setTimeout(function(){
            divs[currentI].style.display = "block";
            console.log("i = " + i + " mais currentI = " + currentI);
        }, 200 * i);
    })(i);
}
//VOIRE MEME
for (var i = 0; i < divlen; i++){
    (function(i){
        setTimeout(function(){
            divs[i].style.display = "block";
            console.log("i = " + i + " mais local i = " + i);
        }, 200 * i);
    })(i);
}

//closure pour variable statique
var display = (function(){
    var myVar = 0; //declaration de la var pseudo-statique
    return function(value){
        if (typeof value != 'undefined'){
            myVar = value;
        }
        console.log("static var = " + myVar);
    };
})();

display();//static var = 0
display(33);//static var = 33
display();//static var = 33



console.log("closures fin");