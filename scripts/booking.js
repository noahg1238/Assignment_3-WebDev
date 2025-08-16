/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 35;
let numOfDays = 0;
let totalCost;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
document.getElementById("monday").addEventListener("click", function() {
    if (!this.classList.contains("clicked")){
        numOfDays += 1;
        this.classList.add("clicked");
        calculate(dailyRate,numOfDays);
    }
});
document.getElementById("tuesday").addEventListener("click", function() {
    if (!this.classList.contains("clicked")){
        numOfDays += 1;
        this.classList.add("clicked");
        calculate(dailyRate,numOfDays);
    }
});
document.getElementById("wednesday").addEventListener("click", function() {
    if (!this.classList.contains("clicked")){
        numOfDays += 1;
        this.classList.add("clicked");
        calculate(dailyRate,numOfDays);
    }
});
document.getElementById("thursday").addEventListener("click", function() {
    if (!this.classList.contains("clicked")){
        numOfDays += 1;
        this.classList.add("clicked");
        calculate(dailyRate,numOfDays);
    }
});
document.getElementById("friday").addEventListener("click", function() {
    if (!this.classList.contains("clicked")){
        numOfDays += 1;
        this.classList.add("clicked");
        calculate(dailyRate,numOfDays);
    }
});





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
document.getElementById("clear-button").addEventListener("click", function() {
    document.getElementById("monday").classList.remove('clicked');
    document.getElementById("tuesday").classList.remove('clicked');
    document.getElementById("wednesday").classList.remove('clicked');
    document.getElementById("thursday").classList.remove('clicked');
    document.getElementById("friday").classList.remove('clicked');
    numOfDays = 0;
    totalCost = 0;
    calculate(dailyRate,numOfDays);
});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
document.getElementById("half").addEventListener("click", function() {
    dailyRate = 20;
    this.classList.add("clicked");
    document.getElementById("full").classList.remove("clicked");
    calculate(dailyRate,numOfDays);
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

document.getElementById("full").addEventListener("click", function() {
    dailyRate = 35;
    this.classList.add("clicked");
    document.getElementById("half").classList.remove("clicked");
    calculate(dailyRate,numOfDays);
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(dailyRate,numOfDays){
    let cost = dailyRate * numOfDays;
    document.getElementById("calculated-cost").innerHTML = cost;
}
