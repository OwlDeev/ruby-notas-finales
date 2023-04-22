let promedioFinal1 = 0;
let promedioFinal2 = 0;
let promedioFinal3 = 0;
let nombrePersona = ''
document.getElementById('nombre').innerHTML = prompt(
    "Ingrese su nombre"
  );
for (i = 1; i < 4; i++) {
  for (x = 1; x < 4; x++) {
    let nombre = "nota" + i + x;
    let nota = 0;
    switch (i) {
      case 1:
        nota = document.getElementById(nombre).innerHTML = prompt(
          "Ingrese nota " + x + " en Html"
        );
        promedioFinal1 = promedioFinal1 + Number(nota);
        break;

      case 2:
        nota = document.getElementById(nombre).innerHTML = prompt(
          "Ingrese nota " + x + " en Css"
        );
        promedioFinal2 = promedioFinal2 + Number(nota);
        break;

      case 3:
        nota = document.getElementById(nombre).innerHTML = prompt(
          "Ingrese nota " + x + " en Javascript"
        );
        promedioFinal3 = promedioFinal3 + Number(nota);
        break;
    }
  }
}

promedio1.innerHTML = String(promedioFinal1/2)
promedio2.innerHTML = String(promedioFinal2/2)
promedio3.innerHTML = String(promedioFinal3/2)
