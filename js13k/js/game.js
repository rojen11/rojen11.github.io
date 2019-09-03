kontra.init();
kontra.initKeys();
let {
  keyPressed,
  Sprite,
  load,
  imageAssets,
  GameLoop,
  setImagePath,
  loadImage,
  SpriteSheet
} = kontra;

//sfx and music

let sfx = [
  { name: "portal", songData: [{ i: [0, 146, 128, 0, 0, 224, 128, 3, 0, 0, 37, 0, 81, 0, 0, 3, 0, 0, 1, 2, 124, 135, 0, 32, 0, 3, 0, 6], p: [27], c: [{ n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [147, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 151, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 154], f: [] }] }, { i: [0, 232, 142, 1, 0, 0, 164, 0, 1, 0, 29, 0, 57, 0, 0, 0, 0, 0, 0, 3, 85, 0, 1, 39, 76, 5, 0, 0], p: [15], c: [{ n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [135], f: [] }] },], rowLen: 5513, patternLen: 32, endPattern: 0, numChannels: 2 },
  { name: "laser", songData: [{ i: [1, 0, 135, 0, 1, 0, 128, 0, 0, 255, 0, 40, 16, 0, 0, 0, 255, 16, 1, 2, 57, 254, 85, 255, 88, 1, 0, 0], p: [1], c: [{ n: [147], f: [22, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 254] }] }, { i: [3, 0, 128, 0, 3, 0, 128, 0, 1, 255, 0, 0, 24, 0, 0, 3, 39, 3, 1, 3, 52, 115, 0, 72, 0, 2, 0, 0], p: [2], c: [{ n: [], f: [] }, { n: [147], f: [24, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 72] }] }, { i: [0, 255, 124, 1, 0, 255, 106, 0, 1, 0, 5, 7, 138, 0, 0, 0, 0, 0, 0, 1, 25, 0, 118, 83, 83, 5, 25, 1], p: [3], c: [{ n: [], f: [] }, { n: [], f: [] }, { n: [147, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 151, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 154], f: [3, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 124] }] },], rowLen: 5513, patternLen: 32, endPattern: 0, numChannels: 3 },
  { name: "jump", songData: [{ i: [3, 255, 128, 0, 0, 255, 147, 0, 0, 127, 2, 2, 23, 0, 0, 0, 0, 0, 1, 3, 94, 79, 0, 32, 0, 2, 0, 4], p: [1], c: [{ n: [147], f: [] }] },], rowLen: 5513, patternLen: 32, endPattern: 0, numChannels: 1 },
  { name: "gunshot", songData: [{ i: [3, 148, 157, 1, 1, 125, 128, 0, 1, 85, 4, 7, 43, 0, 0, 0, 0, 0, 1, 2, 177, 0, 2, 32, 0, 5, 0, 6], p: [1], c: [{ n: [147], f: [10, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 85] }] },], rowLen: 5513, patternLen: 32, endPattern: 0, numChannels: 1 }
];


let audiosrc = {
  jump: "",
  laser: "",
  gunshot: "",
  portal: ""
}

let audiodone = {
  jump: false,
  laser: false,
  gunshot: false,
  portal: false
}

function generateWave(song) {
  var done = false;
  let p = new CPlayer();
  p.init(song);
  setInterval(function () {
    if (done) {
      return;
    }

    done = p.generate() >= 1;

    if (done) {
      // Put the generated song in an Audio element.
      var wave = p.createWave();

      audiosrc[song.name] = URL.createObjectURL(new Blob([wave], { type: "audio/wav" }));
      audiodone[song.name] = true;
    }
  }, 0);
}

sfx.map(s => generateWave(s));

var jump = document.createElement("audio");
var laser = document.createElement("audio");
var gunshot = document.createElement("audio");
var portal = document.createElement("audio");

let audiomap = setInterval(() => {
  if (audiosrc.jump == "" || audiosrc.laser == "" || audiosrc.gunshot == "" || audiosrc.portal == "") {
    return;
  }

  jump.src = audiosrc.jump;
  laser.src = audiosrc.laser;
  gunshot.src = audiosrc.gunshot;
  portal.src = audiosrc.portal;

  gunshot.load();

  clearInterval(audiomap);
}, 0)


let sprites = []

