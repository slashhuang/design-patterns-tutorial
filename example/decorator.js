

/**
 * Created by slashhuang on 17/1/21.
 */


/*
1、这个模式就是在原有的对象上面装饰更多行为
2、保持变量名不变
*/
function decorator(sourceObj,decortorFn){
        decortorFn(sourceObj);
        return sourceObj
};
var d = {a:1};
    // d变为了{a:1,b:1}
d = decorator(d,(d)=>{d.b=1});

// @decorator
// d;
// react + redux 经验 react-redux connect[典型的decorator] 
