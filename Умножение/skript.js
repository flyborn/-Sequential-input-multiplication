//С помощью массива, цикла и reduce
var numbers = [];
function Input() {
  while (true) {
    var value = prompt("Введите число");//запускаем цикл
    if (value === "" || value === null) break;
    numbers.push(Number(value));//передаем значения в виде цифр в массив
  }console.log(numbers); }
Input();
var result = numbers.reduce(function(tru, flo) {
  return tru * flo;//возвращаем результат 
});
console.log( result ); 

