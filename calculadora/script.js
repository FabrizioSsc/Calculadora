function addToDisplay(value) {
    document.getElementById('tela').value += value;
}

function clearDisplay() {
    document.getElementById('tela').value = ''; //concatena
}

function calculate() {
    var expression = document.getElementById('tela').value;
    var result = eval(expression);
    document.getElementById('tela').value = result;
}
