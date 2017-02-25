/**
 * Created by slashhuang on 17/1/21.
 * pub sub
 */

// $(document).on('click',()=>{alert(1)});

// $(document).trigger('click'); // ===>alert(1);

// 1、存储事件映射表
// 2、添加on/off/trigger等接口实现挂载、移除、触发等动作。

var PubSub = function(){
  this.eventPool = {}; //存储事件映射表
};
PubSub.prototype.off = function(topicName){
    delete this.eventPool[topicName]
};
PubSub.prototype.trigger = function(){
    var _arg = [].slice.call(arguments);
    var topicName=_arg.shift();
    var callbackArg = _arg;
    var topicCallback = this.eventPool[topicName]
    if(topicCallback){
         topicCallback.forEach(function(callback){
            callback.apply(this,callbackArg)
         });
    }
};
PubSub.prototype.on = function(topicName,callback){
    var  topic = this.eventPool[topicName] ; 
    if(!topic){
        this.eventPool[topicName] =[] 
    }
    this.eventPool[topicName].push(callback)
}

//示例区域
var test = new PubSub();
test.on('hello',function(val){
    console.log('pub-sub-1---',val)
});
test.on('hello',function(val){
    console.log('pub-sub-2---',val)
});
test.trigger('hello',20);
test.trigger('hello',20);
test.off('hello'); 
test.trigger('hello',20);//不再触发





