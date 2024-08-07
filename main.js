const precios = {
    aqua: 200,
    emocion: 180,
    alegria: 160,
    frescura: 150
};

function calcularVentas() {
    let ventasJuana = {
        aqua: parseInt(document.getElementById('juana-aqua').value) || 0,
        emocion: parseInt(document.getElementById('juana-emocion').value) || 0,
        alegria: parseInt(document.getElementById('juana-alegria').value) || 0,
        frescura: parseInt(document.getElementById('juana-frescura').value) || 0
    };

    let ventasPedro = {
        aqua: parseInt(document.getElementById('pedro-aqua').value) || 0,
        emocion: parseInt(document.getElementById('pedro-emocion').value) || 0,
        alegria: parseInt(document.getElementById('pedro-alegria').value) || 0,
        frescura: parseInt(document.getElementById('pedro-frescura').value) || 0
    };

    let totalJuana = calcularTotal(ventasJuana);
    let totalPedro = calcularTotal(ventasPedro);

    let resultado = `
    Ventas de Juana:
    Aqua: ${ventasJuana.aqua}, Emoción: ${ventasJuana.emocion}, Alegría: ${ventasJuana.alegria}, Frescura: ${ventasJuana.frescura}
    Total Recaudado por Juana: $${totalJuana}

    Ventas de Pedro:
    Aqua: ${ventasPedro.aqua}, Emoción: ${ventasPedro.emocion}, Alegría: ${ventasPedro.alegria}, Frescura: ${ventasPedro.frescura}
    Total Recaudado por Pedro: $${totalPedro}
    `;

    if (totalJuana > totalPedro) {
        resultado += "\nEl empleado del mes es Juana.";
    } else if (totalPedro > totalJuana) {
        resultado += "\nEl empleado del mes es Pedro.";
    } else {
        resultado += "\nEs un empate.";
    }

    mostrarResultado(resultado);
}

function calcularTotal(ventas) {
    return ventas.aqua * precios.aqua +
           ventas.emocion * precios.emocion +
           ventas.alegria * precios.alegria +
           ventas.frescura * precios.frescura;
}

function mostrarResultado(mensaje) {
    document.getElementById('output').textContent = mensaje;
}