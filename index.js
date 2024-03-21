// Code your solution in this file!
// Function 1: Calculates the number of blocks from Scuber's headquarters to the pickup location.
// The headquarters is located at 42nd street.
function distanceFromHqInBlocks(someValue) {
    // Use Math.abs to ensure the result is always positive, representing the absolute distance in blocks.
    return Math.abs(someValue - 42);
  }
  
  // Function 2: Converts the number of blocks from the headquarters to feet.
  // Utilizes distanceFromHqInBlocks function and the fact that each block in Manhattan is 264 feet long.
  function distanceFromHqInFeet(someValue) {
    // Call distanceFromHqInBlocks to get the distance in blocks and multiply by 264 to convert to feet.
    return distanceFromHqInBlocks(someValue) * 264;
  }
  
  // Function 3: Calculates the distance travelled in feet, given a starting block and an ending block.
  // It accounts for the fact that each block in Manhattan is 264 feet long.
  function distanceTravelledInFeet(start, destination) {
    // Calculate the absolute difference between start and destination to ensure the result is positive,
    // then multiply by 264 to get the distance in feet.
    return Math.abs(start - destination) * 264;
  }
  
  // Function 4: Calculates the fare for the customer based on the distance travelled.
  function calculatesFarePrice(start, destination) {
    // Use distanceTravelledInFeet to get the distance between the start and destination in feet.
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    
    // Check the distance and calculate fare according to Scuber's pricing rules.
    if (distanceInFeet <= 400) {
      // The first 400 feet are free.
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      // For distances between 400 and 2000 feet, charge 2 cents per foot, excluding the first 400 feet.
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      // For distances over 2000 feet and up to 2500 feet, charge a flat fare of $25.
      return 25;
    } else {
      // For distances over 2500 feet, do not allow the ride and return a message indicating the limitation.
      return 'cannot travel that far';
    }
  }