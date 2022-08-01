//1.类
class greeter {
  static cname:string = 'greeter';
  greeting:string;

  constructor(message:string) {
    this.greeting = message;
  }

  static getClassName() {
    return 'class name is greeter';
  }

  greet(){
    return 'hello, '+this.greeting;
  }
}

let greeters = new greeter('world');
console.log(greeters.greeting);
console.log(greeters.greet());
console.log(greeter.getClassName());


//2. 私有字段  #
class person {
  // @ts-ignore
  #name: string;

  constructor(name:string) {
    this.#name = name;
  }

  persons(){
    console.log('hello, '+this.#name);
  }
}

let sem = new person('zwp');
sem.persons();

//3. 访问器   用set和get 对数据封装
let passcode = 'hello typescript'

class employee {
  private _fullName: string

  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if (passcode && passcode === 'hello typescript') {
      console.log('经过');
      this._fullName = newName;
    } else {
      console.log('error: unauthorized update of employee!');
    }
  }
}

let employee1 = new employee();
employee1.fullName = '21456'
console.log(employee1.fullName)


//4. 类的继承
class animal {
  name:string;

  constructor(theName:string) {
    this.name = theName;
  }

  move(distanceInMeters:number = 0){
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class snake extends animal{
  constructor(name:string) {
    super(name);
  }
  move(distanceInMeters: number = 5) {
    console.log('这是蛇!');
    super.move(distanceInMeters);
  }
}


let sam = new snake('sammy the python');
sam.move();

//5. 抽象类  抽象类不能被直接实例化
abstract class xy {
  protected constructor(public name:string) {
  }
  abstract say(words:string):void;
}

class developer extends xy{
  constructor(name:string) {
    super(name);
  }

  say(words: string) {
    console.log(`${this.name} want to say ${words}`);
  }
}

const lolo = new developer('lolo');
lolo.say('I love ts !');


//6. 类方法重载   就是类的方法重载
class ProductService1 {
  getProducts() :void;
  getProducts(id:number):void;
  getProducts(id?:number){
    if(typeof id === 'number'){
      console.log(`获取id为${id}的产品信息`)
    }else{
      console.log('获取所有的产品信息');
    }
  }
}

const ProductService = new ProductService1();
ProductService.getProducts(666);
ProductService.getProducts();




