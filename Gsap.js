// identification de la grue et de l'émoticon
const conveyor = document.getElementById("conveyor");
const arm = document.getElementById("arm");
//const emoticon = document.getElementById("emoticon");

basics_animations = () => {
  ///Vol aléatoire de Bowser

  var width = $("#div").width();
  var height = $("#div").height();
  var dx = width * 0.9;
  var dy = height * 0.9;

  function tweenProperty(target, prop, min, max) {
    TweenLite.to(target, random(3, 6), {
      [prop]: random(min, max),
      ease: Sine.easeInOut,
      rotation: random(-45, 45),
      onComplete: tweenProperty,
      onCompleteParams: [target, prop, min, max],
    });
  }

  function random(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  tweenProperty("#bowser", "scale", 0.9, 1);
  tweenProperty("#bowser", "x", -dx, dx);
  tweenProperty("#bowser", "y", -dy, dy);

  gsap
    .timeline({
      repeat: -1,
    })
    .to("#thwomp_one", {
      y: 0,
      duration: 0.5,
      ease: "none",
    })
    .to("#thwomp_one", {
      y: -150,
      duration: 3,
      ease: SteppedEase.config(4),
    });
  gsap
    .timeline({
      repeat: -1,
      delay: 1,
    })
    .to("#thwomp_two", {
      y: 0,
      duration: 0.5,
      ease: "none",
    })
    .to("#thwomp_two", {
      y: -150,
      duration: 3,
      ease: SteppedEase.config(4),
    });
  gsap
    .timeline({
      repeat: -1,
      delay: 1.5,
    })
    .to("#thwomp_three", {
      y: 0,
      duration: 0.5,
      ease: "none",
    })
    .to("#thwomp_three", {
      y: -150,
      duration: 3,
      ease: SteppedEase.config(4),
    });
  ///////////////////////////
  /////////////////champignon
  gsap
    .timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        duration: 2,
        autoAlpha: 1,
      },
    })
    .from("#mushroom-box", {
      duration: 0.2,
      rotation: -2,
    })
    .to("#mushroom-box", {
      duration: 0.2,
      rotation: 2,
    });

  ///////////////////////

  gsap.to(conveyor, 2, { marginLeft: 140, delay: 2 });
  gsap.to(arm, 2, { marginLeft: 140, delay: 2 });

  //roues

  var R = 290,
    dur = 7,
    totalCount = 3,
    Ease = Linear.easeNone;

  var tl = new TimelineLite()
    .to(
      ".whell_one",
      dur,
      {
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
        rotation: 320,
        repeat: -1,
        ease: Ease,
        transformOrigin: "center",
      },
      dur / totalCount
    )
    .to(
      ".whell_one",
      dur * 2,
      { rotation: -360, ease: Power0.easeNone, repeat: -1 },
      0
    )
    .time(dur)
    .to(
      ".whell_two",
      dur,
      {
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
        rotation: -900,
        repeat: -1,
        ease: Ease,
        transformOrigin: "center",
      },
      dur / totalCount
    )
    .to(
      ".whell_two",
      dur * 2,
      { rotation: -360, ease: Power0.easeNone, repeat: -1 },
      0
    )
    .time(dur)
    .to(
      ".whell_three",
      dur,
      {
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
        rotation: 320,
        repeat: -1,
        ease: Ease,
        transformOrigin: "center",
      },
      dur / totalCount
    )
    .to(
      ".whell_three",
      dur * 2,
      { rotation: -360, ease: Power0.easeNone, repeat: -1 },
      0
    )
    .time(dur);
};

