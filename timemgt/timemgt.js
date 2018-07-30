var start = new Date().getTime(); //on obtient le timestamp au début

//objet date
var date = new Date();
console.log(date);
date = new Date(1301412748510);
console.log(date);
date = new Date("2018/07/24");
console.log(date);
date = new Date(2018, 8, 14);
console.log(date);
//methode parse() de l'objet Date
var timestamp = Date.parse("Sat, 04 May 1991 20:00:00 GMT+02:00");
console.log(timestamp);
date = new Date(timestamp);
console.log(date);
//méthodes des instances de l'objet Date
date = new Date();
console.log(date);
console.log("date.getFullYear() = " + date.getFullYear());
console.log("date.getMonth() = " + date.getMonth());
console.log("date.getDate() = " + date.getDate());
console.log("date.getDay() = " + date.getDay());
console.log("date.getHours() = " + date.getHours());
console.log("date.getMinutes() = " + date.getMinutes());
console.log("date.getSeconds() = " + date.getSeconds());
console.log("date.getMilliseconds() = " + date.getMilliseconds());
//il existe les mêmes avec set
date.setMonth(3);//avril car commence à 0
date.setDate(14);
date.setFullYear(2014);
console.log(date);
//getTime() et setTime() pour obtenir/definir timestamp
date.setTime(timestamp);
console.log(date.getTime() + " = " + date);

var end = new Date().getTime();//obtient timestamp
console.log("durée d'exécution: " + (end - start) + " ms");

//les fonctions temporelles
var ti = 1;
console.log(ti);
var intervalID = setInterval(function(){
    ti++;
    console.log("Interval: " + ti);
}, 1000);

var timeoutID = setTimeout(function(){
    console.log("Timeout: " + ti);
}, 5000);

setTimeout(function(){
    clearTimeout(timeoutID);
    clearInterval(intervalID);
    console.log("fin");
}, 10000);

//REMARQUE: setTimeout est + stable que setInterval
//vaut mieux utiliser setTimeout pour les animations
var myImg = document.getElementById("myImg");
function anim(){
    var s = myImg.style;
    var result = s.opacity = parseFloat(s.opacity) - 0.01;
    if (result > 0.2){
        setTimeout(anim, 50);
    }
}
anim();

console.log("fin");