//Number
var myNum = new Number("3");//string converted to number

var max = Number.MAX_VALUE;//pas instancier l'obj pour accès a proprété
var inf = Number.POSITIVE_INFINITY;
console.log("max = " + max);
console.log("infinity = " + inf);


//Math
//2 propriétés intéressantes
console.log("valeur du nombre d'or: " + Math.PI);
console.log("valeur du nombre d'Euler: " + Math.E);
//méthodes
//arrondir
console.log(Math.floor(33.95));//33
console.log(Math.ceil(33.15));//34
console.log(Math.round(33.95));//34
console.log(Math.round(33.15));//33
//puissance
console.log(Math.pow(3,3));//27
//racine
console.log(Math.sqrt(9));//3
//cosinus sinus
console.log(Math.cos(Math.PI));
console.log(Math.sin(Math.PI));
//max min
console.log(Math.max(1,6,2,8,9,3));//9
console.log(Math.min(100,6,2,8,9,3));//2
//random
console.log(Math.random());//dec random entre 0 et 1
function rand(min, max, integer){
    if(!integer){
        return Math.random() * (max - min) + min;
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
console.log("function ameliorée perso random: " + rand(7, 150, true));

//les inclassables
//conversion
console.log(parseInt("08",2));//0 en mode binaire
console.log(parseInt("08",10));//8 en mode decimal
console.log(parseFloat("08.3"));//8.3
//controle
console.log(isNaN("a"));//true
console.log(isNaN("1"));//false
console.log(isFinite(2/0));//false
console.log(isFinite(2/3));//true

console.log("fin");