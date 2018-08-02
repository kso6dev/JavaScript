//declaration var XMLHttpRequest
var xhr = new XMLHttpRequest();
//préparation requête
xhr.open('GET','http://mon_site_web.com/ajax.php');
//envoie
xhr.send(null);

//déclaration de paramètres
var value1 = "p1value";
var value2 = 2;
//encodage de paramètres
value1 = encodeURIComponent(value1);
value2 = encodeURIComponent(value2);
//passage de paramètres
xhr.open('GET','http://mon_site.com/ajax.php?param1='+value1+'&param2='+value2);
xhr.send(null);

//préparation requète d'envoie de données
xhr.open('POST','http://mon_site.com/ajax.php');
//envoie avec passage des paramètres
xhr.send('param1='+value1+'&param2='+value2);

//en fonction de la provenance des données qu'on envoie
//on peut modifier l'en-tête de l'envoie
//préparation requète d'envoie de données
xhr.open('POST','http://mon_site.com/ajax.php');
//modification de l'en-tête "Content-Type"
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//envoie avec passage des paramètres
xhr.send('param1='+value1+'&param2='+value2);

//réception de données de requete asynchrone
//en spécifiant une fonction de callback
xhr.addEventListener('readystatechange',function(){
    //
    switch (xhr.readyState)
    {
        case XMLHttpRequest.UNSENT://0:
            console.log("UNSENT (before open())");
            break;
        case XMLHttpRequest.OPENED://1:
            console.log("OPENED (after open() before send())");
            break;
        case XMLHttpRequest.HEADERS_RECEIVED://2:
            console.log("HEADERS_RECEIVED (send() has been called and all data sent to server)");
            break;
        case XMLHttpRequest.LOADING://3:
            console.log("LOADING server process data, started sending back, headers received");
            break;
        case XMLHttpRequest.DONE://4:
            console.log("DONE (data received)");
            break;
        default:
            console.log("réception error");

    }
});

console.log("fin xmlhttpreq");