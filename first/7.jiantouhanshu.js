//1. 箭头函数
{
    var myBooks = [
        '我的奋斗',
        'C语言入门到精通',
        'Java入门到精通',
    ];
    myBooks.forEach(function (title) { console.log(title); });
    myBooks.forEach(function (title, index, array) {
        console.log(index + ' - ' + title);
    });
}
//未使用
function book() {
    var self = this;
    self.publishDate = 2016;
    setInterval(function () {
        console.log(self.publishDate);
    }, 1000);
}
//使用
{
    function book1() {
        var _this = this;
        this.publishDate = 2016;
        setInterval(function () {
            console.log(_this.publishDate);
        }, 1000);
    }
}
//2. 参数类型和返回类型
function createUserId(name, id) {
    return name + ' ' + id;
}
//3. 函数类型
var IdGenerator;
IdGenerator = createUserId;
console.log(IdGenerator('zwp', 2016));
//4. 可选参数及默认参数
function createUserId1(id, name, age) {
    if (name === void 0) { name = 'zwp'; }
    if (age === undefined)
        age = 18;
    return name + id + age;
}
console.log(createUserId1(3));
//5. 剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
console.log(a);
function add(a, b) {
    //检测是否是数字
    function update(x) {
        var n = Number(x);
        return !isNaN(n);
    }
    if (typeof a === 'string' && update(a))
        a = Number(a);
    if (typeof b === 'string' && update(b))
        b = Number(b);
    return a + b;
}
console.log(add(3, 4));
console.log(add('12', '321'));
console.log(add(23, '400'));
console.log(add('-4', 30));
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        //检测是否是数字
        function update(x) {
            var n = Number(x);
            return !isNaN(n);
        }
        if (typeof a === 'string' && update(a))
            a = Number(a);
        if (typeof b === 'string' && update(b))
            b = Number(b);
        return a + b;
    };
    return Calculator;
}());
var cal = new Calculator();
var result = cal.add('3', '-3');
console.log(result);
