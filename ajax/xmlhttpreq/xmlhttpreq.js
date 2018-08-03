/*
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
xhr.open('POST','http://localhost/tests/test.php');
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
            switch (xhr.status)
            {
                case 200:
                    console.log("everything ok");
                    processResponse(xhr);
                    break;
                case 404:
                    console.log("not found : " + xhr.statusText);
                    break;
                default:
                    console.log("status :" + xhr.status + ' -> ' + xhr.statusText);
            }
            break;
        default:
            console.log("réception error");

    }
});

function processResponse(xhr){
    console.log("headers : " + xhr.getAllResponseHeaders());
    console.log("Content-type header : " + xhr.getResponseHeader("Content-type"));
    switch (xhr.responseType)
    {
        case 'document':
            var responseDoc = xhr.responseXML;
            break;
        case 'text':
            var responseTxt = JSON.parse(xhr.responseText);
            break;
        default:
            console.log("unknown response type: " + xhr.responseType);
    }
}
*/

//MISE EN PRATIQUE:
function loadFile(file){
    var xhr = new XMLHttpRequest();
    
    //xhr2 properties:
    xhr.timeout = 10000;//max 10 sec

    //on souhaite juste récupérer contenu d'un fichier
    //donc GET suffit amplement
    xhr.open('GET', file);

    //xhr2 property:
    xhr.withCredentials = true;//pour récup cookies et sessions

    //gestion de la requête asynchrone avec fct de callback
    xhr.addEventListener('readystatechange', function(){
        //si la requète renvoie bien une réponse, on l'affiche dans le span filecontent de la page html
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            document.getElementById('fileContent').innerHTML = "<span>" + xhr.responseText + "</span>";    
        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status != 200) { // En cas d'erreur !
            console.log('Une erreur est survenue !\n\nCode :' + xhr.status + '\nTexte : ' + xhr.statusText);
        } else
        {
            console.log("ready state:" + xhr.readyState + "and status = " + xhr.status + ", " + xhr.statusText);
        }
    });

    //event xhr2
    xhr.addEventListener("progress", function(e){
        console.log("progress: " + e.loaded + ' / ' + e.total);
    });

    //on a bien préparé la requête, on peut l'envoyer
    xhr.send(null);
}

//mise en place des events dans une IIFE
(function(){
    var inputs = document.getElementsByTagName("input");
    var inputsLen = inputs.length;
    
    for (var i = 0; i < inputsLen; i++){
        inputs[i].addEventListener("click", function(){
            loadFile(this.value);//à chaque clique, un fichier sera chargé dans la page
        });
    }
})();

//utilisation de l'objet FormData
var form = new FormData();
form.append("champ1", "valeur1");
form.append("champ2", "valeur2");

var xhr = new XMLHttpRequest();
xhr.open('POST', 'script.php');
xhr.send(form);

//on peut passer un élément HTML form dans 
//constructeur FormData()
var myHtmlForm = document.getElementById("myForm");
form = new FormData(myHtmlForm);
xhr = new XMLHttpRequest();
xhr.open('POST', 'script.php');
xhr.send(form);


console.log("fin xmlhttpreq");