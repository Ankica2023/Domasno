// var dayNumber = 2

// switch (dayNumber){
//     case 1:
//         console.log("The day is Monday!")
//         break;
//     case 2:
//         console.log("The day is Tuesday!")
//         break
//     case 3:
//         console.log("The day is Wednesday!")
//     case 4:
//         console.log("The day is Thursday!")
//         break
//     case 5:
//         console.log("The day is Friday!")
//         break
//     case 6:
//         console.log("The day is Saturday!")
//         break
//     case 7:
//         console.log("The day is Sunday!")
//         break
//     default:
//         console.log("Invalid day number. Please enter a number between 1 and 7!")
// }

//funkcii
//funkcija bez parametri
// function ime_na_funkcija(){
//     console.log("Hello World!")
// }

// ime_na_funkcija()

// function greeting(name, age, phrase){
//     console.log(phase+"my name is"+name+"and i am"+age)
// }

// greeting("Ankica", 49, "Hello")

// function zbir(a,b){
//     return a+b
// }
// console.log(zbir(5,5))
// var res = zbir(5,5)
// console.log(res)

//fat arrow functions =>

// var luckyNumber = 7

// const multiplyByTen = () => {//0 parametri i poveke naredbi
//     console.log(luckyNumber*10)
// }

// multiplyByTen()

// let x = a=>a+10//ima eden parametar i edna naredba
// console.log(x(5))

// let suma = (a,b)=>a+b//2 parametri i edna naredba
// console.log(suma(5,5))

// let proizvod = (a,b)=>{
//     console.log(a*b)
//     console.log("Zdravo")
// }

// proizvod(5,3)
// console.log(x(100))
// console.log(suma(30,90))
// luckyNumber=10
// multiplyByTen()

// let globalNum = 10

// function checkScope(){
//     let localNum = globalNum
//     console.log(localNum)
// }
// checkScope(
//     console.log(globalNum == localNum)
// )

// var broj1 = 10
// var broj2 = 40

// function pogolemBroj(br1, br2){
//     if(br1 > br2){
//         console.log(br1+"e pogolem od"+br2)
//     }else{
//         console.log(br2 + "e pogolem od"+br1)
//     }
//     else{
//         console.log("broevite se ednakvi")
//     }
// }

// pogolemBroj(10,40)
// pogolemBroj(10,10)
// pogolemBroj(30,10)

//Nizi/Listi

// var niza = new Array(1,2,3,4)
// console.log(niza)

// var niza1 = {3,2,5,0,19}
// console.log(niza1)

var ovosja =  [ "orange","banana","lime","apple", "cherry", "strawberry" ]
console.log(ovosja)
console.log(ovosja[0])

let idx = 3
console.log(ovosja[idx])

//pop -> brisenje na posledniot element od nizata
let lastElement = ovosja.pop()
console.log(lastElement)
console.log(ovosja)

//push -> dodavanje na element na kraj od nizata
ovosja.push("kiwi")
console.log(ovosja)

//shift -> se koristi za brisenje na prviot element od nizata
ovosja.shift()
console.log(ovosja)

//unshift -> dodavanje na element na pocetok od nizata
ovosja.unshift("melon")
console.log(ovosja)

//toString prikaz na site elementi vo nizata oddeleni so zapirka
console.log(ovosja.toString())

//slice -> prikaz na del od nizata, prviot parametar e pocetokot, a vtoriot e krajot od nizata
console.log(ovosja.slice(1,4))

//slice -> so 2 parametri, prviot e od koj element, vtoriot e kolku elementi da izbrise
console.log(ovosja.slice(2,2))
console.log(ovosja)

//splice so 3 ili poveke parametri, prviot e od koj element, vtoriot e do koj element, site ostanati gi dodavame na toa mesto
console.log(ovosja.splice(2,0,"peach", "berry", "banana", "pear"))
console.log(ovosja)

//includes -> proveruva dali elementot postoi vo nizata ili ne
console.log(ovosja.includes("banana"))

//sort -> ja sortira nizata po broevi i bukvi
console.log(ovosja.sort())

//concat -> spojuvanje na nizi
let broevi = [1,2,3,4]

let novaNiza = ovosja.concat(broevi)
console.log(novaNiza.sort())

//join -> gi pecati elementite od nizata oddeleni so nas separator
console.log(ovosja.join(" - "))

//funkcii za stringovi
let example = "Semos Edukacija"

//substring -> slice za stringovi 
console.log(example.substring(2,6))

//substr -> param -> kolku e dolzinata
console.log(example.substr(2,6))

//replace -> zamena na del od string
console.log(example.replace("Edukacija", "education"))

//trim -> gi brise praznite mesta na kraevite
let test = example.trim()
console.log(test)

//split -> kreira nova niza od elementite podeleni spored odreden splitter
let deloviodString = example.split(" ")
console.log(deloviodString)