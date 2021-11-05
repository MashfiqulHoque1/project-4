function pluralize(){

    var noun = document.getElementById("nounbox").value ;
    var noun2 = document.getElementById("nounbox2").value ;
    var number = document.getElementById("numberbox").value ;

    //var result = number + noun;
    

    if (number == 1) {
        document.getElementById("i1").innerHTML = number + " " + noun + ".";
    }

    else if ((number > 1) && (noun2 == "s" || noun2 == "x" || noun2 == "z" || noun2 == "ch" || noun2 == "sh")){

        document.getElementById("i1").innerHTML = number + " " + noun + noun2 + "es." ;
    }

    else if (number > 1 ){
        document.getElementById("i1").innerHTML = number + " " + noun + "s.";
    }


}