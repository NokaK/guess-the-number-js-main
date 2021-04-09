
let enteredNumber = document.getElementById("numbers-cont");
let submitNumber = document.getElementById("submit-number");


document.getElementById('correct').style.display = "none";
document.getElementById('low').style.display = "none";
document.getElementById('high').style.display = "none";
document.getElementById('incorrect').style.display = "none";

let randomNumber = Math.round(Math.random() * 100);

console.log(randomNumber);

    
    

submitNumber.addEventListener('click', function compare() {
    
    let numberInput = document.getElementById("numberInput").value;
  
    if (numberInput == randomNumber) {
        document.getElementById('low').style.display = "none";
        document.getElementById('high').style.display = "none";
        document.getElementById('correct').style.display = "block";
        
    } else if (numberInput < randomNumber) {
        document.getElementById('high').style.display = "none";
        document.getElementById('low').style.display = "block";
        
    } else if (numberInput > randomNumber) {
        document.getElementById('low').style.display = "none";
        document.getElementById('high').style.display = "block";
        
    } else {
        document.getElementById('incorrect').style.display = "block";
    
    }
});
