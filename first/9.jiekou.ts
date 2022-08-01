//接口

//1. 对象的形状
interface Person {
  name: string;
  age: number;
}

let sem:Person = {
  name:'zwp',
  age:33
}

//2. 只读属性
interface Person1 {
  readonly name: string;//只能在刚创建对象的时候修改这个值
  age?: number;
}

let p:Person1 = {name:'zwp'};
//p.name = 30; //报错  无法改变
p.age = 30;
console.log(p);

let a:number[] = [1,2,3,4];
let arr: ReadonlyArray<number> = a;//这是ts自带的  把所有可变的方法去掉了
//arr.length = 100; //报错


//3. 任意属性   用索引签名
interface Person2 {
  name: string;
  age?: number;
  [propName:string]:any;
}

const per:Person2 ={
  name:'zwp',
  sex:3,
  lang:'name',
  judge:true,
}
console.log(per.name);
console.log(per.lang);

const per1:Person2 = {
  name:'zwp',
  age:30,
  judge:false
}
console.log(per1.judge)
console.log(per1.age)


//4. 接口与类型别名的区别
//4.1 关于object/function

interface point {
  x:number;
  y:number;
}
type point_t = {
  x:number;
  y:number
}

interface setPoint {
  (x:number,y:number):void;
}

type setPoint_t = (x:number,y:number)=>void;

let po:point = {x:1,y:1};
let po1:point_t = po;

const po2:setPoint = (x:number,y:number)=>{
  console.log('x: ',x,'  y: ',y);
}
const po21:setPoint_t = po2;

po21(10,20);

//4.2 otherType 类型可以别名一些其他类型
//primitive
type name = string;

//object
type partialPointX = {x:number};
type partialPointY = {y:number};

//union
type partialPoint = partialPointX|partialPointY;

//tuple
type data = [number,string];


//4.3 extend  扩展
// i extend i
interface partialPointX1 {
  x:number;
}

interface point extends partialPointX {
  y:number;
}

let ps:point = {
  x:1,
  y:1,
};
// t extend t
type partialPointX2 = {x:number};
type point1 = partialPointX2 & {y:number};
let ps1:point1 = ps;

//i extend t
type partialPointX3 = {x:number};
interface point2 extends partialPointX3 {
  y:number
}

let ps2:point2={
  x:1,
  y:2,
}

//t extend i
interface partialPointX4 {
  x:number
}

type point3 = partialPointX & {y:number};
let ps3:point3={
  x:1,
  y:2,
}

//4.4 implements

interface Points {
  x:number
  y:number
}

class somePoint implements Points{
  x=1;
  y=2;
  x1;

  constructor(x:string) {
    this.x1 = x;
  }
  getX(){
    return this.x;
  }
  setX(x:number){
    this.x = x;
  }
}
const cs = new somePoint('3');
console.log(cs.x1)
console.log(cs.getX());

//4.5 接口可以定义多次  会被自动合并为单个接口
interface mine {
  x:number
}
interface mine {
  y:number
}
const m:mine = {x:1,y:2};














