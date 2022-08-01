//never表示是永不存在的值的类型

function error(message: string): never {
  throw new Error(message);
}

//console.log(error('hello world'));

//全面性检测


type foo = string | number

function controlFlowAnalysisWithNever(foo:foo) {
  let arr;
  let check:never;
  if(typeof foo === "string"){
    arr = [foo];
  }else if(typeof foo === "number"){
    arr = "数字:"+foo;
  }else{
   check = foo;
  }
  console.log(arr);
  console.log(check);
}

controlFlowAnalysisWithNever('1234');
controlFlowAnalysisWithNever(1234);
controlFlowAnalysisWithNever(null);

