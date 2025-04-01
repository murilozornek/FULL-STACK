
function quadrado(l1, fillcolor, strokecolor,p1,p2,dim1,dim2){

    ctx.beginPath();
    ctx.lineWidth = l1; 
    ctx.fillStyle = fillcolor ;
    ctx.strokeStyle = strokecolor;
    ctx.fillRect(p1, p2, dim1, dim2);
    ctx.strokeRect(p1,p2,dim1,dim2);
    ctx.closePath();
}
function linha(l1,fillcolor,strokecolor,inicioX,inicioY,fimX,fimY ){
    
    ctx.beginPath();
    ctx.lineWidth = l1;
    ctx.fillStyle = fillcolor;
    ctx.strokeStyle = strokecolor;
    ctx.moveTo(inicioX,inicioY);
    ctx.lineTo(fimX,fimY);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
function arco( l1, fillcolor,strokecolor, p1,p2,dim, Inicio, Fim){

    ctx.beginPath();
    ctx.lineWidth = l1; 
    ctx.fillStyle = fillcolor;
    ctx.strokeStyle = strokecolor;
    ctx.arc(p1,p2,dim,Inicio*Math.PI,Fim*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function texto(l1,fillcolor,strokecolor,tam_font,position, text, p1,p2){
    
    ctx.beginPath();
    ctx.lineWidth = l1;
    ctx.fillStyle = fillcolor;
    ctx.strokeStyle = strokecolor;
    ctx.font = tam_font
    ctx.textAlign = position;
    ctx.fillText(text,p1,p2);
    ctx.strokeText(text,p1,p2)
    ctx.closePath();

}

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');

quadrado(0,'blue',0,0,0,50,50)
quadrado(0,'red',0,250,0,50,50)
linha(0,0,'blue',0,0,150,150)
linha(0,0,'red',300,0,150,150)
quadrado(0,'aquamarine','transparent',0,120,50,60)
quadrado(0,'aquamarine','transparent',250,120,40,50)
linha(0,0,'green',0,150,300,150)
