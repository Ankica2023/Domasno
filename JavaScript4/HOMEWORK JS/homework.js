var gradovi = [{name: "Tokyo", population: 39139191 }, {name: "Shanghai", population: 24817104}, {name: "Delhi", population: 32299141}, {name: "Seul", population: 26212104}, {name: "Shanghai", population: 24807103}, {name: "Sao Paulo", population: 22322552}]
console.log(gradovi)

var populacijaNaGradovi = gradovi.map(gradovi => gradovi.population)
console.log(populacijaNaGradovi)

var populacijaNaGradovi 
var sortedPopulation = populacijaNaGradovi.sort((a,b)=> b-a)
console.log(sortedPopulation)

sortedPopulation.splice(3,5)
console.log(sortedPopulation)

var sumOfPopulation = populacijaNaGradovi.reduce((acc,curr)=>(acc+curr)/populacijaNaGradovi.length)
console.log(sumOfPopulation)

//site gradovi koi pocnuvaat na S i imaat nad 23 000 000 populacija?//