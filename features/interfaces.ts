interface Reportable {
  summary(): string
}

const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: true,
  summary() {
    return `Name: ${this.name}`
  }
}

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary() {
    return `My drink has ${this.sugar} grams of sugar`
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivic)
printSummary(drink)

// General strategy for reusable code in Typescript

// Create functions that accept arguments that are typed with interfaces
// Objects/Classes can decide to implement a given interface to work with a function