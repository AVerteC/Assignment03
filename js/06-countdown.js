let input = prompt("Enter a number:");
input = parseInt(input);
if (!isNaN(input) && input >= 0) {   
    for (let i = input; i >= 0; i--) {
        console.log(i);
    }
} else {
    alert("Invalid input. Please enter a valid number greater than or equal to 0.");
}