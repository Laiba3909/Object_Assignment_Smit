// Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;

var itemsArray = [
    {name: "juice", price: 50, quantity: 3},
    {name: "cookie", price: 30, quantity: 9},
    {name: "shirt", price: 880, quantity: 1},
    {name: "pen", price: 100, quantity: 2}
];

let totalPrice = 0;
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  ">   Question:1 </h1>`)
itemsArray.forEach(item => {
    const itemTotal = item.price * item.quantity;
    document.write(`<h4  style = "color: white;  font-size: 30px; margin: 26px;  "> ${item.name}: Total Price = ${itemTotal} </h4> `);
    totalPrice += itemTotal;
});

document.write(`<h4  style = "color: white;  font-size: 30px; margin: 26px; "> Total Price of all items: ${totalPrice} </h4>`);

// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  ">   Question:2 </h1>`)
const person = {
    name: "laiba",
    email:"laibanoman135@gmail.com",
    password: 98768,
    age: 18,
    gender: "female",
    city: "karachi",
    country: "Pakistan"
   
}

let countryExist = "country" in person
let ageExist = "age" in person
let firstNameExist = "firstName" in person
let lastNameExist = "lastName" in person



document.write(`<h4 style = "color: white;  font-size: 30px; margin: 26px; "> Age:${ageExist ? person.age : "N/A"} <br> Country:${countryExist ? person.country: "N/A"} <br> firstName:${firstNameExist ?person.firstName : "N/A"}<br> lastName:${lastNameExist ? person.lastName:"N/A"}</h4> `)


// 3. Create a constructor function with some properties. Now
// create multiple records using the constructor
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  ">   Question:3 </h1>`)
function Constructor(name,email,age,country,city){
    this.name = name
    this.email = email
    this.age = age
    this.country = country
    this.city = city
}

let persons = new Constructor("laiba","laibanoman135@gmail.com",18,"Pakistan","karachi")

document.write(`<h4  style = "color: white;  font-size: 30px; margin: 26px; ">My name is ${persons.name} <br> My email is ${persons.email} <br> My age is ${persons.age} <br> My country is ${persons.country} <br> My city is ${persons.city}</h4>`);


// 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:
//  use select box for education and profession,
//  use radio box for gender
// Bonus : use can use localStorage to save records.

document.getElementById('submitForm').addEventListener('submit', function(event){

event.preventDefault()

let name = document.getElementById('name').value
let gender = document.querySelector('input[name="Gender"]:checked').value
let adress = document.getElementById('adress').value
let education = document.getElementById('education').value
let profession = document.getElementById('profession').value

let userForm = {
    user_name: name,
    user_gender: gender,
    user_adress : adress,
    user_education:education,
    user_profession: profession
}

localStorage.setItem('userInfo',JSON.stringify(userForm))
alert('your form has been submit')


})
  
let saved = (JSON.parse(localStorage.getItem('userInfo')))
if(saved){
    console.log(`Name: ${saved.user_name}`);
    console.log(`Gender: ${saved.user_gender}`);
    console.log(`Adress: ${saved.user_adress}`);
    console.log(`Education: ${saved.user_education}`);
    console.log(`Profession: ${saved.user_profession}`);
    
}