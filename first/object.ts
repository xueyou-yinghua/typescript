const proto = {};

Object.create(proto);
console.log(proto)
Object.create(null);

console.log(proto.toString());
