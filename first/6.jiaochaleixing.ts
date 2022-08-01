//6.交叉类型   &
type pointX = {x:number};
type pointY = {y:number};

type point = pointX&pointY

let p:point = {
  x:1,
  y:2,
}

//6.1 同名基础类型属性的合并
interface x {
  c:string
  d:string
}

interface y {
  c:number
  e:string
}

type xy = x&y;
type yx = y&x;

let p1:xy;
let p2:yx;

//p1 = {c:'123',d:'123',e:'123'};   会报错   c变成never类型  即不存在这种类型

//6.2 同名非基础类型属性的合并

interface D{
  d:boolean;
}

interface E {
  e:string;
}

interface F {
  f:number
}

interface A{
  x:D
}

interface B {
  x:E
}

interface C {
  x:F
}

type abc = A&B&C;

let abc:abc = {
  x:{
    d:true,
    e:'you',
    f:7
  }
}

console.log('abc: ',abc);
//也就是在混入多个类型的时候，若存在相同的成员，且成员类型为非基本数据类型，是可以合并的



