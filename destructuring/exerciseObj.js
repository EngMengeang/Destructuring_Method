// EXERCISE 1: Basic object destructuring
const ExerciseObj1 = () => {

    // 1. Create an object 'student' with fullName, age, and gender
    //    Hint: use { key: value, ... } format
    // 2. Destructure the object into variables studentName, studentAge, studentGender
    //    Hint: use let { ... } = object
    // 3. Log the variables in console using template literals

}

// ExerciseObj1();


// EXERCISE 2: Destructuring with variable renaming
const ExerciseObj2 = () => {

    // 1. Create an object 'teacher' with fullName, age, and gender
    // 2. Destructure and rename variables to teacherName, teacherAge, teacherGender
    //    Hint: use colon syntax { originalKey: newVariable }
    // 3. Log the renamed variables in console

}

// ExerciseObj2();


// EXERCISE 3: Destructuring with nested array
const ExerciseObj3 = () => {

    // 1. Create an object 'employee' with fullName, age, gender, and addresses (array with 2 elements)
    //    Hint: addresses: ["address1", "address2"]
    // 2. Destructure object and array into empName, empAge, empGender, officeAddress, homeAddress
    //    Hint: use let { key, addresses: [a1, a2] } = employee
    // 3. Log all variables including address elements

}

// ExerciseObj3();


// EXERCISE 4: Destructuring with nested object
const ExerciseObj4 = () => {

    // 1. Create an object 'teacher2' with fullName, age, gender, and location (nested object with street and district)
    // 2. Destructure object and nested object into tName, tAge, tGender, street, district
    //    Hint: use let { key, location: { street, district } } = teacher2
    // 3. Log all variables including nested object properties

}

// ExerciseObj4();


// EXERCISE 5: Destructuring with default value and updating object
const ExerciseObj5 = () => {

    // 1. Create an object 'student2' with firstName, lastName, age (no gender)
    // 2. Destructure with default value for missing property gender
    //    Hint: { firstName, lastName, age, gender = "Male" }
    // 3. Log destructured variables including default value
    // 4. Add the defaulted property back to the object
    //    Hint: object.property = value
    // 5. Log the total number of properties in the object
    //    Hint: use Object.keys(obj).length

}

// ExerciseObj5();


// BONUS EXERCISE: Combined array and object destructuring

const BonusExercise = () => {

    // 1. Create an array 'staffList' with 3 objects, each representing a staff member
    //    Each object should have: fullName, age, gender, and department
    //    Example:
    //    { fullName: "Alice", age: 25, gender: "Female", department: "Math" }

    // 2. Use array destructuring to extract the first two staff members into variables: firstStaff, secondStaff

    // 3. Destructure each object to extract:
    //    - firstStaff: staff1Name, staff1Age, staff1Gender, staff1Dept
    //    - secondStaff: staff2Name, staff2Age, staff2Gender, staff2Dept

    // 4. Log all variables in a readable format:
    //    Example output:
    //    Name: Alice, Age: 25, Gender: Female, Dept: Math
    //    Name: Bob, Age: 30, Gender: Male, Dept: Science

}

// Test the bonus exercise
// BonusExercise();
