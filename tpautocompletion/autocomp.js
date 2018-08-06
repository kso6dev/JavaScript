var searchbox = document.getElementById("searchbox");
searchbox.addEventListener("keyup", autocomplete);
var previousValue, currentValue;
var previousxhr = null;
var divselected = -1;
var divs;
var divscount = 0;

function autocomplete(e){
    currentValue = e.target.value;
    if (currentValue !== previousValue)
    {
        divselected = -1;
        removeDivChilds();
        
        if (previousxhr !== null)
        {
            if (previousxhr.readyState !== XMLHttpRequest.DONE)
            {
                previousxhr.abort();
            }
        }
        previousxhr = sendRequest(e.target.value);
    }
    else
    {
        divs = document.querySelectorAll(".selected, .unselected");
        divscount = divs.length;
        if (e.keyCode == 40)//bas
        {
            if (divselected < divscount-1)
            {
                if (divselected > -1)
                {
                    divs[divselected].className = "unselected";
                }
                divselected++;
                divs[divselected].className = "selected";
            }
        } 
        else if (e.keyCode == 38)//haut
        {
            if (divselected > 0)
            {
                if (divselected > -1)
                {
                    divs[divselected].className = "unselected";
                }
                divselected--;
                divs[divselected].className = "selected";
            }
        } 
        else if (e.keyCode == 13)//entrée
        {
            e.target.value = divs[divselected].innerHTML;
            removeDivChilds();
        }
    }
    previousValue = currentValue;
}//function autocomplete

function removeDivChilds(){
    var divresults = document.getElementById("results");
    divresults.innerHTML = "";
    divresults.style.display = "none";
}

function sendRequest(searchword){
    var param = encodeURIComponent(searchword);
    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost/tests/tpautocompletion/autocomp.php?searchword='+param);

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
    return xhr;
}

function processResponse(xhr){
    var autoresults = xhr.responseText.split('|');
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
        newresultdiv.className = "unselected";
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
            removeDivChilds();
        });
    }
}//function processResponse


console.log("fin autocomp");