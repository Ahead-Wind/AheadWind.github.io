class Rectangle {
 constructor(height, width) {
   this.height = height;
   this.width = width;
 }
  
 calcArea() {
   return this.height * this.width;
 }
  
  foo(bar = 100) {
    return bar;
  }
}

let myRect = new Rectangle(100, 200);
console.log(myRect.calcArea());

console.log(myRect.foo());

let a = "Variable a";
let b = "Variable b";

let string1 = "Variable a is: " + a + ", " + "Variable b is: " + b;
console.log(string1);

let string2 = `Variable a is: ${a}, Variable b is: ${b}`;
console.log(string2);

let multilineString = "I am a multiline string.\nIsn't it great!\nSo amazing.\nCan't believe it.";
console.log(multilineString);

let multilineString1 = `I am a multiline string.
Isn't it great! ${a}
So amazing.
Can't believe it.`;
console.log(multilineString1);

let jsonObject = {
  'attributeA': 10,
  'attributeB': 20
};
//let attributeA = jsonObject.attributeA;
let {attributeA} = jsonObject;
console.log(attributeA);

let myObj = {
  a, 
  b
};
console.log(myObj);

function CounterES5() {
  this.seconds = 0;
//  window.setInterval(function() {
//    console.log(this.seconds);
//    this.seconds++;
//  }.bind(this), 1000);
    window.setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
}
var counter = new CounterES5();
