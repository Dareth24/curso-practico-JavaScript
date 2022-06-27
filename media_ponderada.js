// function subject(names, credits, score) {
//     this.names = names;
//     this.credits = credits;
//     this.score = score;
// }

// var names = ["Electrónica_análoga", "Equipos_biomedicos", "Anatomorfofisiologia", "Biomecanica"];
// var totalcredits = 13;
// var score = [3.9, 4.2, 3.4, 3.8];
// var credits = [3, 3, 4, 3];

// const subjects = []; 

// for (var i = 0; i < names.length; i++){
//     var new_subject = new subject(names[i], credits[i], score[i]);
//     subjects.push(new_subject);
// }


function calcular_media_ponderada(score, credits){//tambien podemos usar un ciclo for para sumar los creditos
    var totalcredits = credits.reduce(function(initial_value = 0, new_value){
        return initial_value + new_value;
    })

    var suma_media = 0;
    for (var i = 0; i < credits.length ; i++){
        suma_media = suma_media + ((score[i]*credits[i])/totalcredits);
    }
    return suma_media;
}