function afficherMessage() {
  var skull =
    "                 (\n" +
    "                .            )        )\n" +
    "                         (  (|              .\n" +
    "                     )   )\\/ ( ( (\n" +
    "             *  (   ((  /     ))\\))  (  )    )\n" +
    "           (     \\   )\\(          |  ))( )  (|\n" +
    "           >)     ))/   |          )/  \\((  ) \\\n" +
    "           (     (      .        -.     V )/   )(    (\n" +
    "            \\   /     .   \\            .       \\))   ))\n" +
    "              )(      (  | |   )            .    (  /\n" +
    "             )(    ,'))     \\ /          \\( `.    )\n" +
    "             (\\>  ,'/__      ))            __`.  /\n" +
    "            ( \\   | /  ___   ( \\/     ___   \\ | ( (\n" +
    "             \\.)  |/  /   \\__      __/   \\   \\ |  ))\n" +
    "            .  \\.|>  \\      | __ |      /   <|  /\n" +
    "                 )/    \\____/ :..: \\____/     \\ <\n" +
    "          )   \\ (|__  .      / ;: \\          __| )  (\n" +
    "         ((    )\\)  ~--_     --  --      _--~    /  ))\n" +
    "          \\    (    |  ||               ||  |   (  /\n" +
    "            \\   (    |  ||_             _||  |  /\n" +
    "              >  :  |  ~V+-I_I_I-+V~  |  : (.\n" +
    "             (  \\:  T\\   _     _   /T  : ./\n" +
    "              \\  :    T^T T-+-T T^T    ;<\n" +
    "               \\..`_       -+-       _'  )\n" +
    "         )            . `--=.._____..=--'. ./   ";

  alert(skull);
}

var texteModifie = false;

function basculerTexte() {
  var element = document.getElementById("demo");

  if (texteModifie) {
    element.innerHTML = "Click the button to change this text";
  } else {
    element.innerHTML = "Je suis un texte modifié par JavaScript";
  }

  texteModifie = !texteModifie; // Inverse la valeur de texteModifie
}

var demoimage = false;

function Image() {
  var element = document.getElementById("demoimage");

  if (demoimage) {
    element.innerHTML = "Image en alerte";
  } else {
    element.innerHTML =
      '<img src="fleche.png" width="200" height="150"alt="Description de l\'image">';
  }

  demoimage = !demoimage;
}


function compteur() {
  var element = document.getElementById("compteur");
  var nombre = parseInt(element.innerHTML);
  element.innerHTML = nombre + 1;
}

var currentIndex = 0;

function couleur() {
  var couleur = ["red", "blue", "green", "purple", "orange"];
  var element = document.getElementById("couleur");
  element.style.color = couleur[currentIndex];
  currentIndex = (currentIndex + 1) % couleur.length;
}


function saut() {
  var element = document.getElementById("saut");
  element.style.marginTop = "100px";
}