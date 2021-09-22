const display = document.querySelector("#display");
const numeros = document.querySelectorAll("[id*=tecla]");
const operadores = document.querySelectorAll("[id*=operador]");
const igual = document.querySelector("#igual")
const limparDisp = document.querySelector("#limparDisplay")
const limparCalculoDisp = document.querySelector("#limparCalculo")
const backspace = document.querySelector("#backspace")
const inverter = document.querySelector("#inverter")
const decimal = document.querySelector("#decimal")


let novoNumero = true;
let operador;
let numeroAnterior;

const atualizarDisplay = (texto) => {
    if(novoNumero){
        display.textContent = texto;
        novoNumero = false
    }else{
        display.textContent += texto;
    }   
}

const inserirNumero = (event) => atualizarDisplay(event.target.textContent);
numeros.forEach(numero => numero.addEventListener("click", inserirNumero))

const selecionarOperador = (event) => {
    operador = event.target.textContent;
    numeroAnterior = display.textContent.replace(",", ".");
    novoNumero = true;
}

operadores.forEach(operador => operador.addEventListener("click", selecionarOperador));

const calcular = () => {
    if(operador !== undefined){
        const numeroAtual = display.textContent.replace(",", ".");
        novoNumero = true;
        const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`);
        atualizarDisplay(resultado.toString().replace(".", ","));
        operador = undefined;
    }
}

ativarIgual = () => calcular();
igual.addEventListener("click", ativarIgual)

limparDisplay = () => display.textContent = "";
limparDisp.addEventListener("click", limparDisplay)

const limparCalculo = () => {
    limparDisplay()
    novoNumero = true
    operador = undefined
    numeroAnterior = undefined
}
limparCalculoDisp.addEventListener("click", limparCalculo)

const removerUtimoNumero = () => {
    display.textContent =  display.textContent.slice(0, -1)
}
backspace.addEventListener("click", removerUtimoNumero)

const inverterSinal = () => {
    novoNumero = true;
    atualizarDisplay(display.textContent * -1);
}
inverter.addEventListener("click", inverterSinal)

const exiteValor = () => display.textContent.length > 0;
const existeDecimal = () => display.textContent.indexOf(",") !== -1;
const inserirDecimal = () => {    
    if(existeDecimal() == false){
        if(exiteValor()){
            atualizarDisplay(",")
        }else{
            atualizarDisplay("0,")
        }
    }
    
}
decimal.addEventListener("click", inserirDecimal)