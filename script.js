// Constants:
const originalFoodList = [
  'Sushi',
  'Pizza',
  'Burger & Fries',
  'Wings',
  'Dumplings/Dim Sum',
  'Hot Pot',
  'Korean BBQ',
  'Vietnamese',
  'Poke',
  'Hawaiian',
  'Noods'
]

const getFoodSuggestion = (array) => {
  const randomlySelectedFood = array[Math.floor(Math.random() * array.length)]
  console.log(`randomlySelected food is ${randomlySelectedFood}`)
  document.getElementById("FoodAnswer").innerHTML = randomlySelectedFood
  return randomlySelectedFood
}