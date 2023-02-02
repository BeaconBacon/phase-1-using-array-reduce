const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
}, 0);
console.log(totalBatteries(2, 0))
// Code your solution here
