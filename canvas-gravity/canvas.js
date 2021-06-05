let canvas = document.querySelector("canvas");

let c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colorArray = ["#202140", "#75BFB8", "#F2EFDF", "#F2A74B", "#D94A3D"];

function Circle(x, y, veloX, veloY, radius) {
  this.x = x;
  this.y = y;
  this.veloX = veloX;
  this.veloY = veloY;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = () => {
    c.beginPath();
    c.fillStyle = `${this.color}`;
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
  };

  this.update = () => {
    if (this.y + this.radius + this.veloY > canvas.height) {
      this.veloY = -this.veloY * 0.8;
    } else {
      this.veloY += 1;
    }

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.veloX = -this.veloX;
    }

    this.y += this.veloY;
    this.x += this.veloX;

    this.draw();
  };
}

window.addEventListener("click", init);
window.addEventListener("resize", init);

let circleArray = [];

function init() {
  circleArray = [];
  for (let i = 0; i < 100; i++) {
    let radius = Math.random() * 30;
    let veloX = (Math.random() - 0.5) * 10;
    let veloY = 12;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * window.innerHeight - radius;
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
