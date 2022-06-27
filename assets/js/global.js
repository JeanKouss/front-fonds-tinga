
/* Animation à l'apparition */
let elmsToObserve = document.querySelectorAll(".anime-on-apparition");

let onIntersectClassAdd = "isVisibleOnScreen";
let ratio = 0.1;
let options = {
    root : null,
    rootMargin : '0px',
    threshold : 0.3
}

// Fonction de callback
const handleRootIntersect = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(onIntersectClassAdd);
            rootObserver.unobserve(entry.target);
        }
    });
}
// Création de l'observeur
const rootObserver = new IntersectionObserver(handleRootIntersect, options);

if (rootObserver) { // Affectation de l'observeur s'il a été bien créé
    for (let elm of elmsToObserve) {
        rootObserver.observe(elm);
    }
} else { // Si le observer n'est pas supporté
    for (let elm of elmsToObserve) {
        elm.classList.add(onIntersectClassAdd);
    }
}
