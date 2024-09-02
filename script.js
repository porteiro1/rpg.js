let esquerda = 0;
let direita = 0;
console.log(esquerda);
console.log(direita)
const blocoUm = document.getElementById("blocoUm");
const blocoDois = document.getElementById("blocoDois");
const container = document.getElementById("container");
blocoUm.addEventListener("dblclick", function(){
    esquerda++;
    alert(esquerda);
    console.log("esquerda é igual "+ esquerda);
    console.log("direita é igual a "+direita);
});

blocoDois.addEventListener("dblclick", function(){
    direita++;
    alert(direita);
    console.log("esquerda é igual "+ esquerda);
    console.log("direita é igual a "+direita);
});

container.addEventListener("dblclick", function(){
    if(esquerda === 1 && direita === 0){
        alert("funciono");
        document.body.style.backgroundImage = "url('porra.jpg')";
    }else if(esquerda === 1 && direita === 1){
        alert("penis")
    };
    
});
