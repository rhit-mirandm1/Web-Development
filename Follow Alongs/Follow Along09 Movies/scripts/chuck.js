document.addEventListener('DOMContentLoaded',(event)=>{
    const fetchDataButton = document.getElementById("fetchDataButton");
    fetchDataButton.addEventListener("click",function() {
        const dataIndex = dataIndexInput.value;
        if (dataIndex){
            fetch(`https://api.chucknorris.io/jokes/random?category=${dataIndex}`)
            .then(response=>response.json())
            .then(data =>{
                let quote = data.value;
                dataDisplay.innerHTML = `<strong>Joke:</strong> ${quote} `;
                console.log(quote);
            })
            .catch(error=>{
                console.error("Error fetching data:  ", error);
                dataDiplay.innerHTML="Error fetching data. Please try again.";
            })
            .finally(() =>  {
                $("#dataIndexModal").modal('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            });
    
    };
    });
    const dataIndexInput = document.getElementById("dataIndexInput");
    const dataDisplay = document.getElementById("dataDisplay");

    async function fetchText(){
        let response = await fetch('https:api.chucknorris.io/jokes/random');
        let data = await response.json();
        let quote = data.value;
        const dataDisplay = document.getElementById("dataDisplay");
        dataDisplay.innerHTML = `<strong>Joke:</strong> ${quote} `;
    
        
    
    }
    
    fetchText();
})


