gsap.from("my_wrapper", { duration: 1, opacity: 0 });
gsap.from("#title", { duration: 1, delay: 1, opacity: 0, scale: 0 });
gsap.from("ul#emotis-container>li", {
  duration: 0.5,
  delay: 2,
  scale: 0,
  stagger: 0.5,
});
gsap.from("#my-button", {
  duration: 1,
  delay: 5,
  opacity: 0,
  xPercent: 100,
  ease: "bounce",
});
/*color title by letter soon
var colors = ["red", "green", "blue", "orange", "#f60", "yellow"];
// une couleur au hasard = colors[Math.floor(Math.random() * colors.length)];

 CHANGEMENT DE COULEUR DE FOND 
TweenLite.set("title", {
  color: function () {
    const content = document.getElementById("title").textContent;
    const worddivided = content.split("");
    worddivided.map((letter) => {
      return letter.style.colors[Math.floor(Math.random() * colors.length)];
    });
  },
});

*/
let tl = new TimelineMax({ repeat: -1, delay: 7 });
tl.to("#emoticons1", {
  rotation: 720,
  duration: 3,
  ease: "back",
}).to("#emoticons1", {
  rotation: 0,
  duration: 3,
  ease: "back",
});

let tl1 = new TimelineMax({ repeat: -1, delay: 7 });
tl1
  .to("#emoticons2", 1, {
    rotation: -360,
  })
  .to("#emoticons2", 1, {
    rotation: 0,
  })
  .to("#emoticons2", 1, {
    rotation: 360,
  })
  .to("#emoticons2", 1, {
    rotation: 0,
  });

///////////////////////////////////////
var tl2 = new TimelineMax({ repeat: -1, delay: 6 });
tl2
  .to("#emoticons3", {
    delay: 1,
    duration: 0.5,
    y: -100,
  })
  .to("#emoticons3", {
    duration: 0.5,
    y: 0,

    ease: "bounce",
  })
  .to("#emoticons3", {
    rotation: -20,
    duration: 0.8,
    ease: "none",
  })
  .to("#emoticons3", {
    rotation: 15,
    duration: 0.8,
    ease: "none",
  });
/////////////////////////////////////
let tl3 = new TimelineMax({ repeat: -1, delay: 7 });
tl3
  .to("#emoticons4", {
    duration: 2,
    y: -100,
    scale: 1.2,
  })
  .to("#emoticons4", {
    y: 0,
    scale: 1,
  });
//////////////////////////////
let tl4 = new TimelineMax({ repeat: -1, delay: 7 });
tl4
  .to("#emoticons5", {
    y: -100,
    ease: Circ.easeOut,
    yoyo: true,
    repeat: 1,
  })
  .to("#emoticons5", {
    transformOrigin: "50% 100%",

    scaleY: 0.35,
    yoyo: true,
    repeat: 1,
  });
//////////////
let tl5 = new TimelineMax({ repeat: -1, delay: 7 });
tl5
  .to("#emoticons6", 0.75, {
    y: -100,
    ease: Circ.easeOut,
    yoyo: true,
    repeat: 1,
  })
  .to("#emoticons6", {
    y: 0,
  })
  .to("#emoticons6", {
    rotation: "360",
    ease: Linear.easeNone,
    y: -100,
  })
  .to("#emoticons6", {
    y: 0,
    ease: "bounce",
  });
///
/////////
/////////////
/////////
////////////////

/*
gsap
  .to("#emoticons6", {
    y: -100,

    ease: "back",
  })
  .to({
    y: 0,
  });*/
/*
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








  gsap.to("#emoticons", {
  y: 100,
  // ease: "none",
  stagger: {
    each: 0.5,
  },
  repeat: -1,
  yoyo: true,








  gsap.defaults({
  ease: "power2.in",
  duration: 1,
});
gsap.to("#emoticons", {
  y: -50,
  stagger: {
    each: 1,
  },
  repeat: -1,
  yoyo: true,
});
});
*/
