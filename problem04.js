// findingBadData is a function which takes input as an array and returns the count of the bad data. The datas which are less than 0 are considered as bad data.

function findingBadData(array) {
    
    let negatives = [];
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if(element < 0) {
            negatives.push(element);
            count++;
        }
        else if(element >= 0){
            continue;
        }
        else{
            return 'Please enter a valid array!';
        }
    }
    return count;
}

console.log(findingBadData([1, 2, 5]));
console.log(findingBadData([2, -5, -7, -13]));
console.log(findingBadData([-4, -9, -5, -33, -55]));
console.log(findingBadData('programmingHero'));
