/**
 * Created by slashhuang on 17/1/21.
 */

class PubSubHandler{
        constructor(){
            this.eventPool = {};
        }
        //移除
        off(topicName){
            delete this.observers[topicName]
        }
        //发布
        trigger(topicName,...args){
            this.eventPool[topicName] && 
            this.eventPool[topicName].forEach(callback=>callback(...args));
        }
        //订阅
        on(topicName,callback){
            let topic = this.eventPool[topicName] ;
            if(!topic){
                this.eventPool[topicName] =[]
            }
            this.eventPool[topicName].push(callback)
        }
    }