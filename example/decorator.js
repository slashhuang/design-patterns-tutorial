/**
 * Created by slashhuang on 17/1/21.
 */




/*
1、这个模式就是在原有的对象上面装饰更多行为
2、保持变量名不变
*/




// 举例----1
var decorator = function(fn) {
	fn.prototype.console=function(){
		console.log(this)
	}
	return fn;
}

var TestFn = function(){
	this.a=1;
	this.b=2;
};
TestFn = decorator(TestFn);

//采用decorator模式装饰TestFn构造函数
new TestFn().console()

/*
 * 以上模式的应用场景
 * 比如你想有几个构造函数，做一些个性化的行为，可以采取这种方式
 */



 // 举例----2
 //修饰行为
var decorator_2 = function(fn) {
	let that = this
	return function(){
		console.log('souce data is ',arguments);
		let result = fn.apply(that,arguments);
		console.log('calculate value is '+result)
	}
}
//主功能
var TestFn_2 = function(){
	let data =[].slice.call(arguments);
	return data.reduce(function(pre,cur){
				   return pre+cur
			},0)
};
TestFn_2 = decorator_2(TestFn_2);
TestFn_2(1,2,4,5)



// @decorator
// react + redux 经验 react-redux connect[典型的decorator] 
