const conveyor = document.getElementById("conveyor");

const arm = document.getElementById("arm");

const emoticon = document.getElementById("emoticon");

function start(eyes, mouth) {
  console.log(eyes);
  let img1 = document.getElementById("img1");
  img1.src = eyes + ".png";
  img1.style.visibility = "visible"; //

  let imgMouth = document.createElement("img");
  imgMouth.src = mouth + ".png";
  imgMouth.setAttribute("id", "img2");
  imgMouth.style.position = "absolute";
  div.append(imgMouth);

  //saut de t'émoticon
  let R = 200;

  //saut de Bowser

  gsap
    .timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        duration: 2,
      },
    })
    .to("#bowser", {
      y: 187,
      scale: 1.1,
      ease: "bounce",
    });

  //

  // mvt du mur

  gsap
    .timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        duration: 1.5,
      },
    })
    .to("#thwomp", {
      y: 210,
      scale: 1.1,
      ease: "none",
    });

  //Mouvement du champignon

  //sequenced one-after-the-other

  gsap
    .timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        duration: 2,
      },
    })
    .from("#champignon", {
      duration: 0.2,
      rotation: -2,
    })
    .to("#champignon", {
      duration: 0.2,
      rotation: 2,
    });

  //Mouvement du fantome
  TweenMax.to("#gost", 6, {
    bezier: {
      curviness: 1.5,
      values: [
        { x: 0, y: 0 },
        { x: R / 2, y: R / 2 },
        { x: 0, y: R },
        { x: -R / 2, y: R / 2 },
        { x: 0, y: 0 },
      ],
    },

    rotation: 720,
    ease: Power0.easeNone,
    repeat: -1,
  });

  //

  let e = document.getElementById("img1");
  gsap.to(e, { x: 0, y: 10 });

  gsap.to(conveyor, 2, { marginLeft: 140, delay: 2 });
  gsap.to(arm, 2, { marginLeft: 140, delay: 2 });
  gsap.to(emoticon, { x: 345, y: 50 });

  gsap.fromTo(
    emoticon,
    { x: 345, y: 400, opacity: 0 },
    { y: 20, duration: 2, opacity: 1, ease: "power3.out" }
  );
  gsap.to(emoticon, 2, { x: 485, y: 20, delay: 2 });
  gsap.to(emoticon, 1, { x: 485, y: 180, ease: "bounce", delay: 5 }); //quand elle tombe

  gsap.to(emoticon, 1, { x: 565, delay: 7 }); // il recupere les yeux
  gsap.to(img1, 2, { y: 350, delay: 7 }); // les yeux se pose
  gsap.to(emoticon, {
    duration: 2.5,
    x: 600,
    delay: 9,
    ease: "elastic.out(1, 0.3)",
  }); // Il se prend le champigon et recule

  ////////////////////////////////////////
  gsap.to(img1, {
    duration: 2.5,
    x: 35, ////
    delay: 9,
    ease: "elastic.out(1, 0.3)",
  }); // Il se prend le champigon et recule
  ////////////////////////////////////////
  gsap.to(img1, {
    ////oeil prend son elan
    duration: 0.5,
    x: -85,
    delay: 10,
  });
  gsap.to(emoticon, {
    duration: 0.5,
    x: 485,
    delay: 10,
  }); // Emoticon PREND SON 2LAN
  gsap.to(img1, {
    /////oeil met coup de tete
    duration: 0.3,
    x: 90,
    delay: 10.5,
  });

  ////////////////////////////////////
  gsap.to(emoticon, {
    ////// Emoticon met coup de tete
    duration: 0.3,
    x: 670,
    delay: 10.5,
  });
  gsap.fromTo(
    "#champignon",
    { x: 0, y: 0 },
    { rotation: 260, x: 450, y: -50, scale: 1.5, duration: 1.5, delay: 10.6 }
  ); // Le champigonon s'éjecte
  //TweenLite.to("#champigon", 12, {visibility: "hidden"} ,

  // this code has the same effect

  /////////////
  gsap.to(emoticon, {
    ////// tete s'approche du mur
    duration: 2,
    x: 750,
    delay: 11.8,
  });
  gsap.to(img1, {
    /////oeil ...
    duration: 2, ////////////////////////////
    x: 180,
    delay: 11.8,
  });
  gsap.to(emoticon, {
    ////// tete saute
    duration: 0.5,
    delay: 13.8,
    x: 990,
  });

  TweenMax.set("img1", { xPercent: "-50%", yPercent: "-50%" });
  tl = new TimelineMax();
  tl.to("#img1", 0.5, { rotation: 360, x: 440, delay: 13.8 });

  gsap.to(emoticon, {
    duration: 2,
    delay: 14.3,
    ease: "slow(0.7, 0.7, false)",
    x: 1070,
  });
  gsap.to(img1, {
    duration: 2,
    delay: 14.3,
    ease: "slow(0.7, 0.7, false)",
    x: 500,
  });
  gsap.to(img2, {
    duration: 2,
    delay: 15.8,
    y: 355,
  });
}
