// Handle form submission and display the BMI result to the user
function handleForm(event) {
    
    event.preventDefault(); // FORM SPECIFIC CODE - You don't need to understand this code yet,
    let form = event.target; // it will be covered in an upcoming lesson.
    let height = form.height.value; // In brief, it gives access to the form data
    let weight = form.weight.value; // END OF FORM SPECIFIC CODE
    
    
    let bmi = calculateBMI(height, weight);

    let result = document.getElementById("result");
    result.innerText = "Your BMI is " + bmi;
}


// Calculate BMI and return the result
function calculateBMI(height, weight) {
    let heightInMs = height / 100;
    let calculatedBMI = weight / (heightInMs * heightInMs);
    return calculatedBMI;
}