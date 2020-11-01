/*const logo = document.getElementById("logo") ;
gsap.to(logo, 2,{width:200 , height:200});
*/

const conveyor = document.getElementById("conveyor");

const arm = document.getElementById("arm");

const emoticon = document.getElementById("emoticon");

function start(eyes, mouth) {
  console.log(eyes);
  let div = document.getElementById("div");
  let imgEyes = document.createElement("img");
  imgEyes.src = eyes + ".png";
  imgEyes.setAttribute("id", "img1");
  imgEyes.style.position = "absolute";
  div.append(imgEyes);

  let imgMouth = document.createElement("img");
  imgMouth.src = mouth + ".png";
  imgMouth.setAttribute("id", "img2");
  imgMouth.style.position = "absolute";
  div.append(imgMouth);

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
        duration: 2,
      },
    })
    .to("#thwomp", {
      y: 210,
      scale: 1.1,
      ease: "power4.in",
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

  //

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
    x: 620,
    delay: 9,
    ease: "elastic.out(1, 0.3)",
  }); // Il se prend le champigon et recule

  ////////////////////////////////////////
  gsap.to(img1, {
    duration: 2.5,
    x: 45,
    delay: 9,
    ease: "elastic.out(1, 0.3)",
  }); // Il se prend le champigon et recule
  ////////////////////////////////////////
  gsap.to(img1, {
    ////oeil prend son elan
    duration: 0.5,
    x: -90,
    delay: 10,
  });

  gsap.to(img1, {
    /////oeil mais coup de tete
    duration: 0.3,
    x: 95,
    delay: 10.5,
  });

  ////////////////////////////////////
  gsap.to(emoticon, {
    duration: 0.5,
    x: 485,
    delay: 10,
  }); // Il PREND SON 2LAN
  gsap.to(emoticon, {
    ////// tete met coup de tete
    duration: 0.3,
    x: 670,
    delay: 10.5,
  });
  gsap.fromTo(
    "#champignon",
    { x: 0, y: 0 },
    { rotation: 260, x: 1300, y: -50, scale: 1.5, duration: 5, delay: 10.6 }
  ); // Le champigonon s'éjecte
}
