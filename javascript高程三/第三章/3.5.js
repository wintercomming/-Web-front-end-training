//操作符
var age = 29;
++age;//30

var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o ={
    ValueOf:function () {
        return -1;
    }
}
s1++;//值变成数值3
s2++;//值变成NaN
b++;//值变成数值1
f--;//值变成0.10000000000000009
o--;//值变成数值2

//位操作符：

//反码：将01转换
//补码：反码加1

//按位非
var num1 = 25;
var num2 = ~num1;
alert(num2);//-26(返回反码)；

//（&）按位与
//都为1则1，有一个0则为0
//（|）按位或（shift+\）
//都为0则0，有一个1则为1
//按位或与(^):不同则为1，相同则为0
//<<左移，>>有符号的右移，<<<有符号的左移，无符号右移

//for-in
for(var propName in window){
    alert(propName);
}
//label语句:
var num = 0;
outPoint:
    for (var i = 0 ; i < 10 ; i++){
        for (var j = 0 ; j < 10 ; j++){
            if( i == 5 && j == 5 ){
                break outPoint;
            }
            num++;
        }
    }
alert(num); // 循环在 i 为5，j 为5的时候跳出双循环，返回到outPoint层继续执行，输出 55
//函数
//javascript没有重载（就是函数名相同参数不相同的情况），会覆盖掉旧函数
//每个函数都有arguement对象和this对象
//return 后的语句将不再执行
