/**
 * 分发队列
 * subject = [observer, observer]
 * state change ==> 通知subject执行observer队列
 * api: subscribe(fn)
 * 例子: redux
 */
const observerPattern = () => {
    const subject = [];
    return {
        subscribe: (observer) => {
            subject.push(observer);
        },
        notify: (value) => {
            subject.forEach((observer) => {
                observer(value);
            });
        },
    };
};
const observerP = observerPattern();
observerP.subscribe((value) => {
    // 打日志
    console.log(value);
});
observerP.subscribe((value) => {
    // 改变preview
    document.getElementById('preview').innerHTML = value;
});
document.getElementById('input').addEventListener('input', (event) => {
    let value = event.target.value;
    observerP.notify(value);
});
