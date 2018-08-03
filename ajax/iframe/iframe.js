var frame = document.getElementById("myframe").contentDocument;
var strongTxtCV = frame.getElementsByTagName("strong");
var len = strongTxtCV.length;
console.log(len);
for (var i = 0; i < len; i++)
{
    console.log(strongTxtCV[i].innerHTML + "\n");
}
var bt = document.getElementById("chgsrc");
bt.addEventListener("click", function(){
    console.log(document.getElementById("myframe").src);
    document.getElementById("myframe").src = "iframe.html";
    console.log(document.getElementById("myframe").src);
});

var iframe = document.getElementById("myframe");
iframe.addEventListener("load", function(){
    var frame = this.contentDocument;
    console.log(frame.body.textContent);
});

function fctFromMother(){
    console.log("fonction de la page mère appelée depuis la page contenue dans iframe");    
};


function uploadEnd(error, path) {
    if (error === 'OK') {
        document.getElementById('uploadStatus').innerHTML = '<a href="' + path + '">Upload done !</a><br /><br /><a href="' + path + '"><img src="' + path + '" /></a>';
    } else {
        document.getElementById('uploadStatus').innerHTML = error;
    }
}

document.getElementById('uploadForm').addEventListener('submit', function() {
    document.getElementById('uploadStatus').innerHTML = 'Loading...';
});

console.log("fin iframe");