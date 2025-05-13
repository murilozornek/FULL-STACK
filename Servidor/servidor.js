
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

//Exemplo de Bancos de dados 
var mongodb = require("mongodb");
const { INSPECT_MAX_BYTES } = require("buffer");


const MongoClient = mongodb.MongoClient;

const uri = 'mongodb+srv://zornekmurilo:161002@murilo.yen2yak.mongodb.net/?retryWrites=true&w=majority&appName=Murilo'
const client = new MongoClient(uri, { useNewUrlParser: true });

// Exemplo de Banco de dados
var dbo = client.db("Murilo");
var usuarios = dbo.collection("usuarios");
var posts = dbo.collection("Posts")
var usuarios_carro = dbo.collection("Usuarios_carro")
var carros = dbo.collection("Carro")
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

//Exemplo de inserir elementos no Banco de Dados

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
//Exemplo de Buscar informações no Banco de Dados

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
// Exemplo de Atualizar algo no Banco de dados

app.post("/atualizar_senha", function(requisição,resposta){
    let login = requisição.body.login;
    let senha = requisição.body.senha;
    let nova_senha = requisição.body.nova_senha;

    let data={db_login:login, db_senha: senha}   //para buscar
    let new_Data = { $set: {db_senha: nova_senha}} // para atualizar
    
    usuarios.updateOne(data,new_Data, function(err,result){
        console.log(result);
        if (result.modifiedCount == 0) {
            resposta.render('resposta_login', {status: "Usuário/senha não encontrado!"})
          }else if (err) {
            resposta.render('resposta_login', {status: "Erro ao atualizar usuário!"})
          }else {
            resposta.render('resposta_login', {status: "Usuário atualizado com sucesso!"})        
          };
        });
    
    })
//Exemplo de Remover Usuario

app.post("/remover_usuario", function(requisição,resposta){
    let login = requisição.body.login;
    let senha = requisição.body.senha;

    let data={db_login:login, db_senha: senha} 

    usuarios.deleteOne(data, function(err, result){
        console.log(result)
        if (result.modifiedCount == 0) {
            resposta.render('resposta_login', {status: "Usuário/senha não encontrado!"})
          }else if (err) {
            resposta.render('resposta_login', {status: "Erro ao remover usuário!"})
          }else {
            resposta.render('resposta_login', {status: "Usuário removido com sucesso!"})        
          };
        });
    })
//Exemplo de for no ejs

app.get("/for_ejs",function(requisição,resposta){
    let valor = requisição.query.valor;
    resposta.render("exemplo_for",{valor});
})
 var usuarios_cadastrados  = []

app.post("/cadastra", function(requisição, resposta){
    let nome_usuario = requisição.body.nome_usuario;
    let senha = requisição.body.senha;

    usuarios_cadastrados.push({nome:nome_usuario,senha: senha})

    console.log(usuarios_cadastrados)   //para ver no terminal se a conta foi cadastrada e qual e nome de usuario e a senha

    resposta.redirect("lab/lab8/login.html")

})

app.post("/login", function(requisição,resposta){
    let user_name = requisição.body.usuario;
    let password = requisição.body.senha;

    let login_valido = false 

    for(let i = 0; i < usuarios_cadastrados.length;i++){
        if(usuarios_cadastrados[i].nome_usuario === user_name && usuarios_cadastrados[i].senha === password){
            login_valido = true;
            break ;
    }

    }
    if (login_valido){
        resposta.render("resultado_login.ejs")
    }else{
        resposta.send("Usuario ou senha incorretos!!")
    }

})
                                        
app.get("/blog",function(requisição,resposta){

    posts.find().toArray(function(err,lista_posts){
        if (err){
            resposta.send("Erro ao buscar posts")
        }else{
            resposta.render("blog",{posts: lista_posts})
        }
    })
})

app.post("/criar_post", function(requisição,resposta){

    let titulo= requisição.body.Titulo
    let resumo = requisição.body.Resumo
    let conteudo = requisição.body.Conteudo

    var data ={db_titulo:titulo, db_resumo: resumo, db_conteudo: conteudo}
    posts.insertOne(data,function(err){
        if (err){
            resposta.send("Erro ao salvar o post!!")
        }else {
            resposta.redirect("lab/lab9/salvo_sucesso.html")
        }
    })
})


// Lab 10
app.post("/cadastrar_usuario_carro", function(requisição,resposta){

    let nome = requisição.body.nome
    let nome_usuario = requisição.body.nome_usuario
    let senha = requisição.body.senha

    var data= {db_nome: nome, db_nome_usuario: nome_usuario, db_senha: senha}
    usuarios_carro.insertOne(data,function(err){
        if(err){
            resposta.render('cadastro_usuario_carro.ejs', {status: "Erro ao cadastrar usuário"})
        }else {
          resposta.render('cadastro_usuario_carro.ejs', {status: "Usuário cadastrado com sucesso!"})     
        }
    })
})

app.post("/login_usuario_carro", function(requisição,resposta){

    let data = {db_nome_usuario: requisição.body.login , db_senha: requisição.body.senha}

    usuarios_carro.find(data).toArray(function(err,item){
        console.log(item)
        if(item.length == 0){
            resposta.render("resposta_login.ejs",{status: "Usuarios não encontrado"})
        }else if (err){
            resposta.render("resposta_login.ejs",{status:"Erro ao logar usuario"})
        }else{
            resposta.render("resposta_login.ejs",{status:"Login realizado com sucesso"})
        }
    })
})

app.post("/cadastrar_carro",function(requisição,resposta){
    let marca = requisição.body.marca
    let modelo = requisição.body.modelo
    let ano = requisição.body.ano
    let qtd_disponivel = requisição.body.qtd_disponivel

    var data = {db_marca: marca, db_modelo: modelo, db_ano: ano, db_qtd_disponivel: qtd_disponivel}
    carros.insertOne(data,function(err){
        if(err){
            resposta.render("cadastro_carro.ejs", {status:"Erro ao cadastrar o veiculo"})
        }else{
            resposta.render("cadastro_carro.ejs",{status:"Veiculo cadastrado com sucesso!"})
        }
    })

})

app.get("/lista_carro", function(requisição,resposta){
    resposta.render("lista_carro.ejs")
})