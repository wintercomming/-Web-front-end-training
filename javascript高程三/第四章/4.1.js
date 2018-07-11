//基本类型和引用类型的值
//javaScript不能直接访问内存中的位置，所以所操作的引用类型仅仅是一个指针
var person =new Object();
person.name=11;
alert(person.name);//为对象添加属性
//给基本类型的值添加属性是无效的但是不会导致错误
//接下来是堆和栈的问题，详情见网上关系图
//javaScript中所有函数的参数都是值传递的
//值穿参直接传递某个变量值
//引用传参传递某个对象的引用


//typeof 和 instanceof的区别
var a = 100;
typeof a;//number
//typeof无法检测引用类型
var person = new Object();
alert(person instanceof Object);//true


//执行环境及作用域
//每个函数都有自己的执行环境，同样相对立的也有全局执行环境
//随着函数向内层执行，会把函数执行环境推入环境栈中

//延长作用域链