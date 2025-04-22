usuarios  = []


require("colors");
var http = require("http");
var express = require("express");
let bodyParser = require("body-parser")

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');


var server = http.createServer(app);
server.listen(80);


console.log("Servidor rodando...".rainbow) 


//métodos e action 

app.get("/inicio", function(requisição,resposta){ 
    resposta.redirect("Lab/Lab1_2/index.html")

})

app.post("/inicio", function(requisição, resposta){
    resposta.redirect("Lab/Lab1_2/index.html")
})


//exemplo com get 
// app.get("/cadastrar", function (requisição,resposta){
//     let nome = requisição.query.nome; 
//     let login = requisição.query.login;
//     let senha = requisição.query.senha;
//     let nasc = requisição.query.Nascimento;

//     console.log(nome,login,senha,nasc)

// })

app.post("/cadastrar", function (requisição,resposta){
    let nome = requisição.body.nome; 
    let login = requisição.body.login;
    let senha = requisição.body.senha;
    let nasc = requisição.body.Nascimento;

    console.log(nome,login,senha,nasc)

    resposta.render("resposta",{nome,login,senha,nasc});
})


app.get("/for_ejs",function(requisição,resposta){
    let valor = requisição.query.valor;
    resposta.render("exemplo_for",{valor});
})

app.post("/cadastra", function(requisição,resposta){
    var contas =[]
    let nome_usuario = requisição.body.nome_usuario;
    let senha = requisição.body.senha;

    

   
    

    
})