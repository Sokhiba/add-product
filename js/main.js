var database=[];
var selectedIndex= -1;
function addProduct() {
 var productName = document.getElementById('product-name').value;
 var productPrice = document.getElementById('product-price').value;
 var productDate = document.getElementById('product-date').value;
 var productColor = document.getElementById('product-color').value;

 if (productName.length>0 && productPrice.length>0 && productDate.length>0) {

     document.getElementById('product-name').value = "";
     document.getElementById('product-price').value = "";
     document.getElementById('product-date').value = "";
     document.getElementById('product-color').value = "";
     var newProduct = {
         name: productName,
         price: productPrice,
         date: productDate,
         color: productColor
     };
     if (selectedIndex>=0){
         database.splice(selectedIndex, 1, newProduct);
         selectedIndex=-1;
         document.getElementById('addButton').innerHTML="Add product";
     }
     else{
         database.push(newProduct);
     }

     drawPage();

 } else{
 $(".toast").toast('show')
}
}

function Delete(son) {
    if (selectedIndex<0){
        database.splice(son,1);
        
        drawPage();
        console.log(database);
    } else{
        alert("O'zgartirishni oxirigacha bajaring!");
    }



}

function edit(index) {
document.getElementById('product-name').value=database[index].name;
document.getElementById('product-price').value=database[index].price;
document.getElementById('product-date').value=database[index].date;
document.getElementById('product-color').value=database[index].color;

document.getElementById('addButton').innerHTML="Save";
selectedIndex=index;



}
function drawPage() {
    var content="";
    for (var i=0; i<database.length; i++){

        content +=
            " <div class='col-4 mt-5'>" +
            "<div class='card'>" +
            "<div class='card-header'>" +
            "<h3>"+database[i].name+"</h3>" +
            "      </div>" +
            "<div class='card-body'>" +
            "<p>Color: <b style='color: "+database[i].color+"'>"+ database[i].color+"</b></p>" +
            "<p>Price: <b >"+database[i].price+"</b></p>" +
            "<p>Expiration date: <b >"+database[i].date+"</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between'>" +
            "<button type='button' class='btn btn-primary' onclick='edit("+i+")'>Edit</button>" +
            "<button type='button' class='btn btn-danger' onclick='Delete(" + i +" )'>Delete</button>" +
            "</div>" +
            "</div>" +
            "</div> "
    }

    document.getElementById('content').innerHTML = content;
}