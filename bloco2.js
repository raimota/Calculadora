//1º linha
btn[0].addEventListener("click", function(){
    document.getElementById("res").value = memoria;
    memoria = 0;
});
btn[1].addEventListener("click", function(){
    document.getElementById("res").value = memoria - document.getElementById("res").value;
});
btn[2].addEventListener("click", function(){
memoria = document.getElementById("res").value;
});
btn[3].addEventListener("click", function(){expressao(btn[3].value)});


//2º linha
btn[4].addEventListener("click", function () { expressao(btn[4].value) });
btn[5].addEventListener("click", function () { expressao(btn[5].value) });
btn[6].addEventListener("click", function () { expressao(btn[6].value) });
btn[7].addEventListener("click", function(){expressao(btn[7].value)});


//3º linha
btn[8].addEventListener("click", function () { expressao(btn[8].value) });
btn[9].addEventListener("click", function () { expressao(btn[9].value) });
btn[10].addEventListener("click", function () { expressao(btn[10].value) });
btn[11].addEventListener("click", function () { expressao(btn[11].value) });

//4º linha
btn[12].addEventListener("click", function () { expressao(btn[12].value) });
btn[13].addEventListener("click", function(){expressao(btn[13].value)});
btn[14].addEventListener("click", function(){expressao(btn[14].value)});
btn[15].addEventListener("click", function(){expressao(btn[15].value)});


//5º linha
btn[16].addEventListener("click", function(){expressao(btn[16].value)});
btn[17].addEventListener("click", function(){expressao(btn[17].value)});
btn[18].addEventListener("click", function(){document.getElementById("res").value = "";});
btn[19].addEventListener("click", function(){calcula(btn[19].value)})