//1. 箭头函数

{
  const myBooks = [
    '我的奋斗',
    'C语言入门到精通',
    'Java入门到精通',
  ];

  myBooks.forEach(title => {console.log(title)})
  myBooks.forEach((title, index,array) => {
    console.log(index+' - '+title);
  })
}

//未使用
function book() {
  let self = this;
  self.publishDate = 2016;
  setInterval(function () {
    console.log(self.publishDate)
  },1000)
}
//使用
{
  function book1() {
    this.publishDate = 2016;
    setInterval(()=>{
      console.log(this.publishDate)
    },1000)
  }
}

//2. 参数类型和返回类型
function createUserId(name:string,id:number):string {
  return name + ' ' + id;
}

//3. 函数类型
let IdGenerator:(chars:string,nums:number)=>string;
IdGenerator = createUserId;

console.log(IdGenerator('zwp',2016));

//4. 可选参数及默认参数
function createUserId1(id:number,name:string='zwp',age?:number):string{
  if(age === undefined)
    age = 18;
  return name+id+age;
}

console.log(createUserId1(3));

//5. 剩余参数
function push(array:any[],...items:any[]) {
  items.forEach(item=>{
    array.push(item);
  });
}

let a = [];
push(a,1,2,3);
console.log(a);

//6. 函数重载
function add(a:number,b:number):number;
function add(a:string,b:string):number;
function add(a:string,b:number):number;
function add(a:number,b:string):number;
function add(a:number|string,b:number|string):number
{
  //检测是否是数字
  function update(x:string):boolean {
    let n = Number(x);
    return !isNaN(n);
  }

  if(typeof a === 'string'&&update(a))
    a = Number(a);
  if(typeof b === 'string'&&update(b))
    b = Number(b);
  return <number>a+<number>b;
}

console.log(add(3, 4));
console.log(add('12', '321'));
console.log(add(23, '400'));
console.log(add('-4', 30));


class Calculator {
  add(a:number,b:number):number;
  add(a:string,b:string):number;
  add(a:string,b:number):number;
  add(a:number,b:string):number;
  add(a:number|string,b:number|string):number
  {
    //检测是否是数字
    function update(x:string):boolean {
      let n = Number(x);
      return !isNaN(n);
    }

    if(typeof a === 'string'&&update(a))
      a = Number(a);
    if(typeof b === 'string'&&update(b))
      b = Number(b);
    return <number>a+<number>b;
  }
}

const cal = new Calculator();
const result = cal.add('3','-3');
console.log(result)





