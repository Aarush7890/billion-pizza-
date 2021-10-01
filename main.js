var pizza_list_arry = [
    "1. Margherita",
    "2. Double Cheese Margherita",
    "3. Peppy Paneer",
    "4. Mexican Green Wave",
    "5. Deluxe Veggie",
    "6. Veg Extravaganza",
    "7. Farm House",
    "8. CHEESE N CORN",
    "9.   Indi Tandoori Paneer"
]

function getmenu() {
    var htmldata;
    htmldata = "<ol class ='menulist'>"
    pizza_list_arry.sort();
    for (var i = 0; i < pizza_list_arry.length; i++) {
        htmldata = htmldata + '<li>' + pizza_list_arry[i] + '<li>';
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("displa_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    htmldata = "<section class ='cards'>";
    pizza_list_arry.sort();
    for (var i = 0; i < pizza_list_arry.length; i++) {
        htmldata = htmldata + '<div class ="cards">' + '<img src = "https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw=" style = "width: 100px; hight: 100px; " />' + pizza_list_arry[i] + '</div>';
    }
    htmldata = htmldata + "</section>"
    document.getElementById("displa_addedmenu").innerHTML = htmldata;
}
function add_top(){
var item =  document.getElementById("add_item").value;
pizza_list_arry.push (item);
add_item();   
}