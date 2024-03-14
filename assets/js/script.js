function validateForm() {
    var runningHours = document.getElementsByName("running")[0].value;
    var cyclingHours = document.getElementsByName("cycling")[0].value;
    var walkingHours = document.getElementsByName("walking")[0].value;

    // Entered values missing
    if (runningHours === '' || cyclingHours === '' || walkingHours === '') {
        alert('Your entered values are incomplete. Please try again.');
        return false; // Prevent form submission
    }

    // Entered values correct
    var caloriesBurned = calculateCaloriesBurned(runningHours,cyclingHours,walkingHours); 
    var kilograms = calculateKilograms(caloriesBurned);

    alert(`Thank you for using the weight loss website. \nNumber of calories burned is ${caloriesBurned} \nNumber of kilograms worked off is=${kilograms.toFixed(3)}`);
    return true; // Allow form submission
}

function calculateCaloriesBurned(runningHours,cyclingHours,walkingHours) {
    var runningCaloriesPerHour = 185;
    var cyclingCaloriesPerHour = 225;
    var walkingCaloriesPerHour = 164;

    // Calculate total calories burned
    var totalCaloriesBurned = (runningHours * runningCaloriesPerHour) + 
                              (cyclingHours * cyclingCaloriesPerHour) + 
                              (walkingHours * walkingCaloriesPerHour);

    return parseInt(totalCaloriesBurned) ;
}
function calculateKilograms(totalCaloriesBurned) {
    // A person loses 1 kg of weight for each 3800 calories burned
    var kilogramsLost = totalCaloriesBurned / 3800;
    return kilogramsLost;
}

