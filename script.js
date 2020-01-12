   var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numb = ["0","1", "2", "3", "4", "5", "6", "7","8", "9"];
    var special = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "_", "-", "=", "+"];
    var lowAlph =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var combo = [alphabet, lowAlph, numb, special]
       
   // User input
    var promptMe = document.getElementById("action");
    promptMe.addEventListener("click", function() {

        console.log("test");
        var howlong = prompt("how long should the password be?");
        var neednum = confirm("Do you want numbers?");
        var needspe = confirm("Do you want special characters?");

    }); 
    // funtion that generates password
    if(){
    var setup;
    for (setup = 0; setup< howlong*1; setup++) {
        var ran= Math.floor(Math.random()*10);
        console.log(setup);
    }};