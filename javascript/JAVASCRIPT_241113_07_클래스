// 클래스 : 객체를 만들기 위한 설계도면을 의미
// 클래스를 사용한 OOP의 장점
// 코드의 재사용성, 가독성, 유지보수 용이, 상속과 확장성
// 자바스크립트에서 클래스의 활용은 프론트엔드 개발에 있어서는 자주 사용되지 않음

class Vehicle {

  // new라는 키워드를 만나면 자동으로 생성자를 불러줌
  // constructor라는 키워드로 만드는 생성자는 Java 대비 불리함
  // Java는 생성자 오버로딩이 됨, 매개변수의 개수나 타입에 따라 생성자 불러줄 수 있음
  //  - 같은 클래스 내에서 매개변수의 개수나 타입에 따라 여러 개의 생성자를 정의할 수 있음
  // JavaScript는 생성자 오버로딩이 안돼서 생성자를 여러개 정의할 수 없음
  //  - 대신 하나의 생성자 내에서 매개변수를 체크하거나 기본값을 설정하는 방식으로 우회함
  //  - 생성자에서 매개변수를 조건에 따라 처리하거나 객체를 인자로 받아 매개변수를 유연하게 처리
  //  - 매개변수의 개수나 타입에 따라 다르나 초기화 작업을 하는 등 (constructor 내에 조건문을 사용해서 if 객체로 생성자 호출시, else 기본 생성자 < 이런식)

  constructor(make, model, year, color) {

    // 내부의 인스턴스 필드, 객체로 만들어지는 것들
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.speed = 0; // 매개변수로 반드시 받아야 할 필요는 없음

  }

    // getter
    getMake() {
      return this.make;
    }  
    getModel() {
      return this.model;
    }

    getYear() {
      return this.year;
    }
    getColor() {
      return this.color;
    }

    getSpeed() {
      return this.speed;
    }
  
    accelerate(amount) {
      this.speed += amount;
      console.log(`The ${this.color} ${this.make} ${this.model} is now going ${this.speed} km/h.`);
    }
  
    break(amount) {
      this.speed = Math.max(0, this.speed - amount);
      console.log(`The ${this.color} ${this.make} ${this.model} is now going ${this.speed} km/h.`);
    }
  
    static getNumberOfWheels() {
      return 0;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, color, numDoors) {
      super(make, model, year, color);
      this.numDoors = numDoors;
    }
  
    getNumDoors() {
      return this.numDoors;
    }
  
    static getNumberOfWheels() {
      return 4;
    }
  }
  
  class Truck extends Vehicle {
    constructor(make, model, year, color, towingCapacity) {
      super(make, model, year, color);
      this.towingCapacity = towingCapacity;
    }
  
    getTowingCapacity() {
      return this.towingCapacity;
    }
  
    static getNumberOfWheels() {
      return 6;
    }
  }
  
  const myCar = new Car('Hyundai', 'Sonata', 2021, 'silver', 4);
  console.log(myCar.getMake()); // 출력 결과: "Hyundai"
  console.log(myCar.getModel()); // 출력 결과: "Sonata"
  console.log(myCar.getYear()); // 출력 결과: 2021
  console.log(myCar.getColor()); // 출력 결과: "silver"
  console.log(myCar.getSpeed()); // 출력 결과: 0
  console.log(myCar.getNumDoors()); // 출력 결과: 4
  myCar.accelerate(30); // 출력 결과: "The silver Hyundai Sonata is now going 30 km/h."
  myCar.break(10); // 출력 결과: "The silver Hyundai Sonata is now going 20 km/h."
  console.log(Car.getNumberOfWheels()); // 출력 결과: 4
  
  const myTruck = new Truck('Kia', 'Sorento', 2022, 'red', 10000);
  console.log(myTruck.getMake()); // 출력 결과: "Kia"
  console.log(myTruck.getModel()); // 출력 결과: "Sorento"
  console.log(myTruck.getYear()); // 출력 결과: 2022
  console.log(myTruck.getColor()); // 출력 결과: "red"
  console.log(myTruck.getSpeed()); // 출력 결과: 0
  console.log(myTruck.getTowingCapacity()); // 출력 결과: 10000
  myTruck.accelerate(20); // 출력 결과: "The red Kia Sorento is now going 20 km/h."
  myTruck.break(5); // 출력 결과: "The red Kia Sorento is now going 15 km/h."
  console.log(Truck.getNumberOfWheels()); // 출력 결과: 6




// 프라이빗 속성(Private Fields)
// ES6 이후 자바스크립트 클래스에서는 # 문법을 사용하여 프라이빗 속성 정의 가능
// 프라이빗 속성은 클래스 외부에서 접근할 수 없으며, 클래스 내부에서만 접근 가능
class Vehicle {
  #speed = 0; // 프라이빗 속성

  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  getSpeed() {
    return this.#speed;
  }

  accelerate(amount) {
    this.#speed += amount;
    console.log(
      `The ${this.color} ${this.make} ${this.model} is now going ${
        this.#speed
      } km/h.`
    );
  }

  break(amount) {
    this.#speed = Math.max(0, this.#speed - amount);
    console.log(
      `The ${this.color} ${this.make} ${this.model} is now going ${
        this.#speed
      } km/h.`
    );
  }
}
