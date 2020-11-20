const btn = document.getElementsByTagName("button");
const expressao = function(entrada){
    document.getElementById("res").value += entrada;
};
const calcula = function(){
let result = 0;
result = document.getElementById("res").value;
document.getElementById("res").value = eval(result);
};
let memoria;