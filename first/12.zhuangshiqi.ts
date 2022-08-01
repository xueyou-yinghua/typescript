//tFunction - 被装饰的类   1. 类属性装饰器
declare type classDecorator = <TFunction extends Function>(
  target: TFunction
) => TFunction|void;

function greeter1(target:Function):void {
  target.prototype.greet = function ():void {
    console.log('hello zwp!');
  }
}
@greeter1
class Greeting {
  constructor() {
  }
}

let myGreeting = new Greeting();
(myGreeting as any).greet();

function greeter2(greeting:string) {
  return function (target:Function) {
    target.prototype.greet = function ():void {
      console.log(greeting)
    }
  }
}

@greeter2('hello zzz!')
class Greeting1 {
  constructor() {
  }
}

myGreeting = new Greeting1();
(myGreeting as any).greet();



//2. 属性装饰器
//target:被装饰的类   propertyKey 被装饰类的属性名
declare type propertyDecorator = (target:Object,propertyKey:string|symbol)=>void;

//跟踪用户对属性的操作
function logProperty(target:any,key:string) {
  delete target[key];

  const backing = "__"+key;
  Object.defineProperty(target,backing,{
    writable:true,
    enumerable:true,
    configurable:true,
  });

  const getter = function (this:any) {
    const currVal = this[backing];
    console.log(`get: ${key}=>${currVal}`);
    return currVal;
  }

  const setter = function (this:any,newVal:any) {
    console.log(`set:${key}=>${newVal}`);
    this[backing] = newVal;
  }

  Object.defineProperty(target,key,{
    get:getter,
    set:setter,
    enumerable:true,
    configurable:true,
  });
}

class Person {
  @logProperty
  public name:string

  constructor(name:string) {
    this.name = name;
  }
}

const zp = new Person('sem_linker');
zp.name = 'kakugo';
console.log(zp.name);

