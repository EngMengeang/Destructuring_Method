// ex1
const Exercise1 = () => {

    let person = ["John", "Smith", 20] 
    // 2. use array destructuring to unpack 'person' into:
    //    - fname
    //    - lname
    //    - age
    // 3. display fname, lname, and age in the console

}

// Call the function to test
Exercise1();


// ex2
const Exercise2 = (name, age, gender) => {

    // 1. create a variable named 'staff' as an array containing the 3 parameters
    // 2. use array destructuring to unpack 'staff' into:
    //    - staff_name
    //    - staff_age
    //    - staff_gender
    // 3. display staff_name, staff_age, and staff_gender in the console

}

// Call the function with sample data
Exercise2("Alice", 25, "Female");


// ex3
const Exercise3 = (firstname, lastname, age) => {

    // 1. create a variable named 'employee' as an array containing:
    //    - the full name by combining firstname and lastname
    //    - the age
    // 2. use array destructuring to unpack 'employee' into:
    //    - fullname
    //    - employee_age
    //    - gender (with default value "Male")
    // 3. add the gender value into the 'employee' array using .push()
    // 4. display fullname, employee_age, and gender in console

}

// Call the function with sample data
Exercise3("Duo", "Sarth", 19);