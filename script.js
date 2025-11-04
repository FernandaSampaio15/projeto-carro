var result = document.getElementById("result");
var car_red = document.getElementById("red");
var car_white = document.getElementById("white");
var btn_circle_red = document.getElementById("vermelho");
var btn_circle_white = document.getElementById("branco");
var btns_ctrl = document.getElementsByClassName("btn");
var car_select = null


car_red.addEventListener("click", sel_car_red);
car_white.addEventListener("click", sel_car_white);
btn_circle_red.addEventListener("click", sel_car_red);
btn_circle_white.addEventListener("click", sel_car_white);
btns_ctrl[0].addEventListener("click", reset);
btns_ctrl[1].addEventListener("click", acel);
btns_ctrl[2].addEventListener("click", desacel);


//Função de selecionar o carro vermelho
function sel_car_red() {
    car_select = car_red
    document.body.style.background ="red";
    document.body.style.color ="black";

    result.textContent = "Vermelho";

    btns_ctrl_block_fun();
}

//Função de selecionar o carro branco
function sel_car_white() {
    car_select = car_white
    document.body.style.background ="white";
    document.body.style.color ="black";

    result.textContent = "Branco";

    btns_ctrl_block_fun();
}

//Função de controle - mostrar
function btns_ctrl_block_fun() {
    for(i=0; i<=2; i++){
    btns_ctrl[i].style.display = "block";
    }
}

//Função de controle - ocultar
function btns_ctrl_none_fun() {
    for(i=0; i<=2; i++){
    btns_ctrl[i].style.display = "none";
    }
}

//Função de resetar
function reset() {
    document.body.style.background = "black";
    document.body.style.color = "white";

    result.textContent = "?";
    car_select = null;

    btns_ctrl_none_fun();

    car_red.style.top = 60 + "px";
    car_red.style.right = 205 + "px";
    car_red.style.height = 50 + "px";

    car_white.style.top = 60 + "px";
    car_white.style.left = 205 + "px";
    car_white.style.height = 50 + "px";

}

//Função acelerar
function acel() {

    var top = parseInt(window.getComputedStyle(car_select).top);
    var right = parseInt(window.getComputedStyle(car_select).right);
    var left = parseInt(window.getComputedStyle(car_select).left);
    var height = parseInt(window.getComputedStyle(car_select).height);

    if(top >= 20) {
        top -= 1;
        if(car_select == car_red) {
            right += 1;
            car_select.style.right = right + "px";

        } else {
            left += 1;
            car_select.style.left = left + "px";
        }
        height -= 1;
        car_select.style.top = top + "px";
        car_select.style.height = height + "px"; 
    }
    console.log(top);
}

// Função desacerelar
function desacel() {
    
    var top = parseInt(window.getComputedStyle(car_select).top);

    if(top <= 100) {
        top += 1;
        car_select.style.top = top + "px";
        console.log(top)
    }
   
}

// Função correr com as setas e só permitir o funcionamento com a seleção de um dos carros
document.addEventListener("keydown", function(event){

    if(car_select == null) {
        result.textContent = "Selecione primeiro um dos carros."
    } else {
        var tecla = event.key;
        console.log(tecla);
        if(tecla == "ArrowUp"){
            acel()
        }
        if(tecla == "ArrowDown"){
            desacel()
        }
    }
    
})