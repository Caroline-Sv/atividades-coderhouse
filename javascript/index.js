let marca = "Toyota";
        let cor = "Azul";
        let velocidadeMaxima = 180;
        let velocidadeAtual = 0;

        function acelerar() {
            velocidadeAtual += 10;
            mostrarInfo();
            console.log("O carro acelerou. Velocidade atual: " + velocidadeAtual + " km/h");
        }

        function frear() {
            velocidadeAtual -= 5;
            mostrarInfo();
            console.log("O carro freou. Velocidade atual: " + velocidadeAtual + " km/h");
        }

        function mostrarInfo() {
            let infoDiv = document.getElementById("info");
            let infoHTML = "<p>Marca: " + marca + "</p>";
            infoHTML += "<p>Cor: " + cor + "</p>";
            infoHTML += "<p>Velocidade Atual: " + velocidadeAtual + " km/h</p>";
            infoDiv.innerHTML = infoHTML;
        }
        
        mostrarInfo();