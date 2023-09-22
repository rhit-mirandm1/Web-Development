let counter = 0;

updateView = function () {
    document.querySelector("#counterText").innerHTML = `${counter}`
}
updateColor = function (color) {
    document.getElementById('favoriteColorBox').style.backgroundColor = `${color}`;
}
updateText = function (text) {
    document.getElementById('favoriteColorBox').textContent =`${text}`;
}


main = function () {
    document.querySelector("#minusButton").onclick = (event) => {
        counter = counter - 1;
        updateView();
    }
    document.querySelector("#resetButton").onclick = (event) => {
        counter = 0;
        updateView();
    }
    document.querySelector("#plusButton").onclick = (event) => {
        counter = counter + 1;
        updateView();
    }
    document.querySelector("#blueButton").onclick = (event) => {
        color = getComputedStyle(document.getElementById("blueButton")).backgroundColor;
        text =  document.getElementById("blueButton").textContent;
        updateColor(color);
        updateText(text);

    }
    document.querySelector("#redButton").onclick = (event) => {
        color = getComputedStyle(document.getElementById("redButton")).backgroundColor;
        text =  document.getElementById("redButton").textContent;
        updateColor(color);
        updateText(text);
    }
    document.querySelector("#greenButton").onclick = (event) => {
        color = getComputedStyle(document.getElementById("greenButton")).backgroundColor;
        text =  document.getElementById("greenButton").textContent;
        updateColor(color);
        updateText(text);
    }
    document.querySelector("#purpleButton").onclick = (event) => {
        color = getComputedStyle(document.getElementById("purpleButton")).backgroundColor;
        text =  document.getElementById("purpleButton").textContent;
        updateColor(color);
        updateText(text);
    }
    



}
main()