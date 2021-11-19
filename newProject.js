var Btn = document.querySelector("#Btn");
Btn.addEventListener("click", function(){


//DISPLAY BOX
document.getElementById("finalbox").style.display = "block";

//GET INPUT FROM THE FORM
var firstname = document.getElementById("firstname").value 
var lastname = document.getElementById("lastname").value 

//CHECK IF INPUT IS EMPTY
// if (firstname === ""){
//     document.getElementById("notice") = "Input Your Firstname"
// }

// MANIPULATE DOM TO SHOW USER`S FULLNAME
document.getElementById("fullname").innerHTML = firstname + " " + lastname;

// MANIPULATE DOM TO SHOW IMAGES

   document.getElementById("slideimage1").src= document.getElementById("image1").value 
    document.getElementById("slideimage2").src= document.getElementById("image2").value 
    document.getElementById("slideimage3").src= document.getElementById("image3").value 
    document.getElementById("slideimage4").src= document.getElementById("image4").value 
     document.getElementById("slideimage5").src= document.getElementById("image5").value 
})


/*Upload image from local folder*/
var loadFile = function(event) {
  var output = document.getElementById('slideimage6');
  output.src = URL.createObjectURL(event.target.files[0]); //create URL for local file
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }
};


var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  console.log('radio' + counter)
  counter++;
  if(counter > 6){
    counter = 1;
    
  }
}, 2000);

