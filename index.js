// Code your solution here
// findMatching function
let drivers = [];
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // fuzzyMatch function
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // matchName function
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  