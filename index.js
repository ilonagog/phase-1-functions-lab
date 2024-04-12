// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let headquarters = 42;
  return distance - headquarters;
}
function distanceFromHqInFeet(distanceFeet) {
  return distanceFromHqInBlocks(distanceFeet) * 264;
}
