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

setImagePath("../assets");
load("platform.png", "player.png", "character.png", "walkcycle.png").then(
  function() {
    let platform = Sprite({
      image: imageAssets["platform"],
      y: 464
    });

    let platform1 = [
      Sprite({
        image: imageAssets["platform"],
        y: 374,
        x: 80
      }),
      Sprite({
        image: imageAssets["platform"],
        y: 278,
        x: -640
      }),
      Sprite({
        image: imageAssets["platform"],
        y: 182,
        x: 144
      }),
      Sprite({
        image: imageAssets["platform"],
        y: 86,
        x: -592
      })
    ];

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
        }
      }
    });

    let player = Sprite({
      x: 10,
      y: 200,
      animations: character.animations
    });

    let loop = GameLoop({
      update: function() {
        if (keyPressed("d")) {
          if (player.x < 809) {
            player.x += 2;
            player.playAnimation("walkRight");
          }

          player.update();
        } else if (keyPressed("a")) {
          if (player.x > 0) {
            player.x -= 2;
            player.playAnimation("walkLeft");
          }
          player.update();
        }
        if (
          !player.collidesWith(platform) &&
          !player.collidesWith(platform1[0]) &&
          !player.collidesWith(platform1[1]) &&
          !player.collidesWith(platform1[2]) &&
          !player.collidesWith(platform1[3])
        ) {
          player.y += 1;
          player.update();
        }
      },

      render: function() {
        platform.render();
        platform1.map(p => p.render());
        player.render();
      }
    });

    loop.start();
  }
);
