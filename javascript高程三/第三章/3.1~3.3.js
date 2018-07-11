//javaScript是区分大小写的语言
//标识符：变量、函数、属性的名称，第一个字符必须是字母、下划线、美元符号中的一种
//单行注释
/*
* 这是一个
* 多行注释
 */
//"use strict"严格模式
//可以指定在某个作用域范围内使用严格模式：
    function doSomething(){
    "use strict";
    //函数体
}
//ie9以下不支持严格模式
/*常见关键字：break do instanceof typeof case else new var catch finally return void
continue for switch while debugger* function this with default if throw delete in try
 */
/*常见保留字：abstract enum int short boolean export interface static byte extends long
super char final native synchronized class等等
 */
//let和yield是第五版新增的保留字；其他保留字是第三版定义的。
//变量
var message = "hi";
message = 100;//会修改变量类型，有效但不推荐
function test() {
    var a = "hi"//局部变量
}
test()
alert(a)//报错！！！
//函数内的声明为局部变量
function secondTest(){
  leaf = 100;//全局变量
}
secondTest();
alert(leaf);//100
//函数内对未声明的变量赋值会被理解为在全局作用域中对未声明的变量赋值。

//可以使用一条语句定义多个变量，用逗号分开即可
var found = false,
    age=29,
    name=joy;
