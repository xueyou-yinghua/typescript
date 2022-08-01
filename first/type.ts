//symbol

// @ts-ignore
const sym = Symbol();
let obj = {
  [sym]: "sem_linker"
}

console.log("1    ",obj[sym]);


//枚举  enum  可以根据成员值到成员名称的反向映射
enum Direction {
  north,
  south,
  east,
  west,
  middle,
}

let dir:Direction = Direction.middle;
console.log("2    ",dir)//4
console.log("3    ",Direction[0]);//north
console.log("4    ",Direction["north"]);//0

//设置初始值
enum Direction1 {
  north = 3,
  south,
  east,
  west,
  middle,
}

let dir1:Direction1 = Direction1.middle;
console.log("5    ",dir1)

//字符串枚举
enum Direction2 {
  north = "north",
  south = "south",
  east = "east",
  west = "west",
  middle = "middle",
}

let dir2:Direction2 = Direction2.east;
console.log("6    ",dir2);

//常量枚举  看js文件
const enum Direction3{
  north,
  south,
  east,
  west,
}

let dir3:Direction3 = Direction3.east;//2

//异构枚举

enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}

//数字枚举相比字符串枚举多了反向映射
console.log(Enum.A)
console.log(Enum[0]);

