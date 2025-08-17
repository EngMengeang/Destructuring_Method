// Demo 1: Array destructuring vs traditional indexing
const demo1 = () => {
  // Before destructuring: access elements using indexes
  let person1 = ["serey", "reaksa", 20];
  let fistname = person1[0];
  let lastname = person1[1];
  let age = person1[2];
  console.log(`Fistname: ${fistname}  \nLastname: ${lastname} \nAge: ${age}`);

  console.log();

  // After destructuring: simpler syntax
  let person2 = ["chea", "Ilong", 20];
  let [fname, lname, age2] = person2; // assign array elements to variables directly
  console.log(`Fistname: ${fname}  \nLastname: ${lname} \nAge: ${age2}`);
};

// Demo 2: Skipping elements and partial destructuring
const demo2 = () => {
  let person2 = ["Manh", "Seila", 20];

  // Destructure first two elements only
  let [fname, lname] = person2;
  console.log(`Fistname: ${fname}  \nLastname: ${lname}`);
  console.log();

  let person3 = ["Huy", "Visa", 20];

  // Skip first two elements using commas, get only the third
  let [, , myAge] = person2;
  console.log(`Myage: ${myAge}`);
};

// Demo 3: Default values and updating array
const demo3 = () => {
  let person4 = ["Lun", "Pengly", 21];

  // Destructure with default value for missing element (gender)
  let [fname, lname, age, gender = 'Male'] = person4;
  console.log(`Fistname: ${fname}  \nLastname: ${lname} \nAge: ${age} \nGender: ${gender}`);

  // Add the default value to the array
  person4.push(gender);
  console.log(person4.length); // now 4
};

// Demo 4: Nested array destructuring
const demo4 = () => {
  let pet = [['Dog', 'Cat'], ['Fish', 'Bird']];

  // Destructure nested arrays into separate variables
  let [[pet1, pet2], [pet3, pet4]] = pet;
  console.log(`pet1: ${pet1}`);
  console.log(`pet2: ${pet2}`);
  console.log(`pet3: ${pet3}`);
  console.log(`pet4: ${pet4}`);
};

// Run demos
// demo1()
// demo2()
// demo3()
// demo4()
