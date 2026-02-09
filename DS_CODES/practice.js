//can direct donnn changes inside js 
// document.body.innerHTML = `<h1>hello world</h1>`



function turnOn(){
    const demo=document.getElementById("demo");

    demo.innerHTML="on";
    demo.style.color="green";
    demo.style.fontSize="50px";
}
function turnOff(){
    const demo=document.getElementById("demo");

    demo.innerHTML="off";
    demo.style.color="red";
    demo.style.fontSize="50px";
}