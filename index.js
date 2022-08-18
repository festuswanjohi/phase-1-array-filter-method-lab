// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(array, driver) {
  return array.filter(function (mydriver) {
    return mydriver.toLowerCase() === driver.toLowerCase();
  });
}
function fuzzyMatch(array, driver) {
  return array.filter(function (mydriver) {
    return (
      mydriver.toLowerCase().includes(driver.toLowerCase(), 0) &&
      !mydriver.toLowerCase().includes(driver.toLowerCase(), 1)
    );
  });
}
function matchName(array, driver) {
  return array.filter((mydriver) => mydriver.name === driver);
}
