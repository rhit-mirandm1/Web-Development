let counter =0;

updateView = function (){
    document.querySelector("#counterText").innerHTML = `${counter}`
}
main = function (){
document.querySelector("#minusButton").onclick = (event)=>{
    counter = counter-1;
    updateView();
}
document.querySelector("#resetButton").onclick = (event)=>{
    counter = 0;
    updateView();
}
document.querySelector("#plusButton").onclick = (event)=>{
    counter = counter+1;
    updateView();
}



}
main()