let x:number,y:number,z:number;
let five_array = [0,1,2,3,4];
[x,y,z] = five_array;

console.log(x+' '+y+' '+z);

let two_array = [-1,0];
five_array = [...two_array,1,2,3];

let colors:string[] = ['red','green','blue'];
for (let i of colors){
  console.log(i);
}

//1. 对象解构
let person = {
  name1:'zwp',
  gender:'male',
};

let {name1,gender} = person;

console.log(name1,gender);

//2. 对象展开运算符
let person1 = {
  name2: 'zwp',
  gender: 'male',
  address: 'WuHan'
};

//组装对象
let personWithAge = {...person1, age: 33};
console.log(personWithAge);

//获取除了某些项外的其他项
let {name2, ...rest} = person1;
console.log('name2: ',name2)
console.log('rest: ',rest);
















