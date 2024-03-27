
let simulador = {
    marca: "Toyota",
    cor: "Vermelho",
    velocidadeMaxima: 180,
    velocidadeAtual: 0,

    construtor: function(marca, cor, velocidadeMaxima) {
        this.marca = marca;
        this.cor = cor;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    },

    acelerar: function() {
        if (this.velocidadeAtual + 10 <= this.velocidadeMaxima) {
            this.velocidadeAtual += 10;
        }
        this.mostrarInfo();
        console.log("O carro acelerou. Velocidade atual: " + this.velocidadeAtual + " km/h");
    },

    frear: function() {
        if (this.velocidadeAtual - 5 >= 0) {
            this.velocidadeAtual -= 5;
        } else {
            this.velocidadeAtual = 0;
        }
        this.mostrarInfo();
        console.log("O carro freou. Velocidade atual: " + this.velocidadeAtual + " km/h");
    },

    mostrarInfo: function() {
        let infoDiv = document.getElementById("info");
        let infoHTML = "<p>Marca: " + this.marca + "</p>";
        infoHTML += "<p>Cor: " + this.cor + "</p>";
        infoHTML += "<p>Velocidade Atual: " + this.velocidadeAtual + " km/h</p>";
        infoDiv.innerHTML = infoHTML;
    }
};


simulador.construtor("Toyota", "Vermelho", 180);


simulador.mostrarInfo();