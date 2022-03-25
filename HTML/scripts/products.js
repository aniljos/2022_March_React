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

            //update the DOM
            debugger;
            var productsTBody = document.getElementById("productsTBody");
            products.forEach(product => {
                
                var tr = document.createElement("tr");

                var id_Td = document.createElement("td");
                id_Td.appendChild(document.createTextNode(product.id));
                tr.appendChild(id_Td);

                var name_Td = document.createElement("td");
                name_Td.appendChild(document.createTextNode(product.name));
                tr.appendChild(name_Td);

                var price_Td = document.createElement("td");
                price_Td.appendChild(document.createTextNode(product.price));
                tr.appendChild(price_Td);

                var desc_Td = document.createElement("td");
                desc_Td.appendChild(document.createTextNode(product.description));
                tr.appendChild(desc_Td);

                productsTBody.appendChild(tr);


            });

            
        }
        else{
            console.log("status", xhr.status);
        }
    }
}
