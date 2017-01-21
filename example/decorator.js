

/**
 * Created by slashhuang on 17/1/21.
 */

function decorator(sourceObj,decortorFn){
        decortorFn(sourceObj);
        return sourceObj
    }
var d = {a:1};
    // d变为了{a:1,b:1}
d = decorator(d,(d)=>{d.b=1});
