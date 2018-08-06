var searchbox = document.getElementById("searchbox");
searchbox.addEventListener("keyup", autocomplete);

function autocomplete(e){
    removeDivChilds();

    console.log("event");
    var searchword = e.target.value;
    console.log(searchword);
    
    //encode parameter
    searchword = encodeURIComponent(searchword);
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost/tests/tpautocompletion/autocomp.php?searchword='+searchword);

    xhr.addEventListener('readystatechange',function(){
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
        }//switch
    });//event readystatechange
    xhr.send(null);
}//function autocomplete

function removeDivChilds(){
    var divresults = document.getElementById("results");
    divresults.innerHTML = "";
    divresults.style.display = "none";
}

function processResponse(xhr){
    //console.log("headers : " + xhr.getAllResponseHeaders());
    //console.log("Content-type header : " + xhr.getResponseHeader("Content-type"));
    var autoresults = xhr.responseText.split('|');
    //console.log(autoresults);
    var nbofresults = autoresults.length;
    var divresults = document.getElementById("results");
    var newresultdiv, newresulttext;
    if (nbofresults > 0)
    {
        divresults.style.display = "";
    }
    else
    {
        divresults.style.display = "none";
    }
    for (var resultno = 0; resultno < nbofresults; resultno++)
    {
        newresultdiv = document.createElement("div");
        newresulttext = document.createTextNode(autoresults[resultno]);
        newresultdiv.appendChild(newresulttext);
        divresults.appendChild(newresultdiv);
        newresultdiv.addEventListener("mouseover", function(e){
            e.target.className = "selected";
        });
        newresultdiv.addEventListener("mouseout", function(e){
            e.target.className = "unselected";
        });
        newresultdiv.addEventListener("click", function(e){
            searchbox.value = e.target.innerHTML;
        });
    }
}//function processResponse

console.log("fin autocomp");