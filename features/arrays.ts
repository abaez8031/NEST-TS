const carMakers = ["ford", "toyota", "chevy"]
// We should always use type annotations when initializing an empty array
const nums: number[] = []
const dates = [new Date(), new Date()]

// Help with inference when extracting values
// const car = carMakers[0] // car variable type is inferred to be a string
// const car = carMakers.pop()

// Prevent incompatible values

// carMakers.push(100)

// Help with map

carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible types

const importantDates: (Date | string)[] = [new Date()]
importantDates.push("2030-10-10")
// importantDates.push(100)