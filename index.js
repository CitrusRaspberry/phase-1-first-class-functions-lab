const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers() {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers() {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return (fare) => fare * multiplier;
}

function fareDoubler(fare) {
  const double = createFareMultiplier(2);
  return double(fare);
}

function fareTripler(fare) {
  const triple = createFareMultiplier(3);
  return triple(fare);
}

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}
