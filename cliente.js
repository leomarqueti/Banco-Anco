class ContaCorrente{
    constructor(agencia, conta, saldo){
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }

    sacar(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente");
            return false
        }else{
            this.saldo -= valor;
            return true
        }
    }

    depositar(valor){
        this.saldo += valor;
    }

    saldoAtual(){
        return this.saldo
    }

}

usuario = new ContaCorrente("010","16074-2",300)

function pixBotao(){
    const input = document.querySelector("#input-numeros-envio").value
    const resposta = document.querySelector(".resposta")

    console.log(resposta)

    if(usuario.sacar(input) == true){
        const texto = `Pix do valor R$${input} foi enviando com sucesso.`

        resposta.innerHTML = texto
        mostrarSaldo(usuario.saldoAtual())
    } else {
        alert("ERRO")
    }
}

function depositarBotao(){


    const input = document.querySelector("#input-numeros-depositar").value
    const resposta = document.querySelector(".resposta")

    usuario.depositar(parseInt(input))

    const texto = `Valor depositado R$${input}.`
    resposta.innerHTML = texto

    mostrarSaldo(usuario.saldoAtual())
}

function mostrarSaldo(saldoUsuario){
    const saldoCliente = document.querySelector(".saldo-cliente")
    const texto = `Saldo: R$${saldoUsuario}`

    saldoCliente.innerHTML = texto
}

function sacarBotao(){
    const input = document.querySelector("#input-numeros-sacar").value
    const resposta = document.querySelector(".resposta")

    console.log(resposta)

    if(usuario.sacar(input) == true){
        const texto = `Saque no valor de R$${input} foi sacado com sucesso.`

        resposta.innerHTML = texto
        mostrarSaldo(usuario.saldoAtual())
    } else {
        alert("ERRO")
    }
}

function pagarContasBotao(){
    const input = document.querySelector("#input-numeros-pagar-contas").value
    const resposta = document.querySelector(".resposta")

    console.log(resposta)

    if(usuario.sacar(input) == true){
        const texto = `Conta no valor de R$${input} foi paga com sucesso.`

        resposta.innerHTML = texto
        mostrarSaldo(usuario.saldoAtual())
    } else {
        alert("ERRO")
    }
}


mostrarSaldo(usuario.saldoAtual())
