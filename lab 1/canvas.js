
function quadrado(ctx,l1, fillcolor, strokecolor,p1,p2,dim1,dim2){

    ctx.beginPath();
    ctx.lineWidth = l1; 
    ctx.fillStyle = fillcolor ;
    ctx.strokeStyle = strokecolor;
    ctx.fillRect(p1, p2, dim1, dim2);
    ctx.strokeRect(p1,p2,dim1,dim2);
    ctx.closePath();
}
function linha(ctx,l1,fillcolor,strokecolor,inicioX,inicioY,fimX,fimY ){
    
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
function arco( ctx,l1, fillcolor,strokecolor, p1,p2,dim, Inicio, Fim){

    ctx.beginPath();
    ctx.lineWidth = l1; 
    ctx.fillStyle = fillcolor;
    ctx.strokeStyle = strokecolor;
    ctx.arc(p1,p2,dim,Inicio*Math.PI,Fim*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function texto(ctx,l1,fillcolor,strokecolor,tam_font,position, text, p1,p2){
    
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

function triangulo(ctx, l1, fillcolor, strokecolor, x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.lineWidth = l1;
    ctx.fillStyle = fillcolor;
    ctx.strokeStyle = strokecolor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath(); 
    ctx.fill();    
    ctx.stroke();    
}


let canvas1 = document.getElementById('canvas')
let ctx1 = canvas1.getContext('2d');

quadrado(ctx1,0,'blue',0,0,0,50,50)
quadrado(ctx1,0,'red',0,250,0,50,50)
linha(ctx1,0,0,'blue',0,0,150,150)
linha(ctx1,0,0,'red',300,0,150,150)
quadrado(ctx1,0,'aqua','transparent',0,120,30,60)
quadrado(ctx1,0,'aqua','transparent',275,135,30,30)
linha(ctx1,0,0,'green',0,150,300,150)
linha(ctx1,0,0,'black',150,150,150,300)
arco(ctx1,0,'transparent','green', 150,150,50,1,2)
arco(ctx1,1,'aqua','blue',150,118,13,0,2)
quadrado(ctx1,0,'red','transparent',119,151,30,30)
quadrado(ctx1,0,'yellow','transparent',0,250,30,70 )
quadrado(ctx1,0,'yellow','transparent', 25,275,30,60)
quadrado(ctx1,0,'black','transparent',270,250,70,70 )
quadrado(ctx1,0,'black','transparent',245,275,30,60)
arco(ctx1,1,'aqua','green',150,300,35,1,2 )
arco(ctx1,1,'yellow','green',80,210,13,0,2)
arco(ctx1,1,'yellow','green',220,210,13,0,2)
arco(ctx1,0,'transparent','green',150,300,85,1,1.5)
arco(ctx1,0,'transparent','green',150,300,60,1.5,2)
texto(ctx1,0,'black','transparent','20px Arial','center',"Canvas",150,50)
arco(ctx1,0,'transparent','green',160,150,60,1.71,2)
arco(ctx1,0,'transparent','green',140,150,60,1,1.29)
quadrado(ctx1,2,'transparent','black',0,0,300,300)


let canvas2 = document.getElementById('canvas2')
let ctx2 = canvas2.getContext('2d');

quadrado(ctx2,0,'aquamarine','transparent',0,0,300,300)
quadrado(ctx2,0,'gray','transparent',0,235,300,150)
quadrado(ctx2,0,'cornflowerblue','transparent',0,240,40,75)
arco(ctx2,0,'cornflowerblue','transparent',0,240,40,1,2)
quadrado(ctx2,0,'cornflowerblue','transparent',40,265,80,50)
arco(ctx2,0,'cornflowerblue','transparent',120,300,35,1.,2)
quadrado(ctx2,0,'saddlebrown','transparent',40,195,18,40)
arco(ctx2,0,'green','transparent',50,180,24,0,2)
quadrado(ctx2,0,'saddlebrown','transparent',260,230,14,40)
arco(ctx2,0,'green','transparent',268,220,23,0,2)

quadrado(ctx2,0,'saddlebrown','transparent',110,155,75,80)
triangulo(ctx2,0,'salmon','transparent',147, 120, 110, 155, 185, 155)


arco(ctx2,0,'yellow','transparent', 225,80,35,0,2)
quadrado(ctx2,0,'deepskyblue','transparent',115,170,24,24)
quadrado(ctx2,0,'deepskyblue','transparent',155,170,24,24)
quadrado(ctx2,0,'rgb(92, 50, 31)','transparent',140,194,15,41)








