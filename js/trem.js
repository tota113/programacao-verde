// pego os elementos do li
var btn = document.querySelectorAll(".key li"),
    input = document.querySelector(".input-valor"),
    operador = document.querySelectorAll(".operator");
    
    //percorro a lista para ver e comparar
    //se as teclas foram clicadas.
for(var i = 0; i < btn.length; i++){
    document.onkeypress = function (event){
         for(var e = 0; e <= 10; e++){
             if(key === (48+e)){
                 input.innerHTML += e;
             }
         }
        switch(key){
             case 1:
                 input.innerHTML += "*";
                 break;
             case 2:
                   inputu.innerHTML += "+";
                   break;
             case 3:
                 input.innerHTML += "-";
                   break;
             case 4:
                 input.innerHTML += ".";
                   break;
             case 5:
                 input.innerHTML += "/";
                   break;
             case 6:
             case 7:
                   var equacao = input.innerHTML
                 if(equacao) {
                    try {
                        input.innerHTML = eval (equacao);
                    }  catch(e) {
                        alert ("Erro na Expressão");
                    }

        }
        break;
        case 67:
        case 99:
             input.innerHTML = "";
             break;
             default:
             break;
        }
    }
    
};

