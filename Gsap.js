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
  /*gsap
    .timeline({
      repeat: 41,
      yoyo: true,
      repeatDelay: 0,
    })
  gsap.fromTo(
    "#mushroom-box",
    0.7,
    { rotation: 20, transformOrigin: "right bottom" },
    {
      rotation: -20,
      transformOrigin: "left bottom",

   
    }
  );*/

  gsap
    .timeline({
      repeat: 41,
      yoyo: true,
      repeatDelay: 0,
      defaults: {
        duration: 0.7,

        ease: Power0.easeNone,
      },
    })
    .fromTo(
      "#mushroom",
      0.7,
      { rotation: 0, transformOrigin: "right bottom" },
      {
        rotation: -12,
        transformOrigin: "left bottom",
      }
    );

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
    { y: 5, duration: 2, ease: "power3.out" }
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
    duration: 1.5,
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
    delay: 14.8,
    ease: "power(1)",
    x: -770,
  });
  gsap.to("#roquette", {
    duration: 2,
    delay: 16.8,
    visibility: "hidden",
  });
  gsap.to(".explosif_container", {
    duration: 2,
    delay: 17.1,
    autoAlpha: 1, //autoalpha est indiqué pour un gain de performances
  });
  gsap.to(".explosif_container", {
    delay: 18.6,
    autoAlpha: 0,
  });
  //////////////////

  var tl = new TimelineLite({ delay: 14.5 });
  tl.to(emoticon, 0.5, { y: 0 })
    .to(emoticon, 1.25, { y: 5, ease: Power1.easeInOut })
    .to(emoticon, 1.75, { x: "+=344" }, "-=1.75")
    .to(emoticon, 1.5, { delay: 2.5, y: 90 });
  ///////////////////
};
start_emo_hungry = () => {
  basics_animations();
  const emoticon_hungry = document.getElementById("emoticon_hungry");

  gsap.fromTo(
    emoticon_hungry,
    { x: 345, y: 400, delay: 0 },
    { y: 5, duration: 2, ease: "power3.out" }
  );
  gsap.to(emoticon_hungry, {
    delay: 2,
    duration: 0.5,
    y: -20,
    repeat: 1,
    yoyo: true,
  });
  var tl = new TimelineMax({ repeat: 2 })
    .to(emoticon_hungry, { rotation: "+=10", duration: 0.2 })
    .to(emoticon_hungry, { rotation: "-=20", duration: 0.2 })
    .to(emoticon_hungry, { rotation: "+=15", duration: 0.2 })
    .to(emoticon_hungry, { rotation: "-=8", duration: 0.2 });

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
        duration: 2.5,
      },
      1.5
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
    }) /* test baudruche    */
    .to(emoticon_hungry, 1, {
      x: 1050,
      zindex: 4,
      opacity: 1,
      y: 145,
      duration: 4.5,
      ease: Bounce.easeOut,
    })
    .to(emoticon_hungry, 0.7, { y: -480, ease: Bounce.easeOut })

    .to(emoticon_hungry, 1.2, { y: -170, ease: Power2.easeOut }, "-=.1")

    .to(emoticon_hungry, 0.6, { y: -500, ease: Power2.easeOut }, "-=.5")

    .to(emoticon_hungry, 1.3, { y: -160, ease: Power2.easeOut })

    .to(emoticon_hungry, 0.8, { x: 40, y: -570, ease: Power2.easeOut }, "-=.2")

    .to(emoticon_hungry, 0.7, { x: 40, y: -510, ease: Power2.easeOut }, "-=.2")

    .to(emoticon_hungry, 0.5, { x: 0, y: -570, ease: Power2.easeOut }, "-=.3")

    .to(emoticon_hungry, 0.5, { x: 350, y: 180, ease: Power2.easeOut })
    .to(emoticon_hungry, 0.1, { autoAlpha: 0 })
    .to(".explosif_container", {
      duration: 2,
      //  delay: 17.1,
      autoAlpha: 1, //autoalpha est indiqué pour un gain de performances
    })
    .to(".explosif_container", {
      //delay: 18.6,
      autoAlpha: 0,
    });
  /* 
  var wh = window.innerHeight;

  tl.to(emoticon_hungry, 0.5, { width: wh, ease: Power2.easeOut });

  TweenMax.to(emoticon_hungry, 2, {
    rotation: 360,
    trnsformOrigin: "center",
    repeat: -1,
    ease: Linear.easeNone,
  });*/

  //////

  //.to(emoticon, 2, { x: "+=220", duration: 2, rotation: 360 });
  /////////
};
start_emo_group = () => {
  basics_animations();

  gsap.set("#g1", {
    transformOrigin: "15 15",
    rotation: 0,
    x: 100,
    y: 200,
  });

  gsap.set("#g2", {
    transformOrigin: "5 5",
    rotation: 0,
    x: 108,
  });

  gsap.to("#g1", {
    duration: 2,
    rotation: 0,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to("#g2", {
    duration: 1.5,
    rotation: 80,
    repeatDelay: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  //3 6 et 4//

  const emoticon_one = document.createElement("img");

  emoticon_one.src = "./images/emoticon3" + ".png";
  emoticon_one.setAttribute("class", "emoticon");

  div.append(emoticon_one);

  const emoticon_two = document.createElement("img");

  emoticon_two.src = "./images/emoticon6" + ".png";
  emoticon_two.setAttribute("class", "emoticon");
  div.append(emoticon_two);

  const emoticon_three = document.createElement("img");
  emoticon_three.src = "./images/emoticon4" + ".png";
  emoticon_three.setAttribute("class", "emoticon");
  div.append(emoticon_three);

  gsap.registerPlugin();
  gsap.registerEffect({
    name: "fade",
    effect: (targets) => {
      var tl = new TimelineMax({ delay: 0 });
      return tl
        .to(targets, { x: 0, y: -205, duration: 0.5, delay: 0.25 })
        .to(targets, { x: "+=20", duration: 2, delay: 0.5 })
        .to(targets, { x: "+=100", duration: 1, delay: 0.25 })
        .to(
          targets,

          {
            x: "+=50",
            y: "+=181",
            duration: 0.5,
            delay: 1,
            ease: Bounce.easeOut,
          }
        );
    },

    extendTimeline: true,
  });

  let tl = gsap.timeline();
  tl.fade(emoticon_one)
    .fade(emoticon_two, "-=1")
    .to(emoticon_one, { x: "+=50" })
    .fade(emoticon_three, "-=1.5")
    .to(emoticon_two, { x: "+=25" })
    .add("start")

    .to(
      emoticon_one,
      {
        x: "+=10",

        ease: "bounce",
      },
      "-=1"
    )
    .to(
      emoticon_two,
      {
        x: "+=40",

        ease: "bounce",
      },
      "-=1" //test du saut ici
    )
    .to(emoticon_three, {
      x: "+=20",

      ease: "bounce",
    })
    .to(
      emoticon_one,
      {
        x: "-=50",
        scale: 1,
        ease: "bounce",
      },
      "-=1"
    )
    .to(
      emoticon_two,
      {
        x: "-=35",
        scale: 1,
        ease: "bounce",
      },
      "-=1"
    )
    .to(
      emoticon_three,
      {
        x: "-=25",
        scale: 1,
        ease: "bounce",
      },
      "-=1"
    )
    .to(
      emoticon_one,
      {
        x: "+=60",
        ease: "bounce",
      },
      "start"
    )
    .to(
      emoticon_two,
      {
        x: "+=45",
        ease: "bounce",
      },
      "start"
    )
    .to(
      emoticon_three,
      {
        x: "+=60",
        ease: "bounce",
      },
      "start"
    )
    .to("#mushroom", {
      rotation: 0,
      x: 470,
      duration: 0.5,
    })
    .to("#container", {
      autoAlpha: 1,
    })
    .to("#mushroom", {
      delay: -1,
      autoAlpha: 0,
    })
    .to("#roquet_luncher", {
      delay: -0.5,
      autoAlpha: 0,
    })
    .to("#roquette", {
      delay: -0.5,
      autoAlpha: 0,
    }); /* roulade collective

  var mtl = new TimelineMax({ delay: 19 });

  $(".emoticon").each(function () {
    var tl = new TimelineMax({});

    tl.to(this, 1, { x: 100, ease: Power0.easeIn }, "in")
      .from(this, 1, { scale: 0.5, opacity: 0.5, ease: Power4.easeIn }, "in")
      .to(
        this,
        1,
        { scale: 0.5, opacity: 0.5, ease: Power4.easeOut, delay: 1 },
        "out"
      )
      .to(this, 1, { x: 200, ease: Power0.easeOut, delay: 1 }, "out");

    mtl.add(tl).timeScale(3);
  });

  /*
   
   tl.staggerTo(this, 0.5, {
    rotation: 360,
    xPercent: "-50%",
    yPercent: "-50%",
    x: 850,
  })
    .to(emoticon_hungry, 3, { rotation: 360, x: 1050 })
        );*/

  /*
    .tl1 = new TimelineMax({ stagger: 2 });
  tl1
    .staggerTo(
      [emoticon_one, emoticon_two, emoticon_three],
      0.5,

      { x: 0, y: -210 },
      0.25
    )
    .staggerTo(
      [emoticon_one, emoticon_two, emoticon_three],
      0.5,
      { x: "+=20" },
      0.25,
      "+=3"
    )
    .staggerTo(
      [emoticon_one, emoticon_two, emoticon_three],
      0.5,
      { x: "+=50" },
      0.25,
      "+=3"
    )
    .staggerTo(
      [emoticon_one, emoticon_two, emoticon_three],
      0.5,
      { x: "+=100", y: "+=150", rotation: 360 },
      0.25,
      "+=0.2"
    );*/

  /*
tl.staggerTo ([f1_1, f1_2, f1_3], 0.5, {opacity: 1, left:"+=40px"}, 0.25 )
  .staggerTo ([f1_1, f1_2, f1_3], 0.5, {opacity: 0, left:"-=40px"}, 0.25 , "+=3" );





  gsap.to(emoticon_one, { x: 345, y: 50 });

  gsap.fromTo(
    emoticon,
    { x: 345, y: 400 },
    { y: 5, duration: 2, ease: "power3.out" }
  );
  gsap.to(emoticon, 2, { x: 370, delay: 2 });
  gsap.to(emoticon, 1, { x: 400, duration: 1 });
  gsap.to(emoticon, 0.5, { x: 485, y: 180, ease: "bounce", delay: 4.5 }); //quand elle tombe*/
};

/**/

console.clear();
// TweenMax.set("#demo", {xPercent:-50, yPercent:-50});
var paths = document.querySelectorAll("path");
var startX = 626;
var startY = 516;
var tl = new TimelineMax({ paused: true, delay: 16 });

for (i = 0; i < paths.length; i++) {
  var data = paths[i].getBBox();
  var nested = new TimelineLite();
  var durationTranslate = (Math.random() + 0.5) * 1;
  var cleaningDelay = 6 - durationTranslate;
  console.log(
    "{durationTranslate:" +
      durationTranslate +
      ", cleaningDelay: " +
      cleaningDelay +
      "}"
  );
  nested
    .from(paths[i], 2, { autoAlpha: 0 })
    .fromTo(
      paths[i],
      1.5,
      { scale: 0, transformOrigin: "50% 50%", ease: Power0.easeNone },
      { scale: 1.5, transformOrigin: "50% 50%", ease: Power0.easeNone },
      "-=2"
    )
    .fromTo(
      paths[i],
      6,
      { scale: 1.5, transformOrigin: "50% 50%", ease: Power0.easeNone },
      { scale: 0.5, transformOrigin: "50% 50%", ease: Power0.easeNone }
    )
    .from(
      paths[i],
      durationTranslate,
      {
        x: startX - data.x - data.width / 2,
        y: startY - data.y - data.height / 2,
        ease: Power4.easeOut,
      },
      "-=7"
    )
    .to(
      paths[i],
      2,
      { autoAlpha: 0, transformOrigin: "50% 50%", ease: Power0.easeNone },
      "-=3"
    );
  tl.add(nested, 0);
}

tl.play();

/**/

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
