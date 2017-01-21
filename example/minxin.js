 
/**
 * Created by slashhuang on 17/1/21.
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