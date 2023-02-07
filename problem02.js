// evenOdd is a function which checks the given string is an even string or odd. If it is an even string, it prints 'even, otherwise it prints 'odd'.

function evenOdd(inputString) {
    if (typeof inputString !== 'string') {
        console.log('Please enter a valid string!');
    }
    else if (inputString.length % 2 === 0) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
}

evenOdd('Phero');
evenOdd('Batch7');
evenOdd('chatgpt');
evenOdd(true);
evenOdd(75);