//1. 语法  k:key 键类型 v:value  值类型 e:element 元素类型

function identity<T,U>(value: T, message: U):T {
  console.log(message);
  return value;
}

console.log(identity(68,'sem_linker'));

//2. 泛型接口
interface genericIdentityFn<T> {
  (arg:T):T;
}

let one1:genericIdentityFn<string> = (arg)=>{
  return arg.substring(1);
};

console.log(one1('I am a boy!'));


//3. 泛型类
class GenericIdentity<T> {
  zeroValue:T;
  add:(x:T,y:T)=>T;
}

let myGenericIdentity = new GenericIdentity<number>();
myGenericIdentity.zeroValue = 0;

myGenericIdentity.add = function (x,y) {
  return x+y;
}


console.log(myGenericIdentity.add(3, -3));

//4. 泛型工具类型
interface person1 {
  name:string
  age:number;
  num:object;
  arr:any[]
}

const sem1:person1 = {name:'sem',age:33,num:{},arr:[1,2,3]};
type sem_linker = typeof sem;

//keyof  获取某种类型和的所有键
type k1 = keyof person1;// name|age|num
type k2 = keyof person1[];//数组的一些东西
type k3 = keyof {[x:string]:person1};//string|number

//为什么k3是number|string  因为ts中支持两种索引签名，数字索引和字符串索引
//为了同时⽀持两种索引类型，就得要求数字索引的返回值必须是字符串索引返回值的⼦类。其中的原因
// 就是当使⽤数值索引时，JavaScript 在执⾏索引操作时，会先把数值索引先转换为字符串索引。所以
// keyof { [x: string]: Person } 的结果会返回 string | number 。
interface StringArray {
  //字符串索引  keyof StringArray => string|number
  [index:string]:string;
}
let a_1:StringArray = {
  age:'1234',
}
console.log(a_1.age);

interface StringArray1 {
  //数字索引   keyof StringArray1 => number
  [index:number]:string;
}
let a1:StringArray = {
  1:'1',
}
console.log(a1[1]);


//in 遍历枚举类型
type keys = 'a'|'b'|'c';
type obj = {
  [p in keys]:any
}//{a: any, b: any, c: any}

//infer
type returnType<T> = T extends (
  ...args:any[]
) => infer R?R:any;

let i:returnType<number> = (x:number)=>{
  return x+3;
}

//extends
interface Lengthwise {
  length:number;
}

function loggingIdentity<T extends Lengthwise>(arg:T):T {
  console.log(arg.length);
  return arg;
}

//函数值必须有length的方法
console.log(loggingIdentity([1,2,3,4,5]));



// partial  将某个类型里面的属性全部变为可选项?

interface todo {
  title:string;
  description:string;
}

function updateTodo(todo:todo,field:Partial<todo>) {
  return {
    ...todo,
    ...field,
  }
}

const todo:todo = {
  title:'learn ts',
  description:'learn typescript',
}

const todo2 = updateTodo(todo,{
  description:'learn typescript enum',
})

console.log(todo2);





