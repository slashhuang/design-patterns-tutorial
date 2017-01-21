/**
 * Created by slashhuang on 17/1/21.
 */


class StateTracker{
        constructor(){
            this.observers = [];
            this.internalState= 10;
        }
        // 改变内部状态，触发状态的观察者列表
        change(val){
            this.internalState= val;
            this.observers.forEach(observer=>observer(val));
        }
        // 注册观察者,提供一个接口将回调函数推送进  观察者队列 observers
        registerObserver(ObserverFn){
            this.observers.push(ObserverFn)
        }
};
/* {
observers:[],
internalState:10
}
__proto__ 
      change
      registerObserver

*/
var demo = new StateTracker();


demo.registerObserver((val)=>{
        console.log('observer 1 getting value',val)
})
demo.registerObserver((val)=>{
        console.log('observer 2 getting value',val)
})
/* {
observers:[f1,f2],
internalState:10
}
__proto__ 
      change
      registerObserver

*/
demo.change(20)
/* {
observers:[f1,f2],
internalState:20
}
__proto__ 
      change
      registerObserver

*/
demo.change(40)





