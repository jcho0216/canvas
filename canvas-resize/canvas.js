let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");
c.fillStyle = "pink";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "grey";
c.fillRect(250, 300, 100, 100);
c.fillStyle = "blue";
c.fillRect(400, 100, 100, 100);

//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(800, 400);
c.strokeStyle = "red";
c.stroke();

//arc / circle
c.beginPath();
c.arc(500, 300, 50, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();

for (let i = 0; i < 1000; i++) {
let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 50, 0, Math.PI * 2, false);
  c.strokeStyle = "black";
  c.stroke();
}
