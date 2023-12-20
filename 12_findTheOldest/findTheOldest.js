const findTheOldest = function(people) {
  let oldestPerson = [];
  let oldestAge = 0;
  let age = 0;
  for (person of people) {
    if (!('yearOfDeath' in person)) {
      age = 2023 - person.yearOfBirth;
    } else {
        let yearOfBirth = person.yearOfBirth;
        let yearOfDeath = person.yearOfDeath;
        age = yearOfDeath - yearOfBirth;
      }
      if (age > oldestAge) {
        oldestAge = age;
        oldestPerson[0] = person;
      }
  }
  return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
