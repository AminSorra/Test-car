var images = new Array();
images.push("background.jpg");
images.push("vtc.jpg");
images.push("mercedes.jpg")

 
var pointeur = 0;
 
function ChangerImage(){
document.getElementById("imagefond").src = images[pointeur];
 
if(pointeur < images.length - 1){
pointeur++;
}
else{
pointeur = 0;
}
 
window.setTimeout("ChangerImage()", 15000)
}
 
// Charge la fonction
window.onload = function(){
ChangerImage();
}



var derniere_position_de_scroll_connue = 0;
var ticking = false;

function faireQuelqueChose(position_scroll) {
  // faire quelque chose avec la position du scroll
}

window.addEventListener('scroll', function(e) {
  derniere_position_de_scroll_connue = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      faireQuelqueChose(derniere_position_de_scroll_connue);
      ticking = false;
    });
  }

  ticking = true;
});
// function infiniteScroll() {
//     // cette variable contient notre offset
//     // par défaut à 20 puisqu'on a d'office les 20 premiers éléments au chargement de la page
//     var offset = 4;

//     // ici on ajoute un petit loader gif qui fera patienter pendant le chargement
//     $('#content').append('<div id="loader"><img src="/img/ajax-loader.gif" alt="loader ajax"></div>');

//     var deviceAgent = navigator.userAgent.toLowerCase();
//     var agentID = deviceAgent.match;

//     $(window).scroll(function() {
//         if(($(window).scrollTop() + $(window).height()) == $(document).height()
//         || agentID && ($(window).scrollTop() + $(window).height()) + 150 > $(document).height()){

//             // on affiche donc loader
//             $('#content #loader').fadeIn(400);

//             // puis on fait la requête pour demander les nouveaux éléments
//             $.get('/more/' + offset + '/', function(data){
//                 // s'il y a des données
//                 if (data != '') {
//                     // on les insère juste avant le loader.gif
//                     $('#content #loader').before(data);

//                     // / on les affiche avec un fadeIn
//                     $('#content .hidden').fadeIn(400);

//                     /* enfin on incrémente notre offset de 20
//                      * afin que la fois d'après il corresponde toujours
//                     */
//                     offset+= 4;
//                 }

//                 // le chargement est terminé, on fait disparaitre notre loader
//                 $('#content #loader').fadeOut(400);
//             });
//         }
//     });
// };