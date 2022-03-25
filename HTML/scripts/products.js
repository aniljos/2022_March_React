console.log("Hello...");
var xhr = new XMLHttpRequest();

function loadProducts(){
    console.log("document loaded");
    //Fetch the products from the server
    var url = "http://localhost:9000/products";
    xhr.onreadystatechange = onStateChange; // register a callback
    xhr.open("GET", url, true);
    
    xhr.send(null); // sends the request(empty request)
    
}

//callback
function onStateChange(){

    console.log("state: ", xhr.readyState);

   


    if(xhr.readyState === 4){
        if(xhr.status === 200){

            var responseJSON = xhr.responseText;
            console.log("sucessfull", responseJSON);
            var products = JSON.parse(responseJSON);
            console.log("Products", products);
        }
        else{
            console.log("status", xhr.status);
        }
    }
}
