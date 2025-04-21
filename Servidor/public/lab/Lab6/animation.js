// class retangulo{
//     constructor(cor_linha,cor_preechimento,espessura_linha,x,y,largura,altura){
//         this.cor_linha = cor_linha;
//         this.cor_preechimento = cor_preechimento;
//         this.espessura_linha = espessura_linha;
//         this.x = x;
//         this.y = y;
//         this.largura = largura;
//         this.altura = altura;
//     }
//     desenhe(contexto){
//         contexto.beginPath();
//         contexto.lineWidth = this.espessura_linha;
//         contexto.fillStyle = this.cor_preechimento;
//         contexto.strokeStyle = this.cor_linha;
//         contexto.fillRect (this.x,this.y,this.largura,this.altura);
//         contexto.strokeRect(this.x,this.y,this.largura,this.altura);
//         contexto.closePath(); 
//     }
// }

// let canvas =document.getElementById('canvas1')
// let ctx1 = canvas1.getContext('2d')


// let retangulo_1 = new retangulo('transparent','blue',0,150,150,30,30)

// function animacao(){
//     // if(retangulo_1.x > 300){ // pode ser substituido pelo elemnto que esta comentado abaixo
//     //     retangulo_1.x =270 
//     // }
//     if(retangulo_1.x <0){
//         retangulo_1.x = 0
//     }
//      if (retangulo_1.x + retangulo_1.largura > canvas.width) {     //outra forma para não deixar a imagem sair do canva que pode substituir  o elemento que esta marcado 
//         retangulo_1.x = canvas.width - retangulo_1.largura; 
//     }

//     //if(retangulo_1.y > 300){  // pode ser substituido pelo elemento que esta comentado abaixo 
//        // retangulo_1.y =270
//     //}
//     if(retangulo_1.y <0 ){
//         retangulo_1.y = 0
//     }

//     if (retangulo_1.y + retangulo_1.altura > canvas.height) {    // outra forma para não deixar a imagem sair do canva que pode substituir o elemento marcado
//         retangulo_1.y = canvas.height - retangulo_1.altura;
//     }
//     ctx1.clearRect(0,0,canvas.width,canvas.height)
//     retangulo_1.desenhe(ctx1)

//     requestAnimationFrame(animacao)
// }

// animacao()

// document.addEventListener('mousemove',function(evento){
//     let rect = canvas.getBoundingClientRect()
//     let x_mouse = evento.clientX - rect.left;
//     let y_mouse = evento.clientY - rect.top;
//     console.log(x_mouse,y_mouse)

//     retangulo_1.x = x_mouse -retangulo_1.largura /2;
//     retangulo_1.y = y_mouse -retangulo_1.altura /2;


 // ao utilizar esse codigo abaixo o elemento fica centralizado meio do cursor 
    // retangulo_1.largura /2;
    // retangulo_1.altura /2;
// })







// document.addEventListener('mousemove', function(evento){
//     let rect = canvas1.getBoundingClientRect()
//     let x_mouse = evento.clientX - rect.left;
//     let y_mouse = evento.clientY -rect.top;
//     console.log(x_mouse, y_mouse)

//     retangulo_3.x = x_mouse;
//     retangulo_3.y = y_mouse;
// })


// let bola = {
//     x:0,
//     y:0,
//     raio: 50,
//     img: new Image(),
//     desenhe: function(){
//         this.img.src ="bola.png";
//         ctx.beginPath();
//         ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
//         ctx.closePath();



let canvas =document.getElementById('canvas1')
let ctx = canvas.getContext('2d')

let bola = {
    x:150,
    y:150,
    raio:15,
    img: new Image(),
    desenhe: function(){
        this.img.src = "../public2/soccer-ball-realistic-png.webp";
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,400,400)
    bola.desenhe();
    requestAnimationFrame(animacao)
}
animacao();

document.addEventListener('mousemove',function(evento){
        let rect = canvas.getBoundingClientRect()
        let x_mouse = evento.clientX - rect.left;
        let y_mouse = evento.clientY - rect.top;
        console.log(x_mouse,y_mouse);

        bola.x = x_mouse -15;
        bola.y = y_mouse -15;

        if(bola.y <0 ){
             bola.y = 0}

        if(bola.x <0){
            bola.x = 0}

        if(bola.x > 300){ 
            bola.x =275 }

         if(bola.y > 300){  
            bola.y =275}



        
            
        
})