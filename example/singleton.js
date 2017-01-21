/**
 * Created by slashhuang on 17/1/21.
 */
/**
1、构造函数的实例只有一个【目的】
2、一般是通过闭包存储内部实例，通过接口访问内部实例。【实现方式】
*/
var singleton = ()=>{
        var instance;
        var createInstance = function(){
            this.a = 1;
            this.b = 2;
        }// 单例模式方法入口
        // 不要把return obj 看成对象 ==》 看成访问闭包的接口
        return {
            getInstance:()=>{
                if(!instance){
                    instance = new createInstance();
                }
                return instance;
            }
        }
    }
// modal dialog 组件层面

var test = singleton();
var boolean = test.getInstance() == test.getInstance() //true 指向同一个对象
console.log(boolean)
