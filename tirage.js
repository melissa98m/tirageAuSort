$('button').on('click', function(e) {
    e.preventDefault();
    var namePerGroup = parseInt($('.pergroup').val()), //recupere la valeur de l'input et la parse en int 
      allName = $('textarea').val().split('\n'),//split chaque ligne pour recuperer tout les nom du textarea
      allNameLength = allName.length;// defini la variable  allNameLength  qui est egale a la longeur du de allName
    var numberPerGroup = Math.ceil(allNameLength / namePerGroup); //creation de la variable du nombre par groupe avec la fonction math.ceil qui retourne le plus petit entier supérieur 
    for (i = 0; i < numberPerGroup; i++) {// boucle sur le nombre par groupe
      $('.groups').append('<div class="group" id="group' + (i+1) + '"><h3>Groupe ' + (i+1) + '</h3></div>');// affichage des numero de groupe
    }
    $('.group').each(function() {// creation des groupe
      for (j = 0; j < namePerGroup; j++) {//boucle sur les nom du groupe
        var randname = Math.floor(Math.random() * allName.length); // tirage au sort des nom en random 
        if(allName[randname]){//recupere le nom
          $(this).append('<p>' + allName[randname] + '</p>');//affiche le nom
        }
        allName.splice(randname, 1);// modifie le contenu du tableau
      }
    });
  });