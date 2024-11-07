function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 3) + 1
}

let numeroAletaorio = gerarNumeroAleatorio()

function pedra(){
    if(numeroAletaorio == 1){
        document.getElementById('resultado').innerText = 'Empate!   Você: Pedra     Oponente: Pedra'
    }else if(numeroAletaorio == 2){
        document.getElementById('resultado').innerText = 'Derrota!  Você: Pedra     Oponente: Papel'
    }else{
        document.getElementById('resultado').innerText = 'Vitória!  Você: Pedra     Oponente: Tesoura'
    }
    document.getElementById('comecarDenovo').innerHTML = '<button onclick = "location.reload()">Tentar novamente?</button>'
}

function papel(){
    if(numeroAletaorio == 1){
        document.getElementById('resultado').innerText = 'Vitória!  Você: Papel     Oponente: Pedra'
    }else if(numeroAletaorio == 2){
        document.getElementById('resultado').innerText = 'Empate!   Você: Papel     Oponente: Papel'
    }else{
        document.getElementById('resultado').innerText = 'Derrota!  Você: Papel     Oponente: Tesoura'
    }
    document.getElementById('comecarDenovo').innerHTML = '<button onclick = "location.reload()">Tentar novamente?</button>'
}

function tesoura(){
    if(numeroAletaorio == 1){
        document.getElementById('resultado').innerText = 'Derrota!  Você: Tesoura   Oponente: Pedra'
    }else if(numeroAletaorio == 2){
        document.getElementById('resultado').innerText = 'Vitória!  Você: Tesoura   Oponente: Papel'
    }else{
        document.getElementById('resultado').innerText = 'Empate!   Você: Tesoura   Oponente: Tesoura'
    }
    document.getElementById('comecarDenovo').innerHTML = '<button onclick = "location.reload()">Tentar novamente?</button>'
}