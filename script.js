function calcularPercentual() {
    const valorInput = document.getElementById('valorInput');
    const percentualInput = document.getElementById('percentualInput');
    const resultadoPercentual = document.getElementById('resultadoPercentual');
    const valorResultado = document.getElementById('valorResultado');
    
    // Obter os valores dos campos de entrada
    const valor = parseFloat(valorInput.value);
    const percentual = parseFloat(percentualInput.value);
    
    if (!isNaN(valor) && !isNaN(percentual)) {
        // Calcular o resultado do percentual
        const resultado = (valor * percentual) / 100;
        
        // Exibir o resultado
        valorResultado.textContent = resultado.toFixed(2) + ' R$'; // Exibe o resultado com 2 casas decimais
        resultadoPercentual.style.display = 'block'; // Mostra o campo de resultado
    }
}