/**
 * Created by slashhuang on 17/1/21.
 */

var singleton = ()=>{
        var instance;
        var createInstance = ()=>{
            this.a = 1;
            this.b = 2;
        }// 单例模式方法入口
        return {
            getInstance:()=>{
                if(!instance){
                    instance = createInstance();
                }
                return instance;
            }
        }
    }
var test = singleton();
test.getInstance() == test.getInstance() //true
