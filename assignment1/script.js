$(document).ready(function(){
    // prints numbers from 1 to 100
    for (let i = 1; i < 101; i++) { 
        if (i % 3==0 && i % 5==0) { // special case 1
            console.log("Trojka in petka");
            $("body").append("<p>Trojka in petka</p>");

        } else if (i % 3==0) { // special case 2
            console.log("Trojka");
            $("body").append("<p>Trojka</p>");

        } else if (i % 5==0) { // special case 3
            console.log("Petka");
            $("body").append("<p>Petka</p>");
            
        } else {
            console.log(i);
            $("body").append("<p>"+i+"</p>");
        }
    }
});