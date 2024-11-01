function nota() {
    const grade = parseInt(document.getElementById("grade").value);
    let result = "";
    const ranges = [90, 70, 0];
    const messages = ["Aprobado con honores", "Aprobado", "Reprobado"];

    for (let i = 0; i < ranges.length; i++) {
      if (grade >= ranges[i]) {
        result = messages[i];
        break;
      }
    }
    document.getElementById("gradeResult").innerText = result;
  }