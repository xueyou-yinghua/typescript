//1. 联合类型
let num:1|2 = 1;
type EventName = 'click' | 'scroll' | 'mousemove';


//2. 可辨识联合  三个要点: 可辨识，联合类型和类型守卫


//2.1 可辨识
enum CarTransmission{
  Automatic = 200,
  Manual = 300
}

interface Motorcycle {
  vType: "motorcycle",
  make: number
}

interface Car {
  vType: "car",
  transmission: CarTransmission
}

interface Truck {
  vType: "truck",
  capacity: number;
}

//2.2 联合类型   这个vehicle可以表示不同的车型
type vehicle = Motorcycle | Car | Truck;


//2.3 类型守卫
const pi = Math.PI;

function evaluatePrice(vehicle: vehicle) {
  switch (vehicle.vType) {
    case "car":
      return vehicle.transmission * pi;
    case "truck":
      return vehicle.capacity * pi;
    case "motorcycle":
      return vehicle.make * pi;
  }
}

const myTruck : Truck = {vType:'truck',capacity:10.231};
console.log(evaluatePrice(myTruck));