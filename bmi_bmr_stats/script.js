//intial page load
inputFields();

//event listeners
document.getElementById("bmiCalc").addEventListener('click',bmiCalc);
document.getElementById("bmrCalc").addEventListener('click',bmrCalc);
document.getElementById("calorieBtn").addEventListener('click',dailyNeedsCalc);

//Buttons
let bmiButton = document.getElementById('bmiCalc');
let bmrButton = document.getElementById('bmrCalc');
let calorieButton = document.getElementById("calorieBtn");



//disable buttons initially
toggleButtons(bmiButton,"true");
toggleButtons(bmrButton,"true");
toggleButtons(calorieButton,"true");

//input fields

function inputFields() {
//bmi
let bmiWeight = document.getElementById('bmiWeight');
//bmr
let bmrWeight = document.getElementById('bmrAge');

bmiWeight.addEventListener('input', function () {
    toggleButtons(bmiButton,'false');
})

bmrWeight.addEventListener('input', function () {
    toggleButtons(bmrButton,'false');
})

}//end inputfields


function toggleButtons(buttonToDisable,handleToggle) {
    if(handleToggle === "false")
    {
        handleToggle = false;
    }
    
    else{
        handleToggle = true;
    }
    
    buttonToDisable.disabled = handleToggle;
    }

//Calculations
function bmiCalc() {
    let weight,height,bmi

    weight = document.getElementById('bmiWeight').value
    height = document.getElementById('bmiHeight').value

    //Correct formula
    bmi = (weight / (Math.pow(height,2))) * 703;
    console.log(bmi);
    document.getElementById('bmiInfo').innerText = "Your BMI is : " + bmi;
    document.getElementById('bmrWeight').value = weight;
    document.getElementById('bmrHeight').value = height;

}

function bmrCalc() {
let weight = document.getElementById('bmrWeight').value;
let height = document.getElementById('bmrHeight').value;
let age = document.getElementById('bmrAge').value;

//convert to kg
weight /= 2.205;
height *= 2.54;

//Gender call
genderMath();

//Correct formula
 bmr = 10 * weight + 6.25 * height -5 * age + genderNumber;
console.log("bmr :" + bmr);
document.getElementById('bmrInfo').innerText = "Your Basil Metabolic Rate : " + bmr;
toggleButtons(calorieButton, "false");
}

function dailyNeedsCalc() {
    //multiplyer
    activityMultiplyer();
    
    //Daily needs call
    caloireNeeds(bmr,multiplyer);
}

//----------------------HELPER FUNCTIONS -----------------------//
//Daily Calorie Needs
function caloireNeeds(bmr) {
    let needs = bmr * multiplyer;

console.log("Caloric needs : " + needs);
document.getElementById('dailyNeeds').innerHTML = "Your daily Caloric needs : " + needs;

}

//Misc
function genderMath() {
    let sel = document.getElementById("genders");
    if(sel.value == 0)
    {
        genderNumber = 5;
    }
    else {
        genderNumber = -151;
    }
}

function activityMultiplyer() {
    let sel = document.getElementById("activity");
    console.log("value "  + sel.value);
    if(sel.value == 0) {
        multiplyer = 1.2;
    }
    else if(sel.value == 1){
        multiplyer = 1.375
    }
    else if(sel.value == 2){
        multiplyer = 1.55
    }
    else if(sel.value == 3){
        multiplyer = 1.725
    }
    else {
        multiplyer = 1.9
    }

}//end dailyCalorie Math

//Error Handling

//Calculate Bmi

//Calculate BMR

//Calculate Daily needs - Shouldn't even be active til BMR is figured out

