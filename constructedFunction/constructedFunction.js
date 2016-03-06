/*
 构造函数模式
 构造函数用于创建特定类型的对象—不仅声明了使用的对象，构造函数还可以接受参数以便第一次创建对象的时候设置对象的成员值。你可以自定义自己的构造函数，然后在里边声明自定义类型对象的属性或方法。再js里，构造函数通常认为用来实现实例的。
 作用：
 1.用于创建特定类型的对象
 2.第一次声明的时候给对象赋值
 3.自己声明构造函数，赋予属性和方法
 注意：
 1.声明函数的时候处理业务逻辑
 2.区分和单例的区别，配合单例实现初始化
 3.构造函数大写字母开头
 4.注意new的成本
 todo 构造函数模式和单例模式结合使用
 */

var AA = {
    zaomen: function (huawen) {
        if (!this instanceof  zaomen) {
            return new zaomen();
        }
        var _huawen = '普通';
        if (huawen) {
            _huawen = huawen;
        }
        this.suo = '普通';
        this.huawen = _huawen;
        this.create = function () {
            return '花纹' + this.huawen;
        }
    }
};

var BB = {
    zaomen: function (huawen) {
        if (!this instanceof  zaomen) {
            return new zaomen();
        }
        var _huawen = '普通';
        if (huawen) {
            _huawen = huawen;
        }
        this.suo = '普通';
        this.huawen = _huawen;
        this.create = function () {
            return '花纹' + this.huawen;
        }
    }
};

var xiaowang = new AA.zaomen();
xiaowang.create();
var xiaoli = new BB.zaomen();
xiaoli.create();









