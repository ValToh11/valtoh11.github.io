// Année automatique dans le pied de page
document.getElementById('annee').textContent = new Date().getFullYear();

// Menu mobile : ouvrir / fermer
const bouton = document.querySelector('.bouton-menu');
const menu = document.getElementById('menu');

bouton.addEventListener('click', () => {
  menu.classList.toggle('ouvert');
});

// referme le menu quand on clique sur un lien
menu.querySelectorAll('a').forEach(lien => {
  lien.addEventListener('click', () => {
    menu.classList.remove('ouvert');
  });
});

// Apparition des éléments au défilement
const aReveler = document.querySelectorAll('.apparition');

const observateur = new IntersectionObserver((entrees) => {
  entrees.forEach(entree => {
    if (entree.isIntersecting) {
      entree.target.classList.add('visible');
      observateur.unobserve(entree.target);
    }
  });
}, { threshold: 0.15 });

aReveler.forEach(element => observateur.observe(element));

// 5. Pop-up du formulaire de contact
const modale = document.getElementById('modale-contact');
const boutonOuvrir = document.getElementById('ouvrir-contact');
const boutonFermer = document.getElementById('fermer-contact');

if (modale && boutonOuvrir) {
  boutonOuvrir.addEventListener('click', () => modale.showModal());
  boutonFermer.addEventListener('click', () => modale.close());

  // ferme aussi quand on clique sur le fond sombre, à côté de la pop-up
  modale.addEventListener('click', (e) => {
    if (e.target === modale) modale.close();
  });
}
// Pop-up d'aperçu du projet
const modaleApercu = document.getElementById('modale-apercu');
const ouvrirApercu = document.getElementById('ouvrir-apercu');
const fermerApercu = document.getElementById('fermer-apercu');

if (modaleApercu && ouvrirApercu) {
  ouvrirApercu.addEventListener('click', () => modaleApercu.showModal());
  fermerApercu.addEventListener('click', () => modaleApercu.close());
  modaleApercu.addEventListener('click', (e) => {
    if (e.target === modaleApercu) modaleApercu.close();
  });
}