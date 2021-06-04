let canvas = document.querySelector("canvas");

let c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colorArray = ["#202140", "#75BFB8", "#F2EFDF", "#F2A74B", "#D94A3D"];

function Circle(x, y, veloX, veloY, radius, color) {
  this.x = x;
  this.y = y;
  this.veloX = veloX;
  this.veloY = veloY;
  this.radius = radius;
  this.color = color;

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillRect = `${this.color}`;
    c.fill();
  };

  this.update = () => {
    if (this.y + this.radius + this.veloY > canvas.height ) {
        // this.y = canvas.height - radius;
      this.veloY = -this.veloY * 0.8;
    } else {
      this.veloY += 1;
    }

    if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
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
    let radius = Math.random() * 20;
    let veloX = (Math.random() - 0.5) * 6;
    let veloY = 10;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * (window.innerHeight) - radius;
    let color = "black";
    circleArray.push(new Circle(x, y, veloX, veloY, radius, color));
  }

  console.log(circleArray);
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
