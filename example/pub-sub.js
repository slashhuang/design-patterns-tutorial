/**
 * Created by slashhuang on 17/1/21.
 * pub sub
 */

// $(document).on('click',()=>{alert(1)});

// $(document).trigger('click'); // ===>alert(1);

// 1、准备共享访问空间
// 2、添加on/off/trigger等接口实现挂载、移除、触发等动作。


class PubSubHandler{
        constructor(){
            this.eventPool = {}; //共享访问的空间
        }
        //移除
        off(topicName){
            delete this.eventPool[topicName]
        }
        //发布
        // trigger('hello',1) ==>this.eventPool['hello'].forEach()
        trigger(topicName,...args){
            this.eventPool[topicName] && 
            this.eventPool[topicName].forEach(callback=>callback(...args));
        }
        //订阅
        // on('hello',function(){})
        on(topicName,callback){
            let topic = this.eventPool[topicName] ; //this.eventPool['hello'] undefined
            if(!topic){
                this.eventPool[topicName] =[] //this.eventPool['hello'] =[]
            }
            this.eventPool[topicName].push(callback)//this.eventPool['hello'] =[funciton(){}]
        }
}
//demo区域
var test = new PubSubHandler();
test.on('hello',(val)=>{
    console.log('pub-sub----',val)
});
test.on('hello',(val)=>{
    console.log('pub-sub-1---',val)
});
test.trigger('hello',20) //console.log('pub-sub----',20) console.log('pub-sub-1---',20)





