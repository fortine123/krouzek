

function test()
{
console.log("test");

let mycanvas = document.getElementById("myCanvas");
let context = mycanvas.getContext("2d");
let point1 = new Point(100, 100, context);
point1.draw();
let point2 = new Point(20, 20, context)
point2.draw();
let point3 = new Point(29, 30, context);
point3.draw();
let point4 = new Point(60, 60, context)
point4.draw();
let point5 = new Point(10, 10, context)
point5.draw();
let point6 = new Point(89, 58, context)
point6.draw();
let point7 =new Point(98, 65, context)
point7.draw();
let point8 = new Point(78, 66, context)
point8.draw();
let point9 = new Point(145, 54 , context)
point9.draw();

let x = 50;

for(let i = 0; i < 10; i++)
{
console.log(i);
let y = 50;


let point8 = new Point(x, y, context)
point8.draw();


x =x +20;
}





}









