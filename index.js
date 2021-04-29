// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    const firstTwo = [drivers[0], drivers[1]];
    return firstTwo;
};

const returnLastTwoDrivers = function(drivers){
    const lastTwo = [drivers[(drivers.length - 2)], drivers[(drivers.length - 1)]];
    return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier){
    return function(fare){
        return fare * fareMultiplier;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnDrivers){
    return returnDrivers(drivers);
}

