const images = [
  "./images/Boite2.png",
  "./images/Boite3.png",
  "./images/Boite4.png"
];

images.forEach((src) => {
  const img = new Image();
  img.src = src;
});

const imageCadeau = document.querySelector(".img-boite");

imageCadeau.classList.add('shake-active');

function appliquerChangement(nouvelleSource) {
  
  imageCadeau.classList.add('pop-effect');
  
  setTimeout(() => {
    imageCadeau.src = nouvelleSource;
    imageCadeau.classList.remove('pop-effect');
  }, 300);
}

setTimeout(() => {
  
  imageCadeau.classList.remove('shake-active');
  appliquerChangement("./images/Boite2.png");

  setTimeout(() => {
    appliquerChangement("./images/Boite3.png");

    setTimeout(() => {
      appliquerChangement("./images/Boite4.png");

    }, 2000);

  }, 2000);

}, 2000);

setTimeout(() => {
  const tirage = Math.random(); 
  if (tirage < 0.20) {
    window.location.href = "page5-resultat-gagnant.html"; 
    
  } else {
    window.location.href = "page5-resultat-perdant.html";
  }
}, 8000);