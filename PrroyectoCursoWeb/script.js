function calificar() {
    let correctas = 0;
    let total = 5;

    // Obtener respuestas seleccionadas
    let q1 = document.querySelector('input[name="question1"]:checked');
    let q2 = document.querySelector('input[name="question2"]:checked');
    let q3 = document.querySelector('input[name="question3"]:checked');
    let q4 = document.querySelector('input[name="question4"]:checked');
    let q5 = document.querySelector('input[name="question5"]:checked');

    // Verificar respuestas
    if (q1 && q1.value == 'b') correctas++;
    if (q2 && q2.value == 'b') correctas++;
    if (q3 && q3.value == 'b') correctas++;
    if (q4 && q4.value == 'b') correctas++;
    if (q5 && q5.value == 'c') correctas++;

    // Mostrar resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Has acertado ${correctas} de ${total} preguntas.`;

    // Calificación en porcentaje
    let porcentaje = (correctas / total) * 100;
    resultado.innerHTML += `<br>Tu calificación es: ${porcentaje}%`;
}
