 
/**
 * Created by slashhuang on 17/1/21.
 */
/*
就是在原有的对象上面增加、覆盖对象的行为。

相比于extends、Object.assign等方法，mixin模式更富有表现力。

vue ==> vue.mixin vue.extend ==> 丰富vm 行为  等等方法采用mixin模式来实现的。

实际上 实现mixin模式 各家有各家的方法，不能够一概而论

*/

 class StateTracker{
        constructor(){
            this.raw = {
                a:1,
                b:2
            }
        }// 混合模式方法入口
        mixin(obj){
            Object.assign(this.raw,obj)
        }
    }

var demo = new StateTracker();
demo.mixin({
    c:20
});

console.log('mixin---',demo)  






