//数据类型
//在es5中，javaScript总共有五种简单数据类型和一种复杂数据类型
//分别是简单数据类型：undefined，boolean，string，number，null
//复杂数据类型：object
//在es6中，新定义了symbol数据类型
//为了鉴别变量所属的数据类型，EcmaScript内置了typeof函数来判断如：
var message = "some string";
alert(typeof message);//string
alert(typeof (message));//string
//值得注意的是，typeof null的返回值是“object”
var message;
alert(message==undefined)//true
//下面有一个比较特殊的例子
var tree;
alert(tree);//undefined
alert(people);//错误
alert(typeof tree);//undefined
alert(typeof people)//undefined
//由此可以看出略微不同
//number的数值转换问题:Number()函数是强制转换Number类型的函数
var num1 = Number("Hello World");//NaN
var num2 = Number("");//0
var num3 = Number("000011")//11
var num4 = Number(true);//1
//number还有一个常用的函数是praseInt()，是更常用的转换Number类型的函数
//该函数可以接受两个参数，其中第二个参数是规定使用什么进制
//String类型
//所有的字符字面量，也叫转义序列都属于String类型
//EcmaScript中的字符串是不可变的，也就是说，要改变某个变量保存的字符串必须销毁原来的字符串，
//然后用另一个包含新值的字符串填充该变量
//与number的praseInt()函数类似，string也有toString()方法