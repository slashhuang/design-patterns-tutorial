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
            this.obserers.push(ObserverFn)
        }
};
