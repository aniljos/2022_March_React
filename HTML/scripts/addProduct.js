
var idTxt;
var nameTxt;
var priceTxt;
var descTxt;
var xhr = new XMLHttpRequest();

function save(){

    console.log("saving the product");

    // read the data from the inputs
    idTxt = document.getElementById("idTxt");
    nameTxt = document.getElementById("nameTxt");
    priceTxt = document.getElementById("priceTxt");
    descTxt = document.getElementById("descTxt");



    // validate the inputs

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
        
        idTxt.value = "";
        nameTxt.value = "";
        descTxt.value = "";
        priceTxt.value = "";

        alert("Saved");
    }

    if(xhr.readyState === 4 && xhr.status !== 201){
        alert("Failed to save");
    }
    
}