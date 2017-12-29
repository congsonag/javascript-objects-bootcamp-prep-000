var meals = {};

var mealsByConstructor = new Object();

var meals = { breakfast: 'oatmeal'};

var anotherMeal = new Object( { breakfast: 'oatmeat', 1: 'is the lonliest number'})

console.log(anotherMeal[1])
console.log(anotherMeal.'1')

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  obj[key] = value
  return object
}

console.log(meals)
destructivelyUpdateObjectWithKeyAndValue(meals, 'new key', 'new value')

console.log(meals)
