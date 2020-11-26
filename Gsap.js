// identification de la grue et de l'émoticon
const conveyor = document.getElementById("conveyor");
const arm = document.getElementById("arm");

//evenement au clique pour lancer animations et musiques apres rechargement de la page
function reloadP(type) {
  sessionStorage.setItem("type", type);
  document.location.reload();
}

window.onload = function () {
  var type = sessionStorage.getItem("type");
  if (type == "content") {
    start_emo_content();
    emoHappySong();
  } else if (type == "hungry") {
    start_emo_hungry();
    emoHungrySong();
  } else {
    start_emo_group();
    emoGroupSong();
  }
};

basics_animations = () => {
  ///Vol aléatoire de Bowser

  var width = $(".machinearticule").width();
  var height = $(".machinearticule").height();
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

  ///machine articulée
  gsap.to(conveyor, 2, { marginLeft: 140, delay: 2 });
  gsap.to(arm, 2, { marginLeft: 140, delay: 2 });
};
/////////
// 3 roues

var R = 290,
  dur = 7,
  totalCount = 3,
  Ease = Linear.easeNone;

var tl = gsap.timeline({ opacity: 1 });
tl.to(
  ".whell_one",
  dur,
  {
    motionPath: {
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
      mmotionPath: {
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
      motionPath: {
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

//
start_emo_content = () => {
  basics_animations();

  /*audio controller*/
  emoHappySong = () => {
    document.getElementById("audio_controller").style.visibility = "visible";
    var music = document.getElementById("music");
    music.src = "./songs/overworld_theme_super_mario_3d_land.mp3";
    music.type = "audio/mpeg";
    music.autoplay = "true";
    var play_music_button = document.getElementById("play-music-button");

    function playAudio() {
      if (music.paused) {
        music.play();
        play_music_button.className = "pause";
      } else {
        music.pause();
        play_music_button.className = "play";
      }
      music.addEventListener("ended", function () {
        play_music_button.className = "play";
      });
    }
    play_music_button.addEventListener("click", playAudio);
  };
  //cache de l'emoticon_hungry sur le coté
  document.getElementById("emoticon_hungry").style.visibility = "hidden";
  document.getElementById("emoticon_happy").style.visibility = "visible";
  /*
  const emoticon = document.createElement("img");
  emoticon.src = "./images/emoticon1" + ".png";
  emoticon.setAttribute("id", "emoticon");
  machinearticule.append(emoticon);
*/
  gsap.to("#emoticon_happy", { x: 345, y: 50 });

  gsap.fromTo(
    "#emoticon_happy",
    { x: 345, y: 400 },
    { y: 5, duration: 2, ease: "power3.out" }
  );
  gsap.to("#emoticon_happy", 2, { x: 485, y: 20, delay: 2 });
  gsap.to("#emoticon_happy", 1, { x: 485, y: 180, ease: "bounce", delay: 5 }); //quand elle tombe

  gsap.to("#emoticon_happy", 1, { x: 565, delay: 7 });

  gsap.to("#emoticon_happy", {
    duration: 2.5,
    x: 580,
    delay: 9,
    ease: "elastic.out(1, 0.3)",
  });
  gsap.to("#emoticon_happy", {
    duration: 0.5,
    x: 485,
    delay: 10,
  });
  gsap.to("#emoticon_happy", {
    ////// Emoticon met coup de tete
    duration: 0.3,
    x: 600,
    delay: 10.5,
  });
  /////////////

  ///////////

  tl = gsap.timeline();
  tl.to("#mushroom", 1, {
    transformOrigin: "center",
    rotation: 360,
    x: "+=800",
    y: "-=150",
    delay: 10.6,
    ease: Linear.easeNone,
    scale: 1.2,
  });

  gsap.to("#mushroom", 0.1, { visibility: "hidden", delay: 11.6 });

  /////////////
  gsap.to("#emoticon_happy", {
    ////// tete s'approche du mur
    duration: 1.5,
    x: 750,
    delay: 11.8,
  });

  gsap.to("#emoticon_happy", {
    duration: 0.5,
    delay: 13.8,
    rotation: 1080,
    ease: Linear.easeNone,
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
  tl.to("#emoticon_happy", 0.5, { y: 0 })
    .to("#emoticon_happy", 1.25, { y: 5, ease: Power1.easeInOut })
    .to("#emoticon_happy", 1.75, { x: "+=344" }, "-=1.75")
    .to("#emoticon_happy", 1.5, { y: 90 });
  ///////////////////
};
start_emo_hungry = () => {
  basics_animations();

  emoHungrySong = () => {
    // controlleurs audio
    document.getElementById("audio_controller").style.visibility = "visible";
    var music = document.getElementById("music");
    music.src = "./songs/winning.mp3";
    music.type = "audio/mpeg";
    music.autoplay = "true";
    var play_music_button = document.getElementById("play-music-button");

    function playAudio() {
      if (music.paused) {
        music.play();
        play_music_button.className = "pause";
      } else {
        music.pause();
        play_music_button.className = "play";
      }
      music.addEventListener("ended", function () {
        play_music_button.className = "play";
      });
    }
    play_music_button.addEventListener("click", playAudio);
  };
  const emoticon_hungry = document.getElementById("emoticon_hungry");
  emoticon_hungry.style.visibility = "visible";

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

  tl = gsap.timeline();
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

  gsap.to(emoticon_hungry, 2, {
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
  /*audio controller*/

  emoGroupSong = () => {
    document.getElementById("audio_controller").style.visibility = "visible";
    var music = document.getElementById("music");
    music.src = "./songs/metallic-mario-super-mario-64.mp3";
    music.type = "audio/mpeg";
    music.autoplay = "true";
    var play_music_button = document.getElementById("play-music-button");

    function playAudio() {
      if (music.paused) {
        music.play();
        play_music_button.className = "pause";
      } else {
        music.pause();
        play_music_button.className = "play";
      }
      music.addEventListener("ended", function () {
        play_music_button.className = "play";
      });
    }
    play_music_button.addEventListener("click", playAudio);
  };

  basics_animations();

  document.getElementById("g1").style.visibility = "visible";
  document.getElementById("g2").style.visibility = "visible";
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
  tl.fade(".emoticon_one")
    .fade(".emoticon_two", "-=1")
    .to(".emoticon_one", { x: "+=50" })
    .fade(".emoticon_three", "-=1.5")
    .to(".emoticon_two", { x: "+=25" })
    .add("start")

    .to(
      ".emoticon_one",
      {
        x: "+=10",

        ease: "bounce",
      },
      "-=1"
    )
    .to(
      ".emoticon_two",
      {
        x: "+=40",

        ease: "bounce",
      },
      "-=1" //test du saut ici
    )
    .to(".emoticon_three", {
      x: "+=20",

      ease: "bounce",
    })
    .to(
      ".emoticon_one",
      {
        x: "-=50",
        scale: 1,
        ease: "bounce",
      },
      "-=1"
    )
    .to(
      ".emoticon_two",
      {
        x: "-=35",
        scale: 1,
        ease: "bounce",
      },
      "-=1"
    )
    .to(
      ".emoticon_three",
      {
        x: "-=25",
        scale: 1,
        ease: "bounce",
      },
      "-=1"
    )
    .to(
      ".emoticon_one",
      {
        x: "+=60",
        ease: "bounce",
      },
      "start"
    )
    .to(
      ".emoticon_two",
      {
        x: "+=45",
        ease: "bounce",
      },
      "start"
    )
    .to(
      ".emoticon_three",
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
    }) //////////  roulade collective
    .to([".emoticon_one", ".emoticon_two", ".emoticon_three"], 2.2, {
      rotation: 540,
      ease: Linear.easeNone,
      x: "+=200",
    }) ///test
    .to([".emoticon_one", ".emoticon_two", ".emoticon_three"], {
      duration: 0.5,
      rotation: 1080,
      ease: Linear.easeNone,
      x: "+=240",
    })
    .to([".emoticon_one", ".emoticon_two", ".emoticon_three"], {
      duration: 0.5,
      rotation: 1080,
      ease: Linear.easeNone,
      x: "+=332",
      y: "-=180",
    })
    .to([".emoticon_one", ".emoticon_two", ".emoticon_three"], {
      delay: 0.5,
      duration: 0.5,

      y: "+=100",
    });

  // TweenMax.set("#demo", {xPercent:-50, yPercent:-50});
  var paths = document.getElementsByClassName("smog");
  var startX = 626;
  var startY = 516;
  var tl5 = gsap.timeline({ paused: true, delay: 16 });

  for (i = 0; i < paths.length; i++) {
    var data = paths[i].getBBox();
    var nested = gsap.timeline();
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
    tl5.add(nested, 0);
  }

  tl5.play();
};
