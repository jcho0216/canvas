let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

function Circle(x, y, veloX, veloY, radius, color) {
  this.x = x;
  this.y = y;
  this.veloX = veloX;
  this.veloY = veloY;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    c.beginPath();
    c.fillStyle = `${color}`;
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = `${color}`;
    c.stroke();
    // c.fill()
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

    this.draw();
  };
}

let circleArray = [];

for (let i = 0; i < 400; i++) {
  let radius = Math.random() * 10;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;

  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  let veloX = (Math.random() - 0.5) * 10;
  let veloY = Math.random() - 0.5;
  circleArray.push(new Circle(x, y, veloX, veloY, radius, color));
}

console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
