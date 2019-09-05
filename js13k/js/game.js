
let {
  keyPressed,
  Sprite,
  load,
  imageAssets,
  GameLoop,
  setImagePath,
  loadImage,
  SpriteSheet,
  getCanvas, getContext, init, initKeys
} = kontra;

init();
initKeys();
let { canvas, context } = init();
canvas = getCanvas();
context = getContext();


//sfx and music

let sfx = [
  { name: "music", songData: [{ i: [0, 255, 107, 1, 0, 255, 92, 0, 1, 32, 4, 6, 35, 0, 0, 0, 0, 0, 0, 2, 36, 0, 9, 21, 0, 5, 0, 0], p: [27, 27], c: [{ n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [147, , , , , , , 147, , , 147, 147, , , 147, 147, 147, , , , , 147, , 147, , , 147, 147, , , 147, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 139], f: [, , , , , , , 24, , , 24, 24, , , 24, 24, , , , , , 24, , 24, , , 24, 24, , , 24, 24, , , , , , , , 47, , , 49, 51, , , 49, 49, , , , , , 47, , 49, , , 47, 41, , , 37, 36] }] }, { i: [3, 0, 128, 0, 3, 68, 128, 0, 1, 218, 4, 4, 40, 0, 0, 1, 0, 0, 1, 2, 67, 115, 124, 190, 0, 6, 39, 1], p: [27, 27], c: [{ n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [, , , , 147, , , , , , , , 147, , , , , , , , 147, , , , , , , , 147], f: [] }] }, { i: [0, 91, 128, 0, 0, 95, 128, 12, 0, 0, 12, 0, 72, 0, 0, 0, 0, 0, 0, 1, 34, 0, 17, 32, 83, 3, 130, 6], p: [27, 27], c: [{ n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [147, 151, 154, , , , , , , , , , , , , , 146, 149, 153], f: [, , , , , 21, 21, 21, 21, 23, , , 28, , , , , , , , , , , , , , , , , , , , , , , , , 67, 46, 44, 34, 17, , , 6] }] }, { i: [0, 255, 92, 1, 0, 255, 92, 0, 1, 0, 0, 7, 101, 0, 0, 0, 0, 0, 0, 2, 255, 0, 1, 8, 83, 5, 25, 1], p: [12, 12], c: [{ n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [147, , , , , , , 147, , , 151, 154, , , , , 146, , , , , 146, , 149, , , 146, 153], f: [13, , , , , , , 13, , , 13, 13, 24, 24, 24, 24, 24, , , , , 13, , 13, , , 13, 13, , , , , 154, , , , , , , 92, , , 92, 89, 12, 12, 12, 9, 8, , , , , 96, , 99, , , 101, 101] }] }, { i: [0, 0, 128, 0, 0, 0, 128, 0, 0, 72, 0, 1, 56, 0, 0, 0, 0, 0, 0, 1, 193, 171, 0, 4, 39, 3, 0, 3], p: [27, 27], c: [{ n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [, , 147, , , , , , , , 147, , , , , , , , 147, , , , , , , , 147], f: [] }] }, { i: [1, 192, 128, 0, 1, 191, 116, 9, 0, 0, 6, 22, 34, 0, 0, 0, 0, 0, 1, 1, 0, 167, 0, 28, 77, 6, 17, 6], p: [23, 24], c: [{ n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [147, , , 151, , , 154, , , 149, , , 156, , 158, , 146, , , 153, , , 149, , , , 148, , 142, , 144], f: [21, , , , , , , , , , , , , , , 27, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 17] }, { n: [147, , , 151, , , 154, , , , 149, , 156, 157, 158, , 146, 149, 151, 152, 153, , , , 151, 153, 154, 156, 158], f: [] }] }, { i: [0, 31, 131, 1, 0, 83, 128, 0, 1, 210, 4, 7, 41, 0, 0, 0, 0, 0, 1, 2, 255, 0, 12, 17, 61, 5, 0, 0], p: [, 27], c: [{ n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 146, 139, 135], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 147, , , 147, , , 147, , , 147, , 147, 154, 144, 139, 135], f: [] }] },], rowLen: 5513, patternLen: 32, endPattern: 1, numChannels: 7 },
  { name: "portal", songData: [{ i: [0, 146, 128, 0, 0, 224, 128, 3, 0, 0, 37, 0, 81, 0, 0, 3, 0, 0, 1, 2, 124, 135, 0, 32, 0, 3, 0, 6], p: [27], c: [{ n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [147, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 151, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 154], f: [] }] }, { i: [0, 232, 142, 1, 0, 0, 164, 0, 1, 0, 29, 0, 57, 0, 0, 0, 0, 0, 0, 3, 85, 0, 1, 39, 76, 5, 0, 0], p: [15], c: [{ n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [], f: [] }, { n: [135], f: [] }] },], rowLen: 5513, patternLen: 32, endPattern: 0, numChannels: 2 },
  { name: "laser", songData: [{ i: [1, 0, 135, 0, 1, 0, 128, 0, 0, 255, 0, 40, 16, 0, 0, 0, 255, 16, 1, 2, 57, 254, 85, 255, 88, 1, 0, 0], p: [1], c: [{ n: [147], f: [22, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 254] }] }, { i: [3, 0, 128, 0, 3, 0, 128, 0, 1, 255, 0, 0, 24, 0, 0, 3, 39, 3, 1, 3, 52, 115, 0, 72, 0, 2, 0, 0], p: [2], c: [{ n: [], f: [] }, { n: [147], f: [24, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 72] }] }, { i: [0, 255, 124, 1, 0, 255, 106, 0, 1, 0, 5, 7, 138, 0, 0, 0, 0, 0, 0, 1, 25, 0, 118, 83, 83, 5, 25, 1], p: [3], c: [{ n: [], f: [] }, { n: [], f: [] }, { n: [147, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 151, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 154], f: [3, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 124] }] },], rowLen: 5513, patternLen: 32, endPattern: 0, numChannels: 3 },
  { name: "jump", songData: [{ i: [3, 255, 128, 0, 0, 255, 147, 0, 0, 127, 2, 2, 23, 0, 0, 0, 0, 0, 1, 3, 94, 79, 0, 32, 0, 2, 0, 4], p: [1], c: [{ n: [147], f: [] }] },], rowLen: 5513, patternLen: 32, endPattern: 0, numChannels: 1 },
  { name: "gunshot", songData: [{ i: [3, 148, 157, 1, 1, 125, 128, 0, 1, 85, 4, 7, 43, 0, 0, 0, 0, 0, 1, 2, 177, 0, 2, 32, 0, 5, 0, 6], p: [1], c: [{ n: [147], f: [10, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 85] }] },], rowLen: 5513, patternLen: 32, endPattern: 0, numChannels: 1 }
];


