


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

// //Exemplo de Bancos de dados 
var mongodb = require("mongodb");
const { INSPECT_MAX_BYTES } = require("buffer");


const MongoClient = mongodb.MongoClient;

const uri = 'mongodb+srv://zornekmurilo:161002@murilo.yen2yak.mongodb.net/?retryWrites=true&w=majority&appName=Murilo'
const client = new MongoClient(uri, { useNewUrlParser: true });



// Exemplo de Banco de dados
var dbo = client.db("Murilo");
var usuarios = dbo.collection("usuarios");




//métodos e action 

app.get("/inicio", function(requisição,resposta){ 
    resposta.redirect("Lab/Lab1_2/index.html")

})

app.post("/inicio", function(requisição, resposta){
    resposta.redirect("Lab/Lab1_2/index.html")
})


// exemplo com get 
app.get("/cadastrar", function (requisição,resposta){
    let nome = requisição.query.nome; 
    let login = requisição.query.login;
    let senha = requisição.query.senha;
    let nasc = requisição.query.Nascimento;

    console.log(nome,login,senha,nasc)

})

app.post("/cadastrar", function (requisição,resposta){
    let nome = requisição.body.nome; 
    let login = requisição.body.login;
    let senha = requisição.body.senha;
    let nasc = requisição.body.Nascimento;

    console.log(nome,login,senha,nasc)

    var data = { db_nome: nome, db_login: login, db_senha: senha, db_nasc: nasc };

    usuarios.insertOne(data,function(err){
        console.log(err)
        if (err){
            resposta.render("resposta",{status:"erro",nome,login,senha,nasc});
        }else{
            resposta.render("resposta",{status:"sucesso",nome,login,senha,nasc});
        }

        

    })

})

app.post('/logar', function(requisição,resposta){
    let login = requisição.body.login;
    let senha = requisição.body.senha;

    console.log(login,senha)

    var data = {db_login: login, db_senha: senha}

    usuarios.find(data).toArray(function(err, item){
        console.log(item)
        if(item.length == 0){
            resposta.render("resposta_login",{status:"usuario/senha não encontrado"});
            
            //não encontrou usuario

        }else if(err){
            resposta.render("resposta_login",{status:"erro ao logar"});
             //erro ao logar

        }else{
            resposta.render("resposta_login",{status:"Usuario encontrado"});
            //usuario encontrado
        }
    })    

})


   



app.get("/for_ejs",function(requisição,resposta){
    let valor = requisição.query.valor;
    resposta.render("exemplo_for",{valor});
})



 var usuarios_cadastrados  = 

app.post("/cadastra", function(requisição, resposta){
    let nome_usuario = requisição.body.nome_usuario;
    let senha = requisição.body.senha;

    usuarios_cadastrados.push({
        nome_usuario: nome_usuario,
        senha: senha
    })

    console.log(usuarios)   //para ver no terminal se a conta foi cadastrada e qual e nome de usuario e a senha

    resposta.redirect("lab/lab8/login.html")
   

})

app.post("/login", function(requisição,resposta){
    let usuario = requisição.body.usuario;
    let senha = requisição.body.senha;

    for( var i =0 ; i < usuarios_cadastrados.length; i++){
        if(usuario == usuarios_cadastrados[i],[nome_usuario] && senha == usuarios_cadastrados[i][senha]){
            usuarios_encontrados = true;
            break;
        }
    }

    resposta.render("resultado_login",{usuario,senha,usuarios_cadastrados})

})

  
                                                                                                   


