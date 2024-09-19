console.log("Hello");

// 1. Write a function that takes an interger 'minnutes' and convert it to seconds.

function convert(minnutes) {
return  minnutes * 60;
}
console.log(convert(2));


// 2. Write a function that takes the base and height of a triangle and return its area.

function triangle(base, height) {
    return  (base * height)/2;
}
console.log(triangle(10,10));


// 3. create a function that takes the age in years and returns the age in days.

function cacAge(age) {
    return age * 365;
}
console.log(cacAge(20));


// 4. Create a function that takes length and width and find the perimeter of a rectangle.

function findPerimter(length, width){
    return 2 * (width + length);
}
console.log(findPerimter(6,7));


// 5. A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

function nameString(name) {
    let a = "Edabit";
    let result = name + a;
    return result
}
console.log(nameString("Hello"));

// 6. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(a,b) {
   return (a + b)<100 ? true : false;

}
console.log(lessThan100(88,97));

// 7. Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

function sumOfAngle(n) {
    return (n-2)*180;
}
console.log(sumOfAngle(3));


//.8 In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

function animals(chickens, cows, pigs){
    let chickensleg = chickens * 2;
    let cowsleg = cows * 4;
    let pigsleg = pigs * 4;
    return chickensleg + cowsleg + pigsleg;
}
console.log(animals(2, 3, 5));