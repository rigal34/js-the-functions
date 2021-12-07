//functions

//ma fonction est une suite d'instructions
function faireQuelqueChose() {
    console.log("je fais un truc");
    console.log("Trop cool");
}

faireQuelqueChose();//j'appelle ma fonction pour la lancer


//version plus moderne 

const faireUneTache = ()=>{
    console.log("je fais une tache");
}

faireUneTache();

const faireDesTaches = (type)=> {     //partout ou j'ai écrit type il va remplacé par la vaisselle
    console.log("je fais : " + type); //partout ou j'ai écrit type il va remplacé par les courses
}

faireDesTaches("la vaisselle"); 
faireDesTaches("les courses"); 

// le return
function calc(x,y) {
    return x + y;
}
//le return il arrête la fonction et il retourne une valeur!!!!!!!!!



//une fonction qui se joue toute seule

(function maFonction() {
    console.log("je me joue toute seule");
    
}());//elle se joue à cause des parenthéses à l'intérieur


(function () {
    console.log("je me joue toute seule");
    
}());//elle se joue à cause des parenthéses à l'intérieur et en plus elle est anonyme elle n'a pas de nom on pratique ce genre de fonction quand on sait que l'on ne doit plus
//la rapeler plus tard!!!!!!!

//même principe mais en fléchée

(() => {
    console.log("je me joue aussi toute seule");
})();


//la portée des variables

function add2() {
    let a = 4;
    console.log(a);
    return a + 2;
}
add2();
