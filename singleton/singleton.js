//单例模式
//
//单例就是保证一个类只有一个实例，实现的方法一般是先判断实例存在是否，如何存在就直接放回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。再js里，单例作为一个命名空间提供者，从全局命名空间里提供一个唯一的访问点来访问该对象。
//作用：
//1.模块间通信
//2.系统中某个类的对象只能存在一个
//3.保护自己的属性和方法
//注意：
//1.注意this的使用
//2.闭包容易造成内存泄露，不存的赶快干掉
//3.注意new的成本

var top = {
    init: function () {
        this.render();
        this.bind();
    },
    a: 4,
    render: function () {
        var me = this;
        me.btna = $('#a');
    }, bind: function () {
        var me = this;
        me.btna.click(function () {
            me.test();
        })
    }, test: function () {
        a = 5;
    }
};


var banner = {
    init: function () {
        this.render();
        this.bind();
    },
    a: 4,
    render: function () {
        var me = this;
        me.btna = $('#a');
    }, bind: function () {
        var me = this;
        me.btna.click(function () {
            me.test();
        })
    }, test: function () {
        top.a = 6;
    }
};

top.init();
banner.init();
