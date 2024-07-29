const currYear = new Date().getFullYear();

const findTheOldest = function (arr) {
  const oldest = arr
    .map((person) => ({
      year: (person.yearOfDeath || currYear) - person.yearOfBirth,
      name: person.name,
    }))
    .sort((a, b) => b.year - a.year)
    .at(0);

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
