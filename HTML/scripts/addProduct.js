
var idTxt;
var nameTxt;
var priceTxt;
var descTxt;
var xhr;
var productForm;
var errorMessagePanel;

document.addEventListener("DOMContentLoaded", function(){

    console.log("DOMContentLoaded");
    idTxt = document.getElementById("idTxt");
    nameTxt = document.getElementById("nameTxt");
    priceTxt = document.getElementById("priceTxt");
    descTxt = document.getElementById("descTxt");
    errorMessagePanel = document.getElementById("errorMessagePanel");
    xhr = new XMLHttpRequest();
    productForm = document.getElementById("productForm");

    idTxt.addEventListener("invalid", function(){

        var errorMessage = document.createElement("p");
        errorMessage.appendChild(document.createTextNode("The id is required"));
        errorMessagePanel.appendChild(errorMessage);


    }, false);

    nameTxt.addEventListener("invalid", function(){
        var errorMessage = document.createElement("p");

        if(nameTxt.validity.valueMissing){
            errorMessage.appendChild(document.createTextNode("The name is required."));
        }
        else if(nameTxt.validity.patternMismatch){
            errorMessage.appendChild(document.createTextNode("Name has an Incorrect pattern"));
        }

        
        errorMessagePanel.appendChild(errorMessage);
    }, false);


    priceTxt.addEventListener("invalid", function(){

        var errorMessage = document.createElement("p");
        errorMessage.appendChild(document.createTextNode("The price is required and minimum of 10"));
        errorMessagePanel.appendChild(errorMessage);
    }, false);


}, false);


function save(){

    console.log("saving the product");
    //clear the error panel
    errorMessagePanel.innerHTML = "";


    // read the data from the inputs
    // idTxt = document.getElementById("idTxt");
    // nameTxt = document.getElementById("nameTxt");
    // priceTxt = document.getElementById("priceTxt");
    // descTxt = document.getElementById("descTxt");



    // validate the inputs

    var isFormValid =  productForm.checkValidity();
    if(!isFormValid){
        //alert("Please fill the form.")
        return;
    }

    //submit(post) to the server

    //JavaScript Object
    var data = {
        id: idTxt.value,
        name: nameTxt.value,
        price: priceTxt.value,
        description: descTxt.value
    };

    //JSON string
    var json = JSON.stringify(data);
    console.log("json", json);

    var url = "http://localhost:9000/products";

    xhr.onreadystatechange = onStateChange
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);


}

function onStateChange(){

    if(xhr.readyState === 4 && xhr.status === 201){

        // idTxt.value = "";
        // nameTxt.value = "";
        // descTxt.value = "";
        // priceTxt.value = "";
        productForm.reset();
        alert("Saved");
    }

    if(xhr.readyState === 4 && xhr.status !== 201){
        alert("Failed to save");
    }
    
}