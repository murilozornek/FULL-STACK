function random(){
  r= Math.floor(Math.random() *100)
  console.log(r)
}

function guess1(){
    let num= parseInt(document.getElementById('g1').value)

if (num == r){
   document.getElementById("teste1").innerHTML = "Número Igual"
   document.getElementById("teste1").style.setProperty("background-color", "green");
}
else if (num < r) {

    document.getElementById("teste1").innerHTML = "Número Menor"
    document.getElementById("teste1").style.setProperty("background-color", "red");
}

else if  (num>r){   
      document.getElementById("teste1").innerHTML = "Número Maior "
      document.getElementById("teste1").style.setProperty("background-color", "red");
}

}