//Object类型：因为比较重要，所以单独放在一个js文件里面
//Object类型是所有它实例的基础
//Objcet的实例都具有下例属性和方法
var o = new Object();
alert(o.constructor)//Object()
o.name="jenny";
alert(o.hasOwnProperty("name"));//true
alert(o.toString())//返回字符串表示
alert(o.valueOf())//返回对象的字符串，数值或布尔值表示