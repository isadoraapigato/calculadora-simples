let primeiro;
let segundo;
let sinal;
function enviaSete(){
    zeraVisor()
    document.getElementById('visor').value += "7"
}

function enviaOito(){
    zeraVisor()
    document.getElementById('visor').value += "8"
}

function enviaNove(){
    zeraVisor()
    document.getElementById('visor').value += "9"
}

function enviaQuatro(){
    zeraVisor()
    document.getElementById('visor').value += "4"
}

function enviaCinco(){
    zeraVisor()
    document.getElementById('visor').value += "5"
}

function enviaSeis(){
    zeraVisor()
    document.getElementById('visor').value += "6"
}

function enviaUm(){
    zeraVisor()
    document.getElementById('visor').value += "1"
}

function enviaDois(){
    zeraVisor()
    document.getElementById('visor').value += "2"
}

function enviaTres(){
    zeraVisor()
    document.getElementById('visor').value += "3"
}

function enviaZero(){
    zeraVisor()
    document.getElementById('visor').value += "0"
}

function enviaPonto(){
    zeraVisor()
    document.getElementById('visor').value += "."
}

function atualizaVisor(){
    primeiro = document.getElementById('visor').value
    document.getElementById('visor').value = '' 
}

function adicao(){
    atualizaVisor()
    sinal = "+"
}

function subtracao(){
    atualizaVisor()
    sinal = "-"
}

function multiplicacao(){
    atualizaVisor()
    sinal = "x"
}

function divisao(){
    atualizaVisor()
    sinal = "/"
}

function raizQuad(){
    atualizaVisor()
    sinal = "r"
    igual()
}

function potencia(){
    atualizaVisor()
    sinal = "p"
}

function igual(){
    segundo = document.getElementById('visor').value 
    let result
    if(sinal == "+"){
        result = parseInt(primeiro) + parseInt(segundo)
    }
    if(sinal == "-"){
        result = parseInt(primeiro) - parseInt(segundo)
    }
    if(sinal == "x"){
        result = parseInt(primeiro) * parseInt(segundo)
    }
    if(sinal == "/"){
        result = parseInt(primeiro) / parseInt(segundo)
    }
    if(sinal == "r"){
        result = Math.sqrt(parseInt(primeiro))
    }
    if(sinal == "p"){
        result = Math.pow(parseInt(primeiro), parseInt(segundo))
    }
    document.getElementById('visor').value = result
}

function apaga(){
    document.getElementById('visor').value = '0'
    primeiro = ''
    segundo = ''
}

function zeraVisor(){
    if(document.getElementById('visor').value == '0'){
        document.getElementById('visor').value = '' 
    }
}