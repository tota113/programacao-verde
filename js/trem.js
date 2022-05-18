// pego os elementos do li
var btn = document.querySelectorAll(".key li"),
    input = document.querySelector(".input-valor"),
    operador = document.querySelectorAll(".operator");
    
    //percorro a lista para ver e comparar
    //se as teclas foram clicadas.
for(var i = 0; i < btn.length; ++){
    document.onkeypress = function (event){
         for(var e = 0; e <= 10; e++){
             if(key === (48+e)){
                 input.innerHTML += e;
             }
         }
        switch(key){
             case 42:
                 input.innerHTML += "*";
                 break;
             case 43:
                   inputu.innerHTML += "+";
                   break;
             case 45:
                 input.innerHTML += "-";
                   break;
             case 46:
                 input.innerHTML += ".";
                   break;
             case 47
                 input.innerHTML += "/";
                   break;
             case 13:
             case 61:
                   vae equacao = input.innerHTML
        }
        }
};

