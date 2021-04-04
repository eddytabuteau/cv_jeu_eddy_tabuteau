'use strict'
//déclaration des variables extérieure au fonction
window.addEventListener('load',function() {


let instructionFin=false;
let codejeu = function (){ 
  //déclaration d'un nouveau contexte html
  $('#instruction').html(`
  <img id="backgroud-jeu" src="./background/background-fin-du-jeu.gif" alt="Background du jeu">
    <div id="masqueUn">
      
      <img id="personnage" src="./image/personnage.png" alt="personnage">
    </div>
    <div id="masqueDracaufeu">
      <img id="dracaufeu" src="./image/boss.png" alt="dracaufeu">
    </div>
    <div id="masqueBouleDeFeu">
      
    </div> 
    <div id="degat">
      <p>SCORE</p>
      <p id="compteur">0</p>
    </div>
  <div id="barreDeVie">
        <meter id="vie"
           min="0" max="20"
           low="5" high="12" optimum="16"
           value="20">
    </meter>
  </div>
  
  `)
  //déclaration des variables externe
  let animationEnCours = false;
  let animationTermine = false;
  let coups =0
  let compteur = window.document.getElementById('compteur')
  let utilisationDesFleches = false;
  let marche;
  let marcheMasque;
  let compteurMarchePosition=0;
  let marcheEnCoursDroite=false;
  let marcheEnCoursGauche=false;
  let animationMarcheDroite;
  let animationMarcheGauche;
  let deplacement;
  let cv;
  let finDuJeu;


  
window.addEventListener('keydown',function(eventPerso){
    let instructionPerso = eventPerso.code;//récupération de la touche
    
    //déclaration des variables intérieur
    let personnage = window.document.getElementById('personnage')
    let masqueBouleDeFeu = window.document.getElementById('masqueBouleDeFeu')
    let masqueDracaufeu = window.document.getElementById('masqueDracaufeu')
    let barreDeVie = window.document.getElementById('vie')

    

     // console.log(instructionPerso)

switch(instructionPerso){
     /*******action du personnage sur la touche espace******/            
    case 'Enter':
  //instructions 
  
  if(!animationEnCours & !animationTermine){
    personnage.style.bottom = '-43px'
    $('#masqueBouleDeFeu').html(`
    <img id="bouleDeFeu" src="./image/boule-de-feu.png" alt="Boule de feu">
    `)
      animationEnCours=true;//cette variable avec sa valeur booléenne rend indépendant le IF de la touche 'Enter'
      

   const animationAttaque = setInterval(function(){
        
        let attaque = masqueBouleDeFeu.offsetLeft//récupération du left par rapport à son élément parent
        masqueBouleDeFeu.style.left =attaque+20+'px'//augmentation de 20 px de la boule de feu toute les 1ms
        let stop = masqueDracaufeu.offsetLeft+100//récupération du left par rapport à son élément parent + la moitié de la largeur de la div dracaufeu pour que la boule de feu se stop au milieu 

        if(attaque>stop){
            clearInterval(animationAttaque)
            masqueBouleDeFeu.style.left ='80px'//repositionnement de la boule de feu à son left d'origine
            coups++
            compteur.innerText=coups // augmentation du compteur de coups par 1 à chaque fois que dracaufeu est touché
            animationEnCours=false
            barreDeVie.setAttribute('value',20-coups)//diminution de la barre de vie de dracaufeu
            window.document.getElementById('bouleDeFeu').remove()


            //animation de l'explosion de dracaufeu
            
            if(compteur.innerText=='20'){
                //console.log('je suis la')
                //on rajoute les balises HTML
                $('#instruction').html(`
                <img id="backgroud-jeu" src="./background/background-fin-du-jeu.gif" alt="Background du jeu">
                <div id="masqueUn">
                <img id="personnage" src="./image/personnage.png" alt="personnage">
                </div>
                <div id="masqueExplosion">
                <img id="explosion" src="./image/explosion.png" alt="explosion">
                </div>
              `)
              let explosion = window.document.getElementById('explosion')//déclaration de la variable explosion
                var compteurExplosionPosition=0;
                animationTermine=true;
                const animationExplosion = setInterval(function(){
                
                    
                    explosion.style.top=(positionExplosion.position[compteurExplosionPosition].t)+'px';
                    explosion.style.left=(positionExplosion.position[compteurExplosionPosition].l)+'px';
                    //console.log(compteurExplosionPosition)
                    compteurExplosionPosition++;


                if(compteurExplosionPosition==10){
                    clearInterval(animationExplosion)
                    //console.log('fin')
                    if(!instructionFin){
                      instructionFin=true;
                       //affichage du CV
                    $('#instruction').html(`
                    <img id="backgroud-jeu" src="./background/background-fin-du-jeu.gif" alt="Background du jeu">
                    <div id="masqueUn">
                    <img id="personnage" src="./image/personnage.png" alt="personnage">
                    </div>

                    <div id="masqueVortex">
                    <img id="vortex" src="./image/vortex.png" alt="vortex">
                    </div>
                    <div id="masqueIconeCv">
                      <img id="iconeCv" src="./image/cv.png" alt="iconeCv">
                    </div>
                    <span id="touche">Utiliser les flèches directionnelles du clavier pour récupérer le CV</span>
                    `)
                    utilisationDesFleches=true;
                    marche = window.document.getElementById('personnage')
                    marcheMasque = window.document.getElementById('masqueUn')
                    }
                    else{
                    //affichage du CV
                    $('#instruction').html(`
                    <img id="backgroud-jeu" src="./background/background-fin-du-jeu.gif" alt="Background du jeu">
                    <div id="masqueUn">
                    <img id="personnage" src="./image/personnage.png" alt="personnage">
                    </div>

                    <div id="masqueVortex">
                    <img id="vortex" src="./image/vortex.png" alt="vortex">
                    </div>
                    <div id="masqueIconeCv">
                      <img id="iconeCv" src="./image/cv.png" alt="iconeCv">
                    </div>
                    
                    `)
                    utilisationDesFleches=true;//variable qui va permettre l'utilisation des flèches directionnelles
                    marche = window.document.getElementById('personnage')
                    marcheMasque = window.document.getElementById('masqueUn')
                  }
                }

                },150)
                

            }

            
        }

        

    },1)}  
break;

case 'ArrowRight':
     //instructions 
     if(utilisationDesFleches){

      if(!marcheEnCoursDroite){
        
         marcheEnCoursDroite=true;
         animationMarcheDroite = setInterval(function(){
                
        marcheMasque.style.transform='scaleX(1)'  
        deplacement= marcheMasque.offsetLeft    
        marcheMasque.style.left=deplacement+20+'px'     
        marche.style.bottom=(positionMarche.position[compteurMarchePosition].b)+'px';
        marche.style.left=(positionMarche.position[compteurMarchePosition].l)+'px';
        cv = window.document.getElementById('masqueIconeCv')
        finDuJeu=(cv.offsetLeft)+30

        if(deplacement>finDuJeu){
         utilisationDesFleches=false;
         clearInterval(animationMarcheDroite) 
          //console.log('fin du game !!') 
          $('#instruction').html(`
          <img id="backgroud-jeu" src="./background/background-fin-du-jeu.gif" alt="Background du jeu">
          <div class="messageFin">
          <div><span class="messageDeFin">Tu as fini le jeu !</span></div> 
          <div><span class="bouton">Recommencer le Jeu</span></div>
          <div><a class="bouton" href="./cv/cv-eddy-tabuteau-JS.pdf" title="cv pdf" target="_blank">Mon CV pdf</a></div>
        </div>
          `)

          //au click on peut recommencer la partie
          $('#instruction div:nth-child(2) span').click(function(){codejeu()})

         }

        //console.log(compteurMarchePosition)
        compteurMarchePosition++;
    if(compteurMarchePosition==6){
        compteurMarchePosition=0
    }
    },100)}
     }
    break

    case 'ArrowLeft':
      //instructions 
      if(utilisationDesFleches){

        if(!marcheEnCoursGauche){
          
          marcheEnCoursGauche=true;
          animationMarcheGauche = setInterval(function(){
                 
          deplacement= marcheMasque.offsetLeft    
          marcheMasque.style.left=deplacement-20+'px' 
          marcheMasque.style.transform='scaleX(-1)'           
         marche.style.bottom=(positionMarche.position[compteurMarchePosition].b)+'px';
         marche.style.left=(positionMarche.position[compteurMarchePosition].l)+'px';
  
         if(deplacement<=0){
          marcheMasque.style.left='0px' 
         }
         
         //console.log(compteurMarchePosition)
         compteurMarchePosition++;
     if(compteurMarchePosition==6){
         compteurMarchePosition=0
     }
     },100)}
      }
    break

}

    
}
)

window.addEventListener('keyup',function(eventPerso){
    let instructionPerso = eventPerso.code;
    let personnage = window.document.getElementById('personnage')
// console.log(instructionPerso)

switch(instructionPerso){
        //évènement pour faire retourner le personnage dans la position d'origine après une attaque         
    case 'Enter':
  //instructions
  personnage.style.bottom = '-369px'
  
break;

case 'ArrowRight':
     //instructions
     if(utilisationDesFleches){
      clearInterval(animationMarcheDroite)
      marche.style.bottom='-369px';
           marche.style.left='-7px';
           marcheEnCoursDroite=false;

     } 
    break

    case 'ArrowLeft':
      //instructions 
      if(utilisationDesFleches){
        clearInterval(animationMarcheGauche)
        marche.style.bottom='-369px';
             marche.style.left='-7px';
             marcheEnCoursGauche=false;

      }
    break
}

}
)
}

//au click sur sur play on lance l'instruction puis si on re click sur play on lance le jeu
$('.boutonplay').click(function(){
    $('#instruction').html(`
    <img id="backgroud-jeu" src="./background/background-fin-du-jeu.gif" alt="Background du jeu">
      <div id="masqueUn">
        
        <img id="personnage" src="./image/personnage.png" alt="personnage">
      </div>
      <div id="masqueDracaufeu">
        <img id="dracaufeu" src="./image/boss.png" alt="dracaufeu">
      </div>
    <span id="touche">Utiliser la touche "Entrée" du clavier pour lancer des boules de feu 
    <br><br>
    <img id="validation" src="./image/play.png" alt="">
    </span>
    `)
    $('#validation').click(function(){codejeu()})
})
})