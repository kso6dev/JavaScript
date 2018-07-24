var userNb, nb;

while (!nb || nb < 0 || nb > 999)
{
    userNb = prompt("Veuillez saisir un nombre entre 0 et 999: ");
    nb = parseInt(userNb);
}

alert(convertTxtNumToLetter(userNb));


function convertNumToLetter(num, pos, nextnum){
    var result = "";

    switch (num)
    {
        case (1):
            
            if (pos == 1)
            {
                result = "un";
            }
            else if (pos == 2)
            {
                switch(nextnum)
                {
                    case (0):
                        result = "dix";
                        break;
                    case (1):
                        result = "onze";
                        break;
                    case (2):
                        result = "douze";
                        break;
                    case (3):
                        result = "treize";
                        break;
                    case (4):
                        result = "quatorze";
                        break;
                    case (5):
                        result = "quinze";
                        break;
                    case (6):
                        result = "seize";
                        break;
                    default:
                        result = "dix-";
                }
            }
            break;
        case (2):
            if (pos == 2)
            {
                result = "vingt";
            }
            else
            {
                result = "deux";
            }
            break;
        case (3):
            if (pos == 2)
            {
                result = "trente";
            }
            else
            {
                result = "trois";
            }
            break;
        case (4):
            if (pos == 2)
            {
                result = "quarante";
            }
            else
            {
                result = "quatre";
            }
            break;
        case (5):
            if (pos == 2)
            {
                result = "cinquante";
            }
            else
            {
                result = "cinq";
            }
            break;
        case (6):
            if (pos == 2)
            {
                result = "soixante";
            }
            else
            {
                result = "six";
            }
            break;
        case (7):
            if (pos == 2)
            {
                result = "soixante-dix";
            }
            else
            {
                result = "sept";
            }
            break;
        case (8):
            if (pos == 2)
            {
                result = "quatrevingt";
            }
            else
            {
                result = "huit";
            }
            break;
        case (9):
            if (pos == 2)
            {
                result = "quatrevingt-dix";
            }
            else
            {
                result = "neuf";
            }
            break;
        default:
            if (pos == 1)
            {
                result = "zéro";
            }
            else
            {
                result = "";
            }
    }
    if (pos == 3 && num > 0)
    {
        result += "cent ";
    }
    return result;
}


function convertTxtNumToLetter(numtxt){
    var num = "", ten = "", hundred = "";
    var numlen = numtxt.length;
    var result = "";
    for(var i = 0; i < numlen; i++)
    {  
        if ((numlen > 1) && (numlen == i + 2))
        {
            result += convertNumToLetter(parseInt(numtxt[i]), numlen - i, parseInt(numtxt[i +1]));
        } 
        else
        {
            result += convertNumToLetter(parseInt(numtxt[i]), numlen - i, 0);
        }
    }
    return result;
}
