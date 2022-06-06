debugger;
let trainDelay = 3; //задержка метро + время переезда от станции до станции
let result;
let numberOfStation = prompt("Какая станция по счёту от начальной?");
result = trainDelay * numberOfStation;
alert("До прибытия осталось " +result + " минут.");