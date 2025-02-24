import platform from "../img/platform.png";
import hills from "../img/hills.png";
import background from "../img/background.png";
import platformSmallTall from "../img/platformSmallTall.png";

import spriteRunLeft from "../img/spriteRunLeft.png";
import spriteRunRight from "../img/spriteRunRight.png";
import spriteStandLeft from "../img/spriteStandLeft.png";
import spriteStandRight from "../img/spriteStandRight.png";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.5;
class Player {
  constructor() {
    this.speed = 10;
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 66;
    this.height = 150;

    this.image = createImage(spriteStandRight);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(spriteStandRight),
        left: createImage(spriteStandLeft),
        cropWidth: 177,
        width: 66,
      },
      run: {
        right: createImage(spriteRunRight),
        left: createImage(spriteRunLeft),
        cropWidth: 341,
        width: 127.875,
      },
    };

    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
    this.currentWidth = this.sprites.stand.width;
  }

  draw() {
    c.drawImage(
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth,
      400,
      this.position.x,
      this.position.y,
      this.currentWidth,
      this.height
    );
  }

  update() {
    this.frames++;
    if (
      this.frames > 59 &&
      (this.currentSprite === this.sprites.stand.right ||
        this.currentSprite === this.sprites.stand.left)
    ) {
      this.frames = 0;
    } else if (
      this.frames > 29 &&
      (this.currentSprite === this.sprites.run.right ||
        this.currentSprite === this.sprites.run.left)
    ) {
      this.frames = 0;
    }
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    }
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x: x,
      y: y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x: x,
      y: y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

function createImage(path) {
  const image = new Image();
  image.src = path;
  return image;
}

let platformImage = createImage(platform);

let player = new Player();
let platforms = [];
let genericObjects = [];

let lastKey;
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0;

function init() {
  platformImage = createImage(platform);

  player = new Player();
  platforms = [
    new Platform({
      x: createImage(platformSmallTall).width * 2,
      y: 270,
      image: createImage(platformSmallTall),
    }),
    new Platform({ x: 0, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width, y: 470, image: platformImage }),
    new Platform({
      x: platformImage.width * 2 + 100,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 3 + 300,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 4 + 500,
      y: 470,
      image: platformImage,
    }),
  ];
  genericObjects = [
    new GenericObject({ x: 0, y: 0, image: createImage(background) }),
    new GenericObject({ x: 0, y: 0, image: createImage(hills) }),
  ];

  scrollOffset = 0;
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });

  platforms.forEach((platform) => {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (
    (keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });

      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;

      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });
      genericObjects.forEach((genericObject) => {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  }

  // platform collisions detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  // sprite switching
  if (
    keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== player.sprites.run.right
  ) {
    console.log("right pressed");
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.currentWidth = player.sprites.run.width;
  } else if (
    keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== player.sprites.run.left
  ) {
    console.log("left pressed");
    player.frames = 1;
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.currentWidth = player.sprites.run.width;
  } else if (
    !keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== player.sprites.stand.left
  ) {
    console.log("left not pressed");
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.currentWidth = player.sprites.stand.width;
  } else if (
    !keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== player.sprites.stand.right
  ) {
    console.log("right not pressed");
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.currentWidth = player.sprites.stand.width;
  }

  // experimental platform
  platforms.forEach((platform) => {
    if (
      player.velocity.y < 0 && // Player is moving upwards
      player.position.y <= platform.position.y + platform.height && // Player's top is below or at the platform's bottom
      player.position.y + player.height >= platform.position.y &&
      player.position.x + player.width >= platform.position.x && // Player's right is beyond the platform's left
      player.position.x <= platform.position.x + platform.width // Player's left is before the platform's right
    ) {
      console.log("Hit the bottom of the platform");
      player.velocity.y = 5; // Push the player down
    }
  });

  // win condition
  if (scrollOffset > platformImage.width * 4 + 250) {
    console.log("End of game");
  }

  // lose condition
  if (player.position.y > canvas.height) {
    console.log("You lose");
    init();
  }
}

init();
animate();

window.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("keydown left");
      keys.left.pressed = true;
      lastKey = "left";
      break;
    case 87:
      console.log("up");
      player.velocity.y -= 15;
      break;
    case 68:
      console.log("keydown right");
      keys.right.pressed = true;
      lastKey = "right";

      break;
    case 83:
      console.log("down");
      break;
    default:
      break;
  }
});

window.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      // player.currentSprite = player.sprites.stand.left;
      // player.currentCropWidth = player.sprites.stand.cropWidth;
      // player.currentWidth = player.sprites.stand.width;
      break;
    // case 87:
    //   console.log("up");
    //   player.velocity.y = -10;
    //   break;
    case 68:
      console.log("keyup right");
      keys.right.pressed = false;
      // player.currentSprite = player.sprites.stand.right;
      // player.currentCropWidth = player.sprites.stand.cropWidth;
      // player.currentWidth = player.sprites.stand.width;
      break;
    case 83:
      console.log("keyup down");
      break;
    default:
      break;
  }
});
