// isLGSeven is a function which returns the difference between the numbers if any of the input numbers are less then or equal to seven, otherwise it returns double of the multiplication if the input number is greater than seven.

function isLGSeven(inputNumber) {
    if(inputNumber < 7){
        return inputNumber - 7;
    }
    else if(inputNumber => 7){
        return inputNumber * 2;
    }
    else{
        return 'Please input a valid number!';
    }
}

console.log(isLGSeven(6));
console.log(isLGSeven(-15));
console.log(isLGSeven(15));
console.log(isLGSeven('developer'));
console.log(isLGSeven('programmingHero'));