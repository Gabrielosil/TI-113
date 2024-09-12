/*Ex3: Crie um algoritmo usando funções que faça uma leitura de 10 letras em um vetor, e após verificar 
quantas vogais foram lidas e mostre somente consoantes no alerta.*/

function lerLetras() {
    let msg = "";
    let letras = [];
    let cont = 0;
    
    for (let i = 0; i < 10; i++) {
        let val = prompt("Informe a letra");
        letras[i] = val;
    }
    
    for (let j = 0; j < 10; j++) {
        let val = letras[j].toUpperCase();
        if (!(val == "A" || val == "E" || val == "I" || val == "O" || val == "U")) {
            cont++;
            msg += val + "\n";
        }
    }
    
    alert(msg + "Consoantes: " + cont);
}

lerLetras();

console.log(lerLetras)