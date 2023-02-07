// gemsToDiamond is a function which takes three parameters as input and shows the output of the code according to the given logic

function gemsToDiamond(gemsOne, gemsTwo, gemsThree){
    let gemsOnePower = 21;
    let gemsTwoPower = 32; 
    let gemsThreePower = 43;
    let limitation = 1000;

    let diamondOne = gemsOne * gemsOnePower;
    let diamondTwo = gemsTwo * gemsTwoPower;
    let diamondThree = gemsThree * gemsThreePower;
    let totalDiamondCount = diamondOne + diamondTwo + diamondThree;

    if(totalDiamondCount >= (2 * limitation)){
        let output = (totalDiamondCount - (2 * limitation));
        console.log(output);
    }
    else if(totalDiamondCount < limitation){
        console.log(totalDiamondCount);
    }
    else{
        console.log('Please enter three integer numbers!')
    }
}

gemsToDiamond(1, 1, 1);
gemsToDiamond(20, 200, 50);
gemsToDiamond(100, 5, 1);
gemsToDiamond(100, 5, 'programmingHero');
gemsToDiamond(100, 'webDeveloper', 1);
gemsToDiamond('batch7', 5, 1);

