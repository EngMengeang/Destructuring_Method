// Example 1: Basic object destructuring
const example1 = () => {
  // Create an object with staff info
  let staff = {
    fullname: "Panha",
    years: 28,
    sex: "Male",
  };

  // Destructure object into variables
  let { fullname, years, sex } = staff;

  // Log variables
  console.log(`Name : ${fullname}     \nAge:${years}    \nGender: ${sex}`);
};

// Example 2: Destructuring with renaming variables
const example2 = () => {
  let staff = {
    fullname: "Panha",
    years: 28,
    sex: "Male",
  };

  // Destructure and rename variables
  let { fullname: first, years: ageNum, sex: genderType } = staff;

  // Log renamed variables
  console.log(`Name : ${first}     \nAge:${ageNum}    \nGender: ${genderType}`);
};

// Example 3: Destructuring with nested array
const example3 = () => {
  let staff = {
    fullname: "Panha",
    years: 28,
    sex: "Male",
    address: ["Toulkork", "Boeng Salang"], // array of addresses
  };

  // Destructure object and also destructure address array
  let {
    fullname: first,
    years: ageNum,
    sex: genderType,
    address: [address1, address2], // extract elements of array
  } = staff;

  // Log variables including address elements
  console.log(
    `Name : ${first}     \nAge:${ageNum}    \nGender: ${genderType}    \nAddress1: ${address1}    \nAddress2: ${address2}`
  );
};

// Example 4: Destructuring with nested object
const example4 = () => {
  let staff = {
    fullname: "Panha",
    years: 28,
    sex: "Male",
    address: { street: "Toulkork", district: "Boeng Salang" }, // nested object
  };

  // Destructure object and nested object
  let {
    fullname: first,
    years: ageNum,
    sex: genderType,
    address: { street, district }, // extract nested object properties
  } = staff;

  // Log all variables including nested object properties
  console.log(
    `Name : ${first}     \nAge:${ageNum}    \nGender: ${genderType}    \nstreet: ${street}    \ndistrict: ${district}`
  );
};

// Example 5: Destructuring with default value and updating object
const example5 = () => {
  let person4 = {
    fname: "Lun",
    lname: "Pengly",
    age: 21,
  };

  // Destructure with default value for missing property
  let { fname, lname, age, gender = "Male" } = person4;

  // Log destructured values including default
  console.log(`Firstname: ${fname}  \nLastname: ${lname}    \nAge: ${age}   \nGender: ${gender}`);

  // Add the defaulted property to the original object
  person4.gender = gender;

  // Log the total number of properties in the object
  console.log(Object.keys(person4).length); // 4 now
};

// Run any example
// example1()
// example2()
// example3()
// example4()
example5();
