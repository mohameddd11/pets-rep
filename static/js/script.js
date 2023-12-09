// e is event
document.getElementById("upload-form").addEventListener("submit", function(e){ 

    e.preventDefault();
    
    let formData = new FormData(this);

    fetch("/upload", {
        method:"post",
        body:formData
    })
    .then(reponse => reponse.json())
    .then (data => {
        document.getElementById('result-wrapper').innerText = 'result: '+ data.result;
    })

    .catch(error =>{
        console.error(error);

    });

});