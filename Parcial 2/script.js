function cambiarFormulario() {
  const tipo = document.getElementById("tipo").value;
  const form = document.getElementById("formulario");
  let html = "";

  if (tipo === "circular") {
    html += 'Diámetro (m): <input type="number" id="diametro" min="0.01" step="any"><br>';
  } else if (tipo === "rectangular") {
    html += 'Lado a (m): <input type="number" id="ladoA" min="0.01" step="any"><br>';
    html += 'Lado b (m): <input type="number" id="ladoB" min="0.01" step="any"><br>';
  } else if (tipo === "directa") {
    html += 'Sección (m²): <input type="number" id="seccion" min="0.01" step="any"><br>';
  }

  if (tipo) {
    html += 'Velocidad (m/s): <input type="number" id="velocidad" min="0.01" step="any"><br>';
  }

  form.innerHTML = html;
  document.getElementById("resultado").innerHTML = "";
}

function calcular() {
  const tipo = document.getElementById("tipo").value;
  const v = parseFloat(document.getElementById("velocidad")?.value);

  if (!v || v <= 0) {
    alert("Ingrese una velocidad válida.");
    return;
  }

  let S;

  if (tipo === "circular") {
    const d = parseFloat(document.getElementById("diametro").value);
    if (!d || d <= 0) return alert("Ingrese un diámetro válido.");
    S = Math.PI * Math.pow(d / 2, 2);
  }

  if (tipo === "rectangular") {
    const a = parseFloat(document.getElementById("ladoA").value);
    const b = parseFloat(document.getElementById("ladoB").value);
    if (!a || !b || a <= 0 || b <= 0) return alert("Ingrese lados válidos.");
    S = a * b;
  }

  if (tipo === "directa") {
    const s = parseFloat(document.getElementById("seccion").value);
    if (!s || s <= 0) return alert("Ingrese una sección válida.");
    S = s;
  }

  const Q = S * v;
  document.getElementById("resultado").innerHTML = `<p>Caudal Q = ${Q.toFixed(2)} m/s</p>`;
}

function limpiar() {
  document.getElementById("tipo").value = "";
  document.getElementById("formulario").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}
