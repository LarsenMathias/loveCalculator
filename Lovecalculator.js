
const prompt = require("prompt-sync")({sigint:true});
var x=prompt("Please Enter your name ");
var y=prompt("Please Enter your Lovers name ");
var n=Math.random();
var z=Math.random();
var a=n*100;
var b=z*100;
// var a=Math.floor(a);
if(a<=20);{
    if(b<=20){
    c=a+b;
    console.log(x,"and" ,y,"We are sorry to say that your Love percentage is",c);
}
}
if(a<=60);{
    if(b<=80){
    c=a+b;
    console.log(x,"and" ,y,"Congrats your Love percentage is",c);
}
}
if(a<=60);{
    if(b>=60){
    c=a+b/2;
    console.log(x,"and" ,y,"Love percentage is ",c);
}
}
if(a>60){
    console.log(x,"and" ,y,"Love percentage",a );
}