//loading images
setImagePath("./assets");
load("platform.png", "walkcycle.png").then(function () {

  //Background & map
  let platform = Sprite({
    image: imageAssets["platform"],
    y: 464,
    type: "platform"
  });
  sprites.push(platform)

  let platform1 = [
    Sprite({
      image: imageAssets["platform"],
      y: 374,
      x: 80,
      type: "platform"
    }),
    Sprite({
      image: imageAssets["platform"],
      y: 278,
      x: -640,
      type: "platform"
    }),
    Sprite({
      image: imageAssets["platform"],
      y: 182,
      x: 144,
      type: "platform"
    }),
    Sprite({
      image: imageAssets["platform"],
      y: 86,
      x: -592,
      type: "platform"
    })

  ];

  sprites.push(...platform1);

  let platform2 = [
    Sprite({
      height: 11,
      width: 1,
      y: 378,
      x: 80,
      type: "platform"
    }),
    Sprite({
      height: 11,
      width: 1,
      y: 282,
      x: -640 + platform1[1].width,
      type: "platform"
    }),
    Sprite({
      height: 11,
      width: 1,
      y: 184,
      x: 144,
      type: "platform"
    }),
    Sprite({
      height: 11,
      width: 1,
      y: 89,
      x: -592 + platform1[3].width,
      type: "platform"
    })

  ]

  // portal
  let portalIn = Sprite({
    x: 10,
    y: 46,
    width: 30,
    height: 40,
    color: "#00264d",
    render: function () {
      this.draw();
      this.context.strokeStyle = "black";
      this.context.strokeRect(this.x, this.y, this.width, this.height);

    }
  })
  sprites.push(portalIn);

  let portalOut = Sprite({
    x: 814,
    y: 424,
    width: 30,
    height: 40,
    color: "#00264d",
    render: function () {
      this.draw();
      this.context.strokeStyle = "black";
      this.context.strokeRect(this.x, this.y, this.width, this.height);

    }
  })
  sprites.push(portalOut);

  //player animation
  let character = SpriteSheet({
    image: imageAssets["walkcycle"],
    frameWidth: 32,
    frameHeight: 31,
    animations: {
      walkRight: {
        frames: "0..7",
        frameRate: 14
      },
      walkLeft: {
        frames: "8..15",
        frameRate: 14
      },
      shootL: {
        frames: "17..17",
        frameRate: 1

      },
      shootR: {
        frames: "16..16",
        frameRate: 1

      }

    }
  });

  //Player
  let player = Sprite({
    x: 10,
    y: 400,
    animations: character.animations,
    onGround: false,
    type: "player",
  });

  sprites.push(player);

  //global variables;
  let p0 = platform1[0].y + platform1[0].height;
  let p1 = platform1[1].y + platform1[1].height;
  let p2 = platform1[2].y + platform1[2].height;
  let p3 = platform1[3].y + platform1[3].height;


  function collidesWithPlatForm(player) {
    let pos = player.y + player.height;

    //+10 is for player pixel correction
    return (
      !(pos >= platform.y) &&
      !(pos >= platform1[0].y && pos < p0 && player.x + player.width >= platform1[0].x + 10) &&
      !(pos >= platform1[1].y && pos < p1 && player.x <= platform1[1].x + platform1[1].width - 10) &&
      !(pos >= platform1[2].y && pos < p2 && player.x + player.width >= platform1[2].x + 10) &&
      !(pos >= platform1[3].y && pos < p3 && player.x <= platform1[3].x + platform1[3].width - 10)
    );
  }

  function headbump(player) {
    return (
      (player.y <= p0 && player.y > p0 - 5 && (player.x + player.width >= platform1[0].x + 10)) ||
      (player.y <= p1 && player.y > p1 - 5 && (player.x <= platform1[1].x + platform1[1].width - 10)) ||
      (player.y <= p2 && player.y > p2 - 5 && (player.x + player.width >= platform1[2].x + 10)) ||
      (player.y <= p3 && player.y > p3 - 5 && (player.x <= platform1[3].x + platform1[3].width - 10))

    )
  }

  function xplatfrom(player) {
    return (
      player.collidesWith(platform2[0]) || player.collidesWith(platform2[1]) || player.collidesWith(platform2[2]) || player.collidesWith(platform2[3])
    )
  }

  let g = 0.1;
  let facingleft = false;

  let shot = true;
  let t = 0;

  let loop = GameLoop({
    update: function () {
      t += 1 / 60
      if (keyPressed("space") && t > 0.25) {
        t = 0;
        gunshot.load();
        gunshot.play();
        // if (shot) {
        //   gunshot.load();
        // }
        // let promise = gunshot.play();
        // if (promise !== undefined) {
        //   promise.then(_ => {
        //     shot = !shot;
        //   }).catch(e => shot = true);
        // }
        if (facingleft) {
          player.playAnimation("shootL");
        } else {
          player.playAnimation("shootR");
        }

        let bullet = Sprite({
          type: "bullet",
          x: facingleft ? player.x : player.x + player.width,
          y: player.y + 10,
          dx: facingleft ? -4 : 4,
          width: 4,
          height: 2,
          ttl: 90,
          color: "white"
        })

        sprites.push(bullet);
        bullet.update();

      }
      if (keyPressed("d") || keyPressed("right")) {
        if (player.x < 809) {
          if (!xplatfrom(player)) {
            player.x += 2;
          }
          player.playAnimation("walkRight");
          facingleft = false;
        }
        if (player.onGround) {
          player.update();
        }
      } else if (keyPressed("a") || keyPressed("left")) {

        if (player.x > 0) {
          if (!xplatfrom(player)) {
            player.x -= 2;
          }
          player.playAnimation("walkLeft");
          facingleft = true;
        }
        if (player.onGround) {
          player.update();
        }
      }
      if ((keyPressed("w") || keyPressed("up")) && player.onGround) {

        jump.load();
        jump.play();
        player.dy -= 4.5;
        player.update();
      }

      if (player.y <= 0) {
        player.dy = g;
        player.update();
      }

      if (collidesWithPlatForm(player)) {
        player.dy += g;
        player.onGround = false;
        player.update();
      } else {
        player.onGround = true;
        player.dy = 0;
      }


      if (headbump(player)) {
        player.onGround = false;
        player.dy = g;
        player.update();
      }

      if (player.collidesWith(portalIn)) {
        player.x = portalOut.x,
          player.y = portalOut.y
      }

      sprites.map(s => {
        if (s.type == "bullet") {
          s.update();
        }
      })
      sprites = sprites.filter(sprite => sprite.isAlive());

    },

    render: function () {
      sprites.map(s => s.render());
    }
  });

  loop.start();
});
