function Person(name, age, sex, parent, work, friends){
    this.name = name;
    this.age = age;
    this.parent = parent;
    this.work = work;
    this.friends = friends;
}

var ben = new Person("Benji", 31, "m", "benjamin", "Dev", []);
var nono;
var sonia = new Person("Sonia", 29, "f", "ainée", "rh", []);
var alexis = new Person("Alexis", 32, "m", "milieu", "infirmier", []);

console.log(ben.name);
console.log(ben instanceof Person);//TRUE
console.log(nono instanceof Person);//FALSE

nono = new Person("Arnaud", 31, "m", "benjamin", "immobilier", []);

ben.friends = [alexis, nono];

console.log(ben.friends[1].name);

ben.friends.push(new Person("Marc", 34, "m", "benjamin", "patissier", []));
// etc 


function Simpleperson(name, age, friends){
    this.name = name;
    this.age = age;
    this.friends = friends;

    //définir méthode dans constructeur
    this.addFriend = function(name, age, friends){
        this.friends.push(new Simpleperson(name, age ,friends));
    };
    
}

//ajout méthode par prototype
Simpleperson.prototype.addFriendobj = function(friend){
    this.friends.push(friend);
}

var benjamin = new Simpleperson("benjamin", 31, []);
var arnauld = new Simpleperson("Arnauld", 31, []);
var marc = new Simpleperson("Marc", 34, []);
benjamin.addFriendobj(arnauld);
benjamin.addFriend("Alexis", 32, []);
console.log(benjamin.friends);

Simpleperson.prototype.displayName = function(){
    console.log(this.name);
}
benjamin.displayName();

Object.prototype.testFunction = function(){
    console.log("attention quand on modif un obj std");
}
benjamin.testFunction();

//création d'un pseudo namespace
if (typeof benjiNamespace === "undefined"){
    var benjiNamespace = {
        //propriétés
        version: 1.4,
        lang: "english",
        //initialisation
        init: function(){
            console.log("fonction d'initialisation");
        },
        //mes fonctions de calculs
        calculation:{
            add: function(){
                console.log("addition");
            },
            multiply: function(){
                console.log("multiplication");
            }
        },
        //mes fonctions de dessin
        drawing:{
            draw: function(){
                console.log("dessine");
            },
            remove: function(){
                console.log("efface");
            }
        }
    };
}
else
{
    alert("benjiNamespace existe déjà!");
}

benjiNamespace.calculation.add();
benjiNamespace.drawing.draw();

console.log("array toString() = " + ["test"].toString());
console.log("obj toString() = " + {0:"test"}.toString());
//modifier contexte avec apply et call:
console.log("array toString() redirigé en obj = " + Object.prototype.toString.call(["test"]));
console.log("array toString() redirigé en obj = " + Object.prototype.toString.apply(["test"]));

var myArray = [];
//apply prend un param facultatif en plus
myArray.push.apply(myArray, [1,2,3]);
//call prend infinie de param facultatifs en plus
myArray.push.call(myArray,4,5,6);
console.log(myArray);

//HERITAGE!!!!!!!!!!!!!!
//Car et Truck héritent de Vehicle
//>>class Vehicle
function Vehicle(licensePlate, tankSize){
    this.engineStarted = false;//le véhicule n'est pas démarré
    this.licensePlate = licensePlate;//immat du véhicule
    this.tankSize = tankSize;//taille de son réservoir
}
//démmarrage du véhicule
Vehicle.prototype.start = function(){
    this.engineStarted = true;
}
//arrêt du véhicule
Vehicle.prototype.stop = function(){
    this.engineStarted = false;
}
//<<class Vehicle
//>>class Car
function Car(licensePlate, tankSize, trunkSize){
    //on appelle le constructeur de Vehicle via 
    //méthode call() pour qu'il affecte de nouvelles
    //propriétés à Car
    Vehicle.call(this, licensePlate, tankSize);
    this.trunkSize = trunkSize;
}
//l'objet prototype de Vehicle doit etre copié 
//au sein du prototype de Car afin que ce dernier
//puisse bénéficier des mêmes méthodes
Car.prototype = Object.create(Vehicle.prototype, {
    //le prototype copié possède une référence vers
    //son constructeur, actuellement défini à  Véhicle
    //nous devons changer sa référence pour Car
    //tout en conservant sa particularité d'etre une
    //propriété non-énumérable
    constructor: {
        value: Car,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
//<<class Car
var myCar = new Car('ABC-007', 340);
myCar.start();//on a hérité de la méthode start de Vehicle
//>>class Truck
function Truck(licensePlate, tankSize, trailersNumber){
    Vehicle.call(this, licensePlate, tankSize);
    this.trailersNumber = trailersNumber;
}
Truck.prototype = Object.create(Vehicle.prototype, {
    constructor:{
        value: Truck,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
Truck.prototype.addTrailer = function(){
    this.trailersNumber++;
};
Truck.prototype.removeTrailer = function(){
    this.trailersNumber--;
};
//<<class Truck
var myTruck = new Truck('TRU-088', 980, 1);
console.log("camion démarré: " + myTruck.engineStarted + " nbr de remorques: " + myTruck.trailersNumber);
myTruck.start();
myTruck.addTrailer();
console.log("camion démarré: " + myTruck.engineStarted + " nbr de remorques: " + myTruck.trailersNumber);


//LES CHAINES DE CARACTERES
//les types primitifs
var myString = "chaine de caractères primitive";
//c'est une chaine de caractères primitive
//et non une instance d'objet comme:
var myRealString = new String("chaine");
//idem pour les autres obj
var myArray = [];//tableau primitif
var myRealArray = new Array();
var myObj = {};//objet primitif
var myRealObj = new Object();
var myBool = true;//booleen primitif
var myRealBoolean = new Boolean("true");

console.log(myString instanceof String);//false
console.log(myRealString instanceof String);//true
console.log(typeof myString === "string");//true
console.log(typeof myString + " != " + typeof myRealString);//string != object
console.log("chaine.length : " + "chaine".length);
console.log("chaine".toUpperCase());

var first = myString.charAt(0);
var last = myString.charAt(myString.length - 1);
console.log(myString);
console.log("premier car: " + first);
console.log("dernier car: " + last);
first = myString.charCodeAt(0);
last = myString.charCodeAt(myString.length - 1);
console.log("premier car ASCII: " + first);
console.log("dernier car ASCII: " + last);

myString = String.fromCharCode(101, 121, 101, 32, 74);
console.log(myString);//eye J

myString = "Le Java c'est pas du Javascript.";
var result = myString.indexOf("Javascript");
if (result > -1){
    console.log(myString + " contient Javascript en pos " + result);
}
result = myString.indexOf("Java");
if (result > -1){
    console.log(myString + " contient Java en pos " + result);
}
result = myString.lastIndexOf("Java");
if (result > -1){
    console.log("la pos de la dernière occurence de Java est " + result);
}
var strJava, strJavascript;
strJava = myString.substring(myString.indexOf("Java"),myString.indexOf("Java") + "Java".length);
console.log(strJava);//Java
strJavascript = myString.substr(myString.indexOf("Javascript"),"Javascript".length);
console.log(strJavascript);//Javascript
console.log(strJavascript.slice(0,-6));//Java
var names = "Ben,Sonia,Nono,Alex";
var nameArray = names.split(",");
console.log(nameArray);

//valueOf() retourne la valeur primitive d'1 objet
function isString(variable){
    return typeof variable.valueOf() === 'string';
}
console.log(isString("test"));//true
console.log(isString(new String("test")));//true



console.log("fin");