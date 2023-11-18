// Функция считает общую мощность 
function genPower(pribor1, pribor2) {
    console.log(`Общая мощность обоих приборов = ${pribor1.powerValue + pribor2.powerValue}`);
  };
  
// Класс который добавляет прибор
 class AddPribor {
   constructor(name, powerValue) {
    this.powerValue = powerValue,
    this.name = name
  }
}
  
// Метод включения/выключения
  AddPribor.prototype.Turn = function(turnStatus) {
    this.turnStatus = turnStatus
  }

// Оба прибора
  const lamp = new AddPribor('lamp', 80);
  const computer = new AddPribor('computer', 390);
  
// Особые методы для каждого прибора
  lamp.canLight = function light() {console.log('Светит')};
  computer.canCalc = function calc() {console.log('Считает')};

// Включение приборов
  lamp.Turn('turnON');
  computer.Turn('turnON');
  
// Выводит объект computer
  console.log(computer)
  
// Считает общую мощность
  genPower(lamp, computer);