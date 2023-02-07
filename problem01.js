// mindGame is a function which takes input as a number and returns the output by performing some calculations according to the given logic.

function mindGame(inputNumber){
    if(typeof inputNumber !== 'number'){
        console.log('Please enter a valid number!');
    }
    else{
        const output = ((((inputNumber * 3) + 10) / 2) - 5);
        console.log(output);
    }
}

mindGame(5);
mindGame(50);
mindGame(33);
mindGame('ProgrammingHero');
mindGame(true);