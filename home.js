/*// animation la danse des emotis

gsap.to("#emoticons", {
  y: 100,
  ease: "none",
  stagger: {
    each: 0.5,
  },
  repeat: -1,
  yoyo: true,
});*/

// animation espace
var tl = gsap.timeline();
gsap.set("#my-wrapper", { scale: 0.7 });
tl.from("#my-wrapper", { duration: 1, opacity: 0 })
  .from("#title", {
    opacity: 0,
    scale: 0,
    ease: "back",
  })
  .from("#emoticons", { y: 160, stagger: 0.1, duration: 0.8, ease: "back" });
//.from("#time", {x:100, duration:0.2})//fait apparaitre de la gauche cela peut ete c'est partit ou jouer !
