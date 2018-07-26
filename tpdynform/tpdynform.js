

//use IIFE to make locals var and functions
(function(){
    var checkInfoBt = document.getElementById("checkbutton");
    var frm = document.getElementsByTagName("form")[0];
    var fieldsToCheck = frm.querySelectorAll("form input, form select");

    for(var i = 0, len = fieldsToCheck.length; i < len; i++){
        if (fieldsToCheck[i].nodeName === "INPUT" && (fieldsToCheck[i].type === "text" || fieldsToCheck[i].type === "password")){
            switch(fieldsToCheck[i].id){
                case "firstname":
                case "lastname":
                    fieldsToCheck[i].placeholder = "Pas moins de 2 caractères";
                    fieldsToCheck[i].addEventListener("blur", checkSilent);
                    break;
                case "age":
                    fieldsToCheck[i].placeholder = "Un nombre compris entre 5 et 140";
                    fieldsToCheck[i].addEventListener("keyup", checkNumberPressed);
                    break;
                case "pseudo":
                    fieldsToCheck[i].placeholder = "Pas moins de 4 caractères"; 
                    fieldsToCheck[i].addEventListener("blur", checkSilent);
                    break;
                case "password":
                    fieldsToCheck[i].placeholder = "Pas moins de 6 caractères";
                    fieldsToCheck[i].addEventListener("blur", checkSilent);
                    break;
                case "pwconfirm":
                    fieldsToCheck[i].placeholder = "identique au mot de passe";
                    fieldsToCheck[i].addEventListener("blur", checkPwconfirm);
                    break;
                default:
                    break;
            }
        }
        console.log(fieldsToCheck[i].id + ' : ' + fieldsToCheck[i].nodeName + ' - ' + fieldsToCheck[i].type);
    }

    //functions
    function checkSilent(e){
        console.log(e.target.id);
    };

    function checkNumberPressed(e){
        console.log(!isNaN(e.target.value));
    };

    function checkPwconfirm(e){
        console.log(e.target.value);
    };

})();

console.log("js in");