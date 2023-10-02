updateView = function () {
    const image = document.getElementById("currentImage");
    if (image.src.match("images/hedwig.png")){

    image.src = "images/pigwidgeon.png";
    document.getElementById("owl").textContent="Pigwidgeon";

    }else{
        image.src ="images/hedwig.png";
        document.getElementById("owl").textContent="Hedwig";

    }

}

main = function () {
    document.querySelector("#selectButton").onclick = (event) => {
        updateView();
    }
}




main();