'use strict';
let isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
const num = Math.ceil(Math.random() * (100 - 1) + 1);
console.log(num);
const GuessNumber = () =>{
    let bool = confirm("Угадай число от 1 до 100. Хорошо?");
    if(bool){
        let input = +prompt('Угадай');
        if (isNumber(input)){
             if (num < input){
                alert('Загаданное число меньше');
                GuessNumber();
            }
            else if (num > input){
                alert('Загаданное число больше');
                GuessNumber();
            }
            else if (num == input ){
                alert("Угадали!");
            }
                
            
        }
        else{
            alert('Введи число!');
            GuessNumber();
        }
    }
       
    else{
        alert('Bye');
    }
    
}
GuessNumber();
