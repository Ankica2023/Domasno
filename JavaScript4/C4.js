//i = 1+ 4 //i+=4

//Build in high order functions in JS

//forEach
var fruits = ["apple","banana","cherry","mango"]
console.log(fruits)

// for(Let i =0;i<fruits.length; i++)
// {
// fruits.forEach(function (fruit))
// }

// 1 nacin

// fruits.forEach(function (fruit)){
// console.log(fruit)
// }

// 2 nacin

// function pecati_ovosje(fruit){
//     console.log(fruit)
// }

// fruits.forEach(pecati_ovosje)

// 3 nacin

fruits.forEach(fruit=>console.log(i, fruit))
fruits.forEach((fruit,i)=>console.log(i, fruit)) // 1 e indeksot na elementot, ovoj nacin se koristi samo ako imame potreba da go pecatime indeksot

//map - kreira nova niza so modificirani elementi
var numberArr = [1,2,3,4,5,6]
var newArray=numberArr.map(number=>number+1)
console.log(numberArr)
console.log(newArray)

var students = [{name:"Petko",surname:"Petkovski"},{name:"Martin", surname: "Martinovski"}]
var studentName = students.map(student=>student.name)

console.log(students)
console.log(studentNames)

//sort - podreduvannje na elementite od nizata spored nekoe pravilo
var randomArr = [10,3,9,99,4,13,24]
var sortedArr = randomArr.sort((a,b)=>a-b)
console.log(sortedArr)

//reduce - (od primerok) zbir na site broevi od nizata na edna vrednost
var sumOfRandomNumber = randomArr.reduce((acc,curr)=>acc+curr,0)
console.log(sumOfRandomNumber)

//filter - kreira nova niza od filtrirame elementite spored odredeno pravilo
var numberBiggerThan10 = randomArr.filter(num => num>10)
console.log(numberBiggerThan10)

//some = test dali nekoj uslov e isplonet za elementite od nizata
var numberArr = [11,1,3,17,10,30,87,11]
var numArrHasEvanNumber = numArr.some(num=>num%2==0)
console.log(numArrHasEvenNumber)

//for of - modifikacija na forEach za nizi
var niza = [1,2,4,10,100]
for(element of niza){
    console.log(element)
}

//for in - izminuvanje na elementi od Obj vo prevod: za sekoj kluc vo objektot
var obj = {name: "Petko", surname:"Petkovski"}
for(key in obj){
    console.log(obj[key])
}

//Ternary operator - skraten id-else uslov
var checkSum = num=>{
    return num % 2 == 0 ? "Even" : "Odd" // uslovot e pred ? isplonet uslov : ( vo sprotivno ) neispolnet uslov
}
var num = 10
if(num%2 == 0){
    return ("Even")
}else{
    return "Odd"
}

console.log(checkSum(10))

//Spread operator (...)
var originalArray = [10,20,30,40,50]
var copy = originalArray
copy[0]=100
console.log(originalArray)
console.log(copy)
//kreiranje na nova niza so site elementi od originalnata. Namesto da gi kopirame elementite so ... gi zemame site elementi od prvata niza
var copiedArray = [...originalArray]//hard copy
copiedArray[0]=100
console.log(copiedArray)

var arr1 = [1,2,3,4]
var arr2 = [5,6,7,8]
var copiedArray = [...arr1,...arr2]//nova niza od arr1 i arr2
console.log(copiedArray)

function sum (a,b,c){
    return a*b*c
}

var sumArray = [10,20,30]
const result = sum(...sumArray)
console.log(result)

//Destruring
var [firstNumber, secondNumber, thirdNumber]=[1,2,3]
console.log(firstNumber, thirdNumber)

const person = {
    firstname:"John",
    lastName:"Doe",
    age:33
}

const{firstname, age:personAge} = person
console.log(firstname, personAge)


