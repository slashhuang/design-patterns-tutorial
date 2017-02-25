/**
 * Created by slashhuang on 17/1/21.
 */


/*
 * 和pub/sub模式采用topic来进行执行通知比较起来，
 * observer模式更多的安排在事件改变上
 */

var Observer = function() {
   this.observers = [];
   this.internalState= 10;
};
Observer.prototype.registerObserver = function(ObserverFn) {
   this.observers.push(ObserverFn)
};
Observer.prototype.change = function(val) {
  this.internalState= val;
  this.observers.forEach(observer=>observer(val));
};

var demo = new Observer();

demo.registerObserver((val)=>{
        console.log('observer 1 getting value',val)
})
demo.registerObserver((val)=>{
        console.log('observer 2 getting value',val)
})

demo.change(21)

demo.change(42)





