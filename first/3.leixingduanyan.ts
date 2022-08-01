//类型断言

//尖括号

let someValue:any = "this is a string";
let strLen:number = (<string>someValue).length;
console.log(strLen);

//as
let strLength:number = (someValue as string).length;
console.log(strLength);

//非空断言  后面加个感叹号
function myFunc(maybeString:string|undefined|null) {
  //const onlyString:string = maybeString;//运行的时候报错
  const onlyString:string = maybeString!;
  maybeString = '123';
  console.log(onlyString+maybeString);
}

myFunc('123');

type NumGenerator = ()=>number;

function myFunc1(numGenerator:NumGenerator|undefined) {
  //const num1 = numGenerator(); //运行时报错
  const num2 = numGenerator!();
  console.log(num2)
}

myFunc1(()=>{return 3});


//确定赋值断言

let x!:number;//如果这个地方没有断言也就是用感叹号  会报错，因为系统不知道这个x有没有被赋值
initialize();
console.log(2*x);

function initialize() {
  x = 10;
}