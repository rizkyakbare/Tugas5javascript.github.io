var result = 0;
var operator = '';

// menambahkan angka pada layar
function addToResult(number) {
  document.getElementById('result').value += number;
}

// menghapus satu karakter dari layar
function backspace() {
  var value = document.getElementById('result').value;
  document.getElementById('result').value = value.substr(0, value.length - 1);
}

// menghapus seluruh isi layar
function clearResult() {
  document.getElementById('result').value = '';
  result = 0;
  operator = '';
}

// melakukan perhitungan
function calculate() {
  var value = document.getElementById('result').value;
  var numbers = value.split(operator);
  result = parseFloat(numbers[0]);
  for (var i = 1; i < numbers.length; i++) {
    var num = parseFloat(numbers[i]);
    switch (operator) {
      case '+':
        result += num;
        break;
      case '-':
        result -= num;
        break;
      case '*':
        result *= num;
        break;
      case '/':
        result /= num;
        break;
    }
  }
  document.getElementById('result').value = result;
}

// memilih operator
function chooseOperator(selectedOperator) {
  operator = selectedOperator;
  addToResult(operator);
}
