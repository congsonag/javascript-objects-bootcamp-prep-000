var meals = {};

var mealsByConstructor = new Object();

var meals = { breakfast: 'oatmeal'};

var anotherMeal = new Object( { breakfast: 'oatmeat', 1: 'is the lonliest number'})

console.log(anotherMeal[1])


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

console.log(meals)
destructivelyUpdateObjectWithKeyAndValue(meals, 'new key', 'new value')

console.log(meals)

console.log(Object.assign({}, {foo: 'bar' }))