start_emo_content = () => {
  basics_animations();
  //cache de l'emoticon_hungry sur le coté
  document.getElementById("emoticon_hungry").style.visibility = "hidden";

  const emoticon = document.createElement("img");
  emoticon.src = "./images/emoticon1" + ".png";
  emoticon.setAttribute("id", "emoticon");
  div.append(emoticon);

  gsap.to(emoticon, { x: 345, y: 50 });

  gsap.fromTo(
    emoticon,
    { x: 345, y: 400 },
    { y: 20, duration: 2, ease: "power3.out" }
  );
  gsap.to(emoticon, 2, { x: 485, y: 20, delay: 2 });
  gsap.to(emoticon, 1, { x: 485, y: 180, ease: "bounce", delay: 5 }); //quand elle tombe

  gsap.to(emoticon, 1, { x: 565, delay: 7 });

  gsap.to(emoticon, {
    duration: 2.5,
    x: 580,
    delay: 9,
    ease: "elastic.out(1, 0.3)",
  });
  gsap.to(emoticon, {
    duration: 0.5,
    x: 485,
    delay: 10,
  });
  gsap.to(emoticon, {
    ////// Emoticon met coup de tete
    duration: 0.3,
    x: 600,
    delay: 10.5,
  });
  /////////////

  ///////////

  gsap.set("#mushroom", { xPercent: "-50%", yPercent: "-50%", autoAlpha: 1 });
  tl = new TimelineMax();
  tl.to("#mushroom-box", 2, {
    rotation: 360,
    x: 800,
    y: 150,
    delay: 10.6,
  });

  gsap.to("#mushroom", 0.1, { visibility: "hidden", delay: 11.6 });

  // this code has the same effect

  /////////////
  gsap.to(emoticon, {
    ////// tete s'approche du mur
    duration: 2,
    x: 750,
    delay: 11.8,
  });

  gsap.to(emoticon, {
    duration: 0.5,
    delay: 13.8,
    x: 990,
  });

  /////////////////////
  gsap.to("#roquette", {
    duration: 2,
    delay: 14.5,
    ease: "power(1)",
    x: -770,
  });
  gsap.to("#roquette", {
    duration: 2,
    delay: 16.5,
    visibility: "hidden",
  });
  gsap.to(".explosif_container", {
    duration: 2,
    delay: 16.8,
    autoAlpha: 1, //autoalpha est indiqué pour un gain de performances
  });
  gsap.to(".explosif_container", {
    delay: 18.8,
    autoAlpha: 0,
  });
  //////////////////

  var tl = new TimelineLite({ delay: 14.5 });
  tl.to(emoticon, 0.5, { y: 0 })
    .to(emoticon, 1.25, { y: 25, ease: Power1.easeInOut })
    .to(emoticon, 1.75, { x: "+=344" }, "-=1.75")
    .to(emoticon, 1.5, { delay: 2.5, y: 100 });
  ///////////////////
};
start_emo_hungry = () => {
  /* test faire rougir l'émoti
  const app = new PIXI.Application({}); //retirer{}peutetre
  app.style = document.body.style;

  document.body.appendChild(app.view);
  const texture = PIXI.Texture.from("examples/assets/pacman_two.png");
  // time animation in seconds
  const time = 2.0;

  const bunny1 = new PIXI.Sprite(texture);
  bunny1.scale.set(3.0, 3.0);
  bunny1.anchor.set(0.5, 0.5);
  bunny1.x = app.screen.width / 4;
  bunny1.y = app.screen.height / 2;

  app.stage.addChild(bunny1);

  gsap.to(bunny1, {
    pixi: { tint: "red" },
    duration: time,
    repeat: -1,
    yoyo: true,
  });
  */
  basics_animations();
  const emoticon_hungry = document.getElementById("emoticon_hungry");

  gsap.fromTo(
    emoticon_hungry,
    { x: 345, y: 400, delay: 0 },
    { y: 20, duration: 2, ease: "power3.out" }
  );
  gsap.to(emoticon_hungry, {
    delay: 2,
    duration: 0.5,
    y: -20,
    repeat: 1,
    yoyo: true,
  });
  var tl = new TimelineMax({
    transformOrigin: "center top",
    delay: 2,
    repeat: -1,
  })
    .to(emoticon_hungry, 0.2, { rotation: "+=10" })
    .to(emoticon_hungry, 0.2, { rotation: "-=20", delay: 0.3 })
    .to(emoticon_hungry, 0.2, { rotation: "+=15", delay: 0.5 })
    .to(emoticon_hungry, 0.2, { rotation: "-=8", delay: 0.7 });

  var tl = new TimelineMax({ delay: 4 });
  tl.to(emoticon_hungry, 0.5, { y: 0 })
    .to(emoticon_hungry, 1.25, { y: 100, ease: Power1.easeInOut })
    .to(emoticon_hungry, 1.75, { x: "+=270" }, "-=1.75")
    // .to(emoticon, 0.5, { y: 60, yoyo: true, repeat: 3, rotation: 0 })
    .fromTo(
      emoticon_hungry,
      { y: 60, rotation: 0, delay: 6 },
      {
        y: 115,
        yoyo: true,
        repeat: 3,

        duration: 0.5,
        rotation: 0,
      }
    )
    .fromTo(
      "#mushroom",
      { scaleX: 1, scaleY: 1 },
      {
        transformOrigin: "100% 100%",
        scaleX: 1,
        scaleY: 0.2,
        ease: Power1.easeInOut,
        duration: 1.5,
      },
      2.5
    )
    .to(emoticon_hungry, { y: 160 }, 3)
    .to(emoticon_hungry, { y: 165, duration: 1 })
    .to(emoticon_hungry, { y: 180, x: 650, duration: 1 });

  tl = new TimelineMax();
  tl.to("#emotibox", 9.5, {
    rotation: 360,
    xPercent: "-50%",
    yPercent: "-50%",
    x: 850,
  })
    .to(emoticon_hungry, 3, { rotation: 360, x: 1050 })
    .to(emoticon_hungry, 1, { y: 145, scaleX: 2, scaleY: 2 })
    .set(emoticon_hungry, { attr: { src: "images/pacman_one.png" } })
    .to("#roquette", 1, {
      ease: "power(1)",
      x: -100,
    })
    .set(emoticon_hungry, { attr: { src: "images/pacman_two.png" } })
    .to("#roquette", 2, {
      visibility: "hidden",
    })
    .to(emoticon_hungry, 3, {
      pixi: { fillColor: "purple" },
      duration: 3,
      yoyo: true, //
    });

  //.to(emoticon, 2, { x: "+=220", duration: 2, rotation: 360 });
  /////////
};
start_emo_group = () => {
  basics_animations();
  const emoticon = document.createElement("img");
  emoticon.src = "./images/emoticon3" + ".png";
  emoticon.setAttribute("id", "emoticon");
  div.append(emoticon);
};

// controlleurs audio

emoHappySong = () => {
  let song_container = (document.getElementById("audio_controller").innerHTML =
    '<audio id="audio-player" controls="controls" autoplay="true" src="./songs/overworld_theme_super_mario_3d_land.mp3" type="audio/mpeg">');

  song_container.play();
};

emoSadSong = () => {
  let song_container = (document.getElementById("audio_controller").innerHTML =
    '<audio id="audio-player" controls="controls" autoplay="true" src="./songs/a_farewell_to_kirby_kirby_star_allies_music_7922055104079329814.mp3" type="audio/mpeg">');
  song_container.play();
};

emoGroupSong = () => {
  let song_container = (document.getElementById("audio_controller").innerHTML =
    '<audio id="audio-player" controls="controls" autoplay="true" src="./songs/metallic-mario-super-mario-64.mp3" type="audio/mpeg">');
  song_container.play();
};
