var realpseudo = document.getElementById("realpseudo");
realpseudo.value = "KaiserSaucisse";
realpseudo.disabled = true;
var sized = document.getElementById("sized");
sized.addEventListener("focus",function(e){
    e.target.value = "vous avez le focus sur " + e.target.name;
});
sized.addEventListener("blur", function(e){
    e.target.value = "vous n'avez plus le focus sur " + e.target.name;
});
var zone = document.getElementById("zone");
var bigzone = document.getElementById("bigzone");
zone.addEventListener("mouseover", function(e){
    e.target.value = "texte caché dans la " + e.target.name;
});
bigzone.addEventListener("mouseover", function(e){
    e.target.value = "texte caché dans la " + e.target.name;
});
zone.addEventListener("mouseout", function(e){
    e.target.value = "";
});
bigzone.addEventListener("mouseout", function(e){
    e.target.value = "";
});

var btncheck = document.getElementById("checkbutton");
var btnradio = document.getElementById("radiobutton");
btncheck.addEventListener("click", checkquery);
btnradio.addEventListener("click", checkquery);

function check(e){
    var inputs = document.getElementsByTagName("input");
    var result = "", inputtype = "";
    if (e.target.id == "checkbutton"){
        inputtype = "checkbox";
    } else if (e.target.id == "radiobutton"){
        inputtype = "radio";
    }
    console.log(e.target.id);

    for (var i = 0, len = inputs.length; i < len; i++)
    {
        if (inputs[i].type === inputtype && inputs[i].checked)
        {
            if (inputtype == "checkbox")
            {
                result += inputs[i].name + " est cochée. ";
            } else if (inputtype == "radio")
            {
                result += inputs[i].value + " est sélectionné.";
            }
        }
        console.log(inputs[i].type);
    }
    if (result == "")
    {
        alert("aucune case cochée");
    }
    else
    {
        alert(result);
    }
};

//PLUS SIMPLE
function checkquery(e){
    var inputs = document.querySelectorAll('input[type=radio]:checked, input[type=checkbox]:checked');
    var result = "", inputtype = "";
    if (e.target.id == "checkbutton"){
        inputtype = "checkbox";
    } else if (e.target.id == "radiobutton"){
        inputtype = "radio";
    }
    for (var i = 0, len = inputs.length; i < len; i++)
    {
        if (inputtype == "checkbox" && inputs[i].type == inputtype)
            {
                result += inputs[i].name + " est cochée. ";
            } else if (inputtype == "radio" && inputs[i].type == inputtype)
            {
                result += inputs[i].value + " est sélectionné.";
            }
    }
    if (result == "")
    {
        alert("aucune case cochée");
    }
    else
    {
        alert(result);
    }
}

var consoleList = document.getElementById("console");
consoleList.addEventListener("change", function(e){
    alert(consoleList.options[consoleList.selectedIndex].innerHTML);
});


var submitbutton = document.querySelector("input[type=submit]");
submitbutton.addEventListener("click", function(e){
    //alert("ok");
    var form = document.getElementById("myform");
    form.submit(); //ne déclenchera pas event onsubmit
    //form.reset();//ne déclenche pas event onreset
    e.preventDefault();
});

alert("fin");