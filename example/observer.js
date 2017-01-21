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
        }// 注册观察者
        registerObserver(ObserverFn){
            this.observers.push(ObserverFn)
        }
};

var demo = new StateTracker();
demo.registerObserver((val)=>{
        console.log('observer 1 getting value',val)
})
demo.registerObserver((val)=>{
        console.log('observer 2 getting value',val)
})
demo.change(20)
demo.change(40)