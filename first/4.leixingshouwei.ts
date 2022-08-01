//一共有四种类型保护

//1. in 关键字

interface Admin {
  name:string;
  privileges:string[];
}

interface Employee {
  name:string;
  startDate:Date;
}

type unKownEmployee = Employee | Admin;

function printEmployeeInformation(emp: unKownEmployee) {
  console.log('name: '+emp.name);
  if('privileges' in emp){
    console.log("privileges: "+emp.privileges);
  }else{
    console.log("startDate: "+emp.startDate)
  }
}

printEmployeeInformation({name:'zwp',startDate: new Date()});
printEmployeeInformation({name:'zwp',privileges:['手机','电脑']});

//2. typeof   识别 number  string boolean  symbol
function padLeft(value:string,padding:string|number) {
  if(typeof padding === 'number'){
    return Array(padding + 1).join(' ') + value;
  }

  if(typeof padding === 'string'){
    return padding+value;
  }
}

console.log(padLeft('zwp',6));
console.log(padLeft('zwp','one'));


//3. instanceof
interface Padder {
  getPaddingString():string;
}

class SpaceRepeatingPadder implements Padder{
  constructor(private numSpaces:number) {
  }

  getPaddingString(): string {
    return Array(this.numSpaces + 1).join(this.numSpaces.toString());
  }

  getConsole():void{
    console.log('number');
  }
}

class StringPadder implements  Padder{
  constructor(private value:string) {
  }

  getPaddingString(): string {
    return this.value
  }
  getConsole1():void{
    console.log('string');
  }
}

let padder:Padder = new SpaceRepeatingPadder(6);
//这时候的padder只能访问getPaddingString()
console.log(padder.getPaddingString());

if(padder instanceof SpaceRepeatingPadder){
  //这个时候可以访问getConsole  因为类型收窄为SpaceRepeatingPadder
  padder.getConsole();
}


//自定义类型保护
function isNumber(x:any):x is number {//=t
  return typeof x === 'string'
}

function isString(x:any):x is string {
  return typeof x === 'string'
}

console.log(isString(1234))