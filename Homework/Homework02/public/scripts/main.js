function getRandomID() {
    min = 1;
    max = 9;
    return Math.floor(Math.random() * (max - min) + min);

}

function clearText() {
    document.getElementById("currentImage").src = "";
    document.getElementById("dataContainer").innerHTML = "";
    document.getElementById("name").innerHTML = "";

}

function processText(text) {
   return text.replace('.', '!!!');
}

function textToArray(text) {
    return text.split('<br>');
}
function appendText(text) {
    for (let i = 0; i < text.length; i++) {
        document.getElementById('dataContainer').innerHTML += "<span>" + text[i] + "</span>";
    }
}
function updateClient() {

    document.getElementById("anotherTestimony").addEventListener('click', function () {

        let id = getRandomID()

        fetch(`https://64486933e7eb3378ca2e0f51.mockapi.io/api/users/${id}`)
            .then(response => response.json())
            .then(data => {
      
                clearText()
                text = processText(data.message)
                text = textToArray(text)
                appendText(text)
                document.getElementById('currentImage').src = data.avatar
                document.getElementById('name').innerHTML = data.name
            })
       
    })

}

updateClient();