// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
function isArrayFn(value){
	//IE8之前的版本是不支持Array.isArray()
	if (typeof Array.isArray === "function") {
		//若当前浏览器支持
		return Array.isArray(value);
	}else{
		return Object.prototype.toString.call(value) === "[object Array]";
	}
}
console.log(isArrayFn(a));
console.log(isArrayFn(b));

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a.map(x => x*2);


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(" "));
console.log(colors.join("+"));
console.log(colors.join(","));


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(a, b){return b - a}); 

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var countMap = {};
var maxNum = 0, maxEle;
for(var i = 0;i < a.length;i++) {
	var ele = a[i];
	countMap[ele] === undefined ? countMap[ele] = 1 : countMap[ele]++;
	if(countMap[ele] > maxNum) {
		maxNum = countMap[ele];
		maxEle = ele;
	}
}
console.log(maxEle);
