const demo1 = () => {

    // Before destructuring
    let person1 = ["serey", "reaksa", 20] 
    let fistname = person1[0]
    let lastname = person1[1]
    let age = person1[2]
    console.log(`Fistname: ${fistname}  \nLastname: ${lastname} \nAge: ${age}`)

    console.log()
    
    // After destructuring 
    let person2 = ["chea", "Ilong", 20] 
    let [fname, lname, age2] = person2
    console.log(`Fistname: ${fname}  \nLastname: ${lname} \nAge: ${age2}`)

}

const demo2 = () => {

    let person2 = ["Manh", "Seila", 20]
    let [fname, lname] = person2
    console.log(`Fistname: ${fname}  \nLastname: ${lname} `)
    console.log()

    let person3 = ["Huy", "Visa", 20]
    let [ , , myAge] = person2
    console.log(`Myage: ${myAge}`)

}

const demo3 = () => {

    let person4 = ["Lun", "Pengly", 21]
    let [fname, lname, age, gender='Male'] = person4
    console.log(`Fistname: ${fname}  \nLastname: ${lname} \nAge: ${age} \nGender: ${gender}`)
   
    console.log(person4.length)
}

const demo4 = () => {

    let pet = [['Dog', 'Cat'], ['Fish', 'Bird']]
    let [ [pet1, pet2], [pet3, pet4] ] = pet
    console.log(`pet1: ${pet1}`)
 
}
// demo1()
// demo2()
// demo3()
// demo4()