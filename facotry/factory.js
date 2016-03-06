///**
// * Created by tanglin on 16/3/6.
// */
//工厂模式
//工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型（抽象工厂）。
//这个模式十分有用，尤其是创建对象的流程赋值的时候，比如依赖于很多的设置文件等。并且你会经常在程序里看到工厂方法，用于子类类定义需要创建的对象类型。
//作用：
//1.对象的构建十分复杂
//2.需要依赖具体的环境创建不同实例
//3.处理大量具有相同属性的小对象
//注意：
//1.不能滥用工厂，有时候仅仅是给代码增加复杂度
//
//


var gongchang = {};
gongchang.chanyifu = function () {
    this.gongren = 50;
    console.log('我们有' + this.gongren);
};
gongchang.chanxie = function () {
    console.log('产鞋子');

};
gongchang.yunshu = function () {
    console.log('运输');
};

gongchang.changzhang = function (para) {
    //new js我们说了 构造函数模式 单例模式
    return new gongchang[para]();
};

var me = gongchang.changzhang('chanyifu');
console.log(me.gongren);