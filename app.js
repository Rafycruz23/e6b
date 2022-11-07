
function returnTotalFuel(){

let timeInMin = document.getElementById("timeInMin").value; //takes value to be used
let fuelPerHour = document.getElementById("fuelPerHour").value;//same as above

/*console.log(timeInMin, fuelPerHour);*/

let total = timeInMin * fuelPerHour;
document.getElementById("totalFuel").innerHTML = total;
console.log(total);
}