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
 建造者模式
 建造者模式可以讲一个复杂对象的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。也就是说如果我们用了建造者模式，那么用户就需要指定需要建造的类型就可以得到他们，而具体建造的过程和细节就不要知道了。建造者模式实际，就是一个指挥者，一个建造者，一个使用指挥者调用具体建造者工作得出结果的客户。建造者模式主要用户“分步骤构建一个复杂的对象”，在这其中“分步骤”是一个稳定的算法，而复杂对象的各个部分则经常变化
 作用：
 1.分步创建一个复杂的对象
 2.解耦封装过程和具体创建的组件
 3.无需关心组件如何组装
 注意：
 1.一定要一个稳定的算法进行支持
 2.加工可以是暴露的

 */
function Fangzi() {
    this.woshi = '';
    this.keting = '';
    this.chufang = '';
}

function Baogongtou() {
    this.gaifangzi = function (gongren) {
        gongren.jian_chufang();
        gongren.jian_keting();
        gongren.jian_woshi();
    }
}

function Gongren() {
    this.jian_woshi = function () {
        console.log('卧室我改好了');
    };
    this.jian_keting = function () {
        console.log('客厅我建好了');
    };
    this.jian_chufang = function () {
        console.log('厨房建好了');
    };
    this.jiaogong = function () {
        var _fangzi = new Fangzi();
        _fangzi.chufang = 'ok';
        _fangzi.keting = 'ok';
        _fangzi.chufang = 'ok';
        return _fangzi;
    }
}

var gongren = new Gongren();
var baogongtou = new Baogongtou();
baogongtou.gaifangzi(gongren);
var myfangzi = gongren.jiaogong();
console.log(myfangzi);









