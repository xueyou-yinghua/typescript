var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var x, y, z;
var five_array = [0, 1, 2, 3, 4];
x = five_array[0], y = five_array[1], z = five_array[2];
console.log(x + ' ' + y + ' ' + z);
var two_array = [-1, 0];
five_array = __spreadArray(__spreadArray([], two_array, true), [1, 2, 3], false);
var colors = ['red', 'green', 'blue'];
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var i = colors_1[_i];
    console.log(i);
}
//1. 对象解构
var person = {
    name1: 'zwp',
    gender: 'male'
};
var name1 = person.name1, gender = person.gender;
console.log(name1, gender);
//2. 对象展开运算符
var person1 = {
    name2: 'zwp',
    gender: 'male',
    address: 'WuHan'
};
//组装对象
var personWithAge = __assign(__assign({}, person1), { age: 33 });
console.log(personWithAge);
//获取除了某些项外的其他项
var name2 = person1.name2, rest = __rest(person1, ["name2"]);
console.log('name2: ', name2);
console.log('rest: ', rest);
