
function getFlowerColor(flower){     
    switch(flower){
        case "rose":
            return "red";
        case "violet":
            return "blue";
        case "sunflower":
            return "yellow";
        default:
            return "unknown";
    }
}

function getCalendarMonthDays(monthName){
    switch(monthName){
        case "september":
        case "april":
        case "june":
        case "november":
            return 30;
        case "february":
            return 28;
        default:
            return 31;       
    }

}


function CheckNumber() {
    switch (operator) {
      case "+":
      return number1 + number2;
      case "-":
      return value1 - value2;
      case "*":
      return value1 * value2;
      case "/":
      return value1 / value2;
    }
}


function doFibonacciSequence(limit){

}