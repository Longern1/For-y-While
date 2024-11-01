function adivina() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const guess = parseInt(document.getElementById("guess").value);
    let attempts = 0;
    let result = "";

    while (attempts < 1) {
      if (guess === randomNumber) {
        result = "¡Felicidades, adivinaste el número!";
      } else {
        result = "Lo siento, el número era " + randomNumber;
      }
      attempts++;
    }

    document.getElementById("resultado").innerText = result;
  }