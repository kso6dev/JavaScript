//un polyfill imite une techno qui n'est pas 
//supportée par toutes les versions de navigateurs

if (!Array.isArray){//si isArray() n'existe pas
    //alors on créé la méthode alternative
    Array.isArray = function(element){
        return Object.prototype.toString.call(element) == "[object Array]";
    };
}
console.log(Array.isArray([]));//true
console.log(Array.isArray({}));//false

//QUELQUES POLYFILLS IMPORTANTS

//méthode trim() de l'obj String
if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}

//méthode isArray() de l'objet Array
if (!Array.isArray) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

//méthode forEach() de l'objet Array
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback/*, thisArg*/) {
    var T, k;
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }
    
    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception. 
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
        T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {
        var kValue;
        // a. Let Pk be ToString(k).
        //    This is implicit for LHS operands of the in operator.
        // b. Let kPresent be the result of calling the HasProperty
        //    internal method of O with argument Pk.
        //    This step can be combined with c.
        // c. If kPresent is true, then
        if (k in O) {
        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
            kValue = O[k];
            // ii. Call the Call internal method of callback with T as
            // the this value and argument list containing kValue, k, and O.
            callback.call(T, kValue, k, O);
            }
            // d. Increase k by 1.
            k++;
        }
      // 8. return undefined.
    };
}


//WRAPPER
//exemple pour supplanter la propriété complete
//de l'objet Image() car elle est hasardeuse
/* on va donc passer par une surcouche pour mieux
controller son comportement et tous les éléments.
Dans l'idéal un wrapper doit permettre de se 
passer de l'élément original donc on instancie
un objet à la place de l'objet original
*/
function Img(src) {
    var obj = this; // Nous faisons une petite référence vers notre objet Img. Cela nous facilitera la tâche.

    this.originalImg = new Image(); // On instancie l'objet original, le wrapper servira alors d'intermédiaire
    this.complete = false;
    
    this.onload = function() {}; // Voici l'événement que les développeurs pourront modifier
   
    this.originalImg.onload = function() {
        obj.complete = true; // L'image est chargée !
        obj.onload(); // On exécute l'événement éventuellement spécifié par le développeur
    };

    if (src){
        this.originalImg.src = src;
    }
}
//MAIS pour pouvoir se passer de l'objet original
/* il faut qu'on donne accès à toutes ses propriétés
donc width, height et src. On va donc lui ajouter
les méthodes get et set */
Img.prototype.get = function(name){
    return this.originalImg[name];
};

Img.prototype.set = function(name, value){
    var allowed = ["width", "height", "src"];
    if (allowed.indexOf(name) != -1){
        this.originalImg[name] = value;
    }
};
/*MAIS pour faire propre il faut qu'on donne
aussi accès aux propriétés du wrapper via 
get et set */
Img.prototype.set = function(name, value) {
    var allowed = ['width', 'height', 'src']; // On spécifie les propriétés dont on autorise la modification
    var wrapperProperties = ['complete', 'onload'];
    if (allowed.indexOf(name) != -1) {
        this.originalImg[name] = value; // Si la propriété est autorisée alors on la modifie
    } else if (wrapperProperties.indexOf(name) != -1) {
        this[name] = value; // Ici, la propriété appartient au wrapper et non pas à l'objet original
    }
};

Img.prototype.get = function(name) {
    // Si la propriété n'existe pas sur le wrapper, on essaye alors sur l'objet original :
    return typeof this[name] != 'undefined' ? this[name] : this.originalImg[name];
};

//TEST DE NOTRE WRAPPER
var myImg = new Img();
console.log("complete: " + myImg.get("complete"));
myImg.set("onload", function(){
    console.log("complete : " + this.get("complete"));
    console.log("width : " + this.get("width"));
    console.log("height : " + this.get("height"));
    document.getElementById("main_wrapper").appendChild(this.originalImg);
});
console.log("src = " + myImg.get("src"));
myImg.set("src", "../images/dessin.png");
console.log("src = " + myImg.get("src"));
console.log("width = " + myImg.get("width"));


console.log("polyfillsandwrappers fin");