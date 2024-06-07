function submitFormulario(){    

    var jsonData = JSON.stringify({
        "names": [
            document.getElementById("nome1").value ,
            document.getElementById("nome2").value ,
            document.getElementById("nome3").value ,
            document.getElementById("nome4").value ,
            document.getElementById("nome5").value 
        ],
        "message": document.getElementById("historia").value
    });
console.log(jsonData);

        //const resposta = await 
        
        fetch("https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact", {
        method: "POST",
        body:  jsonData,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}