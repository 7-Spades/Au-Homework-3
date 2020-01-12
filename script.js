   var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numb = ["0","1", "2", "3", "4", "5", "6", "7","8", "9"];
    var special = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "_", "-", "=", "+"];
    var lowAlph =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var combo = [alphabet, lowAlph, numb, special]
    console.log(alphabet, numb, special, lowAlph);
       
   // User input
    var promptMe= document.getElementById("action");
    promptMe.addEventListener("click", function() {
    
        var startup = confirm("Do you want a password?");
        if(startup === false) {
            return false;
        };

        var howlong = prompt("how long should the password be?");
        var neednum = confirm("Do you want numbers?");
        var needspe = confirm("Do you want special characters?");
        if(startup === true){

            if(howlong > " " && neednum === true && needspe === true){
                console.log(howlong, neednum, needspe);
                return startup, howlong, neednum, needspe;
            }else if(howlong > " " && neednum === true && needspe === false ){
                console.log(howlong, neednum);
                return startup, howlong, neednum;
            }else if(howlong > " " && needspe === true && neednum === false){
                console.log(howlong, needspe)
                return startup, howlong, neednum;
            }else if(howlong > "" && neednum === false && neednum ===false){
                console.log(howlong)
                return startup, howlong;
            }else{
                alert("Invalid Input!")
            };
        
        };

    });
    // funtion that generates password
    var setup;
    for (setup = 0; setup< combo.length; setup++) {
        var ran= Math.floor(Math.random()*4);
        console.log(ran);

        if(ran === 0){
            var guess01= Math.floor(Math.random()*25); 
            console.log(guess01, alphabet[guess01]);
            var pen1 = document.getElementsByClassName("lead");
            pen1[0].textContent= alphabet.indexOf(guess01);
            document.body.appendChild(pen1[0]);
        };

        if(ran === 1){
            var guess02= Math.floor(Math.random()*10); 
            console.log(guess02, numb[guess02]);
            var pen2 = document.getElementsByClassName("lead");
            pen2[0].textContent= numb.indexOf(guess02);
            document.body.appendChild(pen2[0]);
        };

        if(ran === 2){
            var guess03= Math.floor(Math.random()*13); 
            console.log(guess03, special[guess03]);
            var pen3 = document.getElementsByClassName("lead");
            pen3[0].textContent= numb.indexOf(guess01);
            document.body.appendChild(pen3[0]);
        };

        if(ran === 3){
            var guess04= Math.floor(Math.random()*25); 
            console.log(guess04, lowAlph[guess04]);
            var pen4 = document.getElementsByClassName("lead");
            pen4[0].textContent= lowAlph.indexOf(guess04);
            document.body.appendChild(pen4[0]);
        };
    };
