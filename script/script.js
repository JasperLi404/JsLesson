'use strict';
class First{
    constructor() {
      this.text = 'Привет я метод родителя!';
    }
    hello(){
        console.log(this.text);
    }
}
class Second extends First{
     hello(){
         console.log(this.text + ' А я наследуемый метод ');
     }
}
let call =  new Second();
call.hello();
