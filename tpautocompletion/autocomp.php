<?php
    $dicoArray = array();
    $dicoArray = unserialize(file_get_contents('towns.txt'));
    //sort($dicoArray);
    //echo implode($dicoArray,'|');
    //echo '<br />';

    $resultArray = array();
    $dicolen = count($dicoArray);
    $searchword = $_GET["searchword"];
    for ($dicocur = 0; $dicocur < $dicolen && count($resultArray) < 5; $dicocur++)
    {
        if (stripos($dicoArray[$dicocur],$searchword) === 0)
        {
            array_push($resultArray, $dicoArray[$dicocur]);
        }
    }
    sort($resultArray);
    
    //echo '<br />Voici les résultats pour '.$searchword.'<br />';
    echo implode($resultArray,'|');
?>