  var env = document.getElementById('env');
        env.addEventListener('click', calcular);

        function calcular() {
            var altura = Number(document.getElementById('txta').value);
            var largura = Number(document.getElementById('txtl').value);
            var resultado = document.getElementById('resultado');
            if(!altura || !largura) {
                resultado.innerHTML = `<p style="color: red;"> Por favor, preencha todos os campos! </p>`
        return ;
            }
            var soma = (altura * largura) / 2;
            var area = altura * largura;
            
            resultado.innerHTML = `<p>Vai gastar <strong> ${soma.toFixed(2)} </strong> litros de tinta 🧺 para área de ${area.toFixed(2)} m² .</p>`;
        }