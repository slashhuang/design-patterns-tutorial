/**
 * 实现的功能
 * on('topic', fn),
 * trigger('topic') ==> fn要执行
 * off('topic', fn) ==> fn移除
 * message pattern
 * publishers
 *  ==> 消息topic
 * receivers
 */
const app = {
    oncePool: {},
    pool: {},
    on: function(topic, fn) {
        if (this.pool[topic] ) {
            this.pool[topic].push(fn);
        } else {
            this.pool[topic] = [fn];
        }
    },
    trigger: function(topic) {
        if (this.pool[topic]) {
            this.pool[topic].forEach((fn) => {
                fn();
            });
        }
        if (this.oncePool[topic]) {
            this.oncePool[topic].forEach((fn) => {
                fn();
            });
            this.oncePool[topic] = [];
        }
    },
    off: function(topic, fn) {
        // ?
    },
    once: function(topic, fn) {
        if (this.oncePool[topic] ) {
            this.oncePool[topic].push(fn);
        } else {
            this.oncePool[topic] = [fn];
        }
    }
};

const fn = () => {
    console.log('0 --- hello world');
}
const fn1 = () => {
    console.log('1 ---- hello world ');
}
const fn2 = () => {
    console.log('once ---- hello world ');
}
app.on('click', fn);
app.on('click', fn1);
app.once('click', fn2);
app.trigger('click'); // 打印hello world
app.trigger('click'); // 打印hello world
app.trigger('click'); // 打印hello world
