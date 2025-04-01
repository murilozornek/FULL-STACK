let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//exemplo de quadrado
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,70,70);
ctx.strokeRect(70,70,50,50);
ctx.strokeRect(90,90,50,50);
ctx.closePath();


//  linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);
ctx.lineTo(120,120);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(250,250,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.strokeText("Olá",200,350)
ctx.fillText("Olá",195,350);
ctx.closePath();



let canvas2 = document.getElementById('canvas2')
let ctx2 = canvas2.getContext('2d')

ctx2.beginPath();
ctx2.fillStyle = 'green';
ctx2.fillRect(350,350,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.fillRect(0,0,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'yellow';
ctx2.fillRect(0,350,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'blue';
ctx2.fillRect(350,0,50,50);
ctx2.closePath();


ctx2.beginPath();
ctx2.strokeStyle = 'red';
ctx2.moveTo(0,0);
ctx2.lineTo(400,400);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = 'blue';
ctx2.moveTo(400,0);
ctx2.lineTo(0,400);
ctx2.stroke();
ctx2.closePath();


ctx2.beginPath();
ctx2.strokeStyle = 'green';
ctx2.moveTo(0,200);
ctx2.lineTo(400,200);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = 'green';
ctx2.arc(200,200,50,0*Math.PI,1*Math.PI);
ctx2.stroke();
ctx2.closePath();


ctx2.beginPath();
ctx2.fillStyle= 'yellow';
ctx2.strokeStyle ='grenn';
ctx2.arc(75,125,20,0*Math.PI,2*Math.PI)
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle= 'yellow';
ctx2.strokeStyle ='grenn';
ctx2.arc(325,125,20,0*Math.PI,2*Math.PI)
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'black';
ctx2.font= '25px Arial';
ctx2.textAlign = 'center';
ctx2.fillText(" Desenvolvimento Web",200,75);
ctx2.closePath();




