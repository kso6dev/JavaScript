//instanciation de l'obj même si on recommande
//d'utiliser son type primitif
var myArray = new Array();
myArray = new Array("1", "val2", "p3");
myArray = new Array(12);
//une seule propriété: 
console.log(myArray.length);//12

//méthodes
//concaténer
var array1 = ["a1", "a2"];
var array2 = ["b1", "b2"];
console.log(array1 + array2);//a1,a2b1,b2
var array3 = array1.concat(array2);
console.log(array3);//["a1","a2","b1","b2"]
//parcourir tableau avec forEach()
var myArray = ["c'est", "un", "test"];
myArray.forEach(function(value, index, array){
    console.log("index: " + index);
    console.log("valeur: " + value);
});
//recherche avec indexOf() et lastIndexOf()
array2 = ["test"];
array1 = ["test", array2];
console.log(array1.indexOf(array2));//renvoie 1 et non 0
console.log(array1.indexOf("test"));//renvoie 0
//attention ["x"] et ["x"] sont 2 instances différentes
console.log(["x"] == ["x"]);//false
array1 = ["x"];
console.log(array1 == array1);//true
//trier
array1 = ["a", "b", 1, 2, 3];
console.log(array1);
array1.reverse();
console.log("array1 after reverse: " + array1);
array1 = [1, 2, 3, 4, 10, 11, 43, 12, 45, 67, 32];
console.log(array1);
array1.sort();
console.log("array1 after sort: " + array1);
array1.sort(function(a,b){
    if (a < b){
        return -1;
    } else if (a > b){
        return 1;
    } else {
        return 0;
    }
});
console.log("array after sort(fct(a,b)): " + array1);

//extraire une partie d'un tableau
array1 = [1, 2, 7, 10, 12];
console.log(array1);
array2 = array1.slice(3);
console.log(array2);//10, 12
array2 = array1.slice(1, 3);
console.log(array2);//2, 7
array2 = array1.slice(0, -2);
console.log(array2);//1, 2, 7

//remplacer une partie d'un tableau
array1 = [1, 2, 3, 4, 5];
array2 = array1.splice(2,2);
console.log(array2);//3,4
//WARNING array1 aussi est modifiée
console.log(array1);//1,2,5
array1 = [1, 2, 3, 4, 5];
array1.splice(2, 2, 7, 7, 8, 8);
console.log(array1);//1,2,7,7,8,8,5
array1.splice(1,0,993,777);
console.log(array1);//1,993,777,2,7,7,8,8,5
//tester si var est un tableau
console.log(Array.isArray(array1));//true

//Les piles et les files
//rappel
array1 = [1,2,3,4,5,6,7,8,9];
console.log("array1 = " + array1);
var len = array1.push(10,11);
console.log("array1 after push(10,11) = " + array1 + ". length = " + len);
var lastelmt = array1.pop();
console.log("array1 after pop() = " + array1 + ". elmt poped = " + lastelmt);
len = array1.unshift("z",0);
console.log("array1 after unshift('z',0) = " + array1 + ". length = " + len);
var firstelmt = array1.shift();
console.log("array1 after shift() = " + array1 + ". elmt shifted = " + firstelmt);

//les piles: premier ajouté dernier enlevé
//par la fin
array1 = ["livre 1"];
console.log("gestion d'une array en pile avec push et pop: " + array1);
array1.push("livre 2", "livre 3");
console.log("gestion d'une array en pile avec push et pop: " + array1);
array1.pop();
console.log("gestion d'une array en pile avec push et pop: " + array1);
//par le début
array1 = ["livre 1"];
console.log("gestion d'une array en pile avec shift et unshift: " + array1);
array1.unshift("livre 3", "livre 2");
console.log("gestion d'une array en pile avec shift et unshift: " + array1);
array1.shift();
console.log("gestion d'une array en pile avec shift et unshift: " + array1);

//les files: premier ajouté premier enlevé
//par le début
array1 = ["livre 3"];
console.log("gestion d'une array en file avec push et shift: " + array1);
array1.push("livre 2", "livre 1");
console.log("gestion d'une array en file avec push et shift: " + array1);
array1.shift();
console.log("gestion d'une array en file avec push et shift: " + array1);
//par la fin
array1 = ["livre 1"];
console.log("gestion d'une array en file avec unshift et pop: " + array1);
array1.unshift("livre 3", "livre 2");
console.log("gestion d'une array en file avec unshift et pop: " + array1);
array1.pop();
console.log("gestion d'une array en file avec unshift et pop: " + array1);

console.log("fin");