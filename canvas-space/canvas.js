let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colorArray = ["#202140", "#75BFB8", "#F2EFDF", "#F2A74B", "#D94A3D"];

let mouse = {
  x: undefined,
  y: undefined,
};

let maxRadius = 65;

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

function Circle(x, y, veloX, veloY, radius) {
  this.x = x;
  this.y = y;
  this.veloX = veloX;
  this.veloY = veloY;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.minRadius = radius;

  this.draw = function () {
    c.beginPath();
    c.fillStyle = `${this.color}`;
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.veloX = -this.veloX;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.veloY = -this.veloY;
    }
    this.x += this.veloX;
    this.y += this.veloY;

    //interactivity
    if (
      mouse.x - this.x < 60 &&
      mouse.x - this.x > -60 &&
      mouse.y - this.y < 60 &&
      mouse.y - this.y > -60
    ) {
      if (this.radius < maxRadius) {
        this.radius += 3;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
    this.draw();
  };
}

let circleArray = [];
function init() {
  circleArray = [];

  for (let i = 0; i < 2000; i++) {
    let radius = Math.random() * 5 + 1;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;

    let veloX = (Math.random() - 0.5) * 5;
    let veloY = (Math.random() - 0.5) * 5;
    circleArray.push(new Circle(x, y, veloX, veloY, radius));
  }
}
init();

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
