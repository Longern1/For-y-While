function par_impar() {
    const number = parseInt(document.getElementById("number").value);
    let isEven = false;
    let count = 0;

    while (count <= number) {
      if (count === number && count % 2 === 0) {
        isEven = true;
        break;
      }
      count += 2;
    }
    document.getElementById("numberResult").innerText = isEven ? "El número es par" : "El número es impar";
}