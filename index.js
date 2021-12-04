//functions

//ma fonction est une suite d'instructions
function faireQuelqueChose() {
    console.log("je fais un truc");
}

faireQuelqueChose();//j'appelle ma fonction pour la lancer


//version plus moderne 

const faireUneTache = ()=>{
    console.log("je fais une tache");
}

faireUneTache();

const faireDesTaches = (type)=> {
    console.log("je fais : " + type);
}

faireDesTaches("la vaisselle"); 
faireDesTaches("les courses"); 