//adding an object to the array of objects
const carPassing = (cars, speed)=> {
  cars.push({time: Date.now(), speed: speed});
  return cars;
};

//checking with input
const cars = [
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
const speed = 38

//invoking and logging
carPassing(cars, speed);
console.log(cars);