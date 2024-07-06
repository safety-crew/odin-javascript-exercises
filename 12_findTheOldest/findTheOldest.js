const findTheOldest = function (people) {
  let oldestPerson = people[0];

  if (people[0].yearOfDeath === undefined) {
    people[0].yearOfDeath = 2024;
  }

  let largestAge = people[0].yearOfDeath - people[0].yearOfBirth;

  for (let index = 1; index < people.length; index++) {
    if (people[index].yearOfDeath === undefined) {
      people[index].yearOfDeath = 2024;
    }
    if (people[index].yearOfDeath - people[index].yearOfBirth > largestAge) {
      oldestPerson = people[index];
      largestAge = people[index].yearOfDeath - people[index].yearOfBirth;
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