let audiosrc = {
  music: "",
  jump: "",
  laser: "",
  gunshot: "",
  portal: ""
}

let audiodone = {
  music: false,
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

var music = document.createElement("audio");
var jump = document.createElement("audio");
var laser = document.createElement("audio");
var gunshot = document.createElement("audio");
var portal = document.createElement("audio");

let audiomap = setInterval(() => {
  if (audiosrc.music == "" || audiosrc.jump == "" || audiosrc.laser == "" || audiosrc.gunshot == "" || audiosrc.portal == "") {
    return;
  }

  music.src = audiosrc.music;
  jump.src = audiosrc.jump;
  laser.src = audiosrc.laser;
  gunshot.src = audiosrc.gunshot;
  portal.src = audiosrc.portal;

  gunshot.load();

  clearInterval(audiomap);
}, 0)

music.volume = 0.1;
music.loop = true;
music.load();
music.play();

let sprites = []

//loading images
setImagePath("./assets");
load("platform.png", "walkcycle.png", "ghost.png").then(function () {

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
    color: "blue",
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
    color: "orange",
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

  var y = [340, 244, 148, 52]
  var level = 1;

  function addGhost() {
    let counter = 0;
    y.map(y1 => {
      counter++;
      for (let i = 1; i <= Math.floor(Math.random() * level) + 1; i++) {
        let x = 10;
        switch (counter) {
          case 1:
            x = Math.floor(Math.random() * 854) + 80;
            break;
          case 2:
            x = Math.floor(Math.random() * (platform1[1].x + platform1[1].width));
            break;
          case 3:
            x = Math.floor(Math.random() * 854) + 144;
            break;
          case 4:
            x = Math.floor(Math.random() * (platform1[3].x + platform1[3].width));
            break;
          default:
            break;
        }
        let ghost = Sprite({
          type: "ghost",
          x: x,
          y: y1,
          height: 32,
          width: 21,
          dx: (Math.random() * 5) + 1,
          image: imageAssets["ghost"]
        });
        sprites.push(ghost);
      }
    })
  }

  addGhost();

  let g = 0.1;
  let facingleft = false;

  let shot = true;
  let t = 0;

  let loop = GameLoop({
    update: function () {
      t += 1 / 60

      //keyboard input
      if (keyPressed("space") && t > 0.75) {
        t = 0;
        gunshot.load();
        gunshot.play();
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
          ttl: 30,
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

      //ghost events
      sprites.map(s => {
        if (s.type == "ghost") {
          if (s.y == 340) {
            if (s.x < 82) {
              s.dx = Math.abs(s.dx);
            } else if (s.x > 845) {
              s.dx = -s.dx;
            }
          } else if (s.y == 244) {
            if (s.x < 2) {
              s.dx = Math.abs(s.dx);
            } else if (s.x > (platform1[1].x + platform1[1].width - s.width)) {
              s.dx = -s.dx;
            }
          } else if (s.y == 148) {
            if (s.x < 144) {
              s.dx = Math.abs(s.dx);
            } else if (s.x > 845) {
              s.dx = -s.dx;
            }
          } else if (s.y == 52) {
            if (s.x < 2) {
              s.dx = Math.abs(s.dx);
            } else if (s.x > (platform1[3].x + platform1[3].width - s.width)) {
              s.dx = -s.dx;
            }
          }

          sprites.map(sprite => {
            if (sprite.type == "bullet") {
              if (s.collidesWith(sprite)) {
                s.ttl = 0;
                sprite.ttl = 0;
              }
            }
            if (sprite.type == "player") {
              if (s.collidesWith(sprite)) {
                player.ttl = 0;
              }
            }
          })
        }
      })



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
        player.x = portalOut.x;
        player.y = portalOut.y;
        portal.load();
        portal.play();
        level++;
        addGhost();

      }

      sprites.map(s => {
        if (s.type == "bullet" || s.type == "ghost") {
          s.update();
        }
      })
      sprites = sprites.filter(sprite => sprite.isAlive());

    },

    render: function () {
      sprites.map(s => s.render());
      context.font = '20px Helvetica, Verdana, san-serif';
      context.fillStyle = '#fff';
      context.fillText("Level: " + level, 10, 20);

      if (player.ttl == 0) {

        context.font = '40px Helvetica, Verdana, san-serif';
        context.fillStyle = '#efe343';
        context.fillText("GAME OVER", canvas.width / 3, canvas.height / 2);
        loop.stop();
      }
    }
  });

  loop.start();
});
