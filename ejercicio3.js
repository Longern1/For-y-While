function descuento() {
    const totalAmount = parseFloat(document.getElementById("totalAmount").value);
    let finalAmount = totalAmount;
    let mdescuento = 0;

    if (totalAmount > 100) {

        finalAmount = totalAmount * 0.9;
        mdescuento = totalAmount * 0.1;


        document.getElementById("descuentoR").innerText = "El descuento es de $" + mdescuento.toFixed(2);
    } else {

        document.getElementById("descuentoR").innerText = "";
    }

    document.getElementById("discountResult").innerText = "Total a pagar: $" + finalAmount.toFixed(2);
}
