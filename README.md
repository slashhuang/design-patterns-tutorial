# design-patterns-tutorial

## Usage 使用

```bash

	git clone git@github.com:slashhuang/design-patterns-tutorial.git --depth=1

	cd design-patterns-tutorial

	## open html file to check results

```

### Demo 查看演示

> 简易日志系统演示simple decorator log system 

[decorator设计模式](./decorator.html)

> 简单的对象回调数组演示 simple observer array 

[observer设计模式](./observer.html)

> 结合事件进行的订阅发布模式 pub-sub handler combined with DOM events

[pub-sub设计模式](./pub-sub.html)

> 内存管理之单例模式 memory saving strategy with singleton

[singleton设计模式](./singleton.html)


## FAQ

#### 1. 观察者模式与发布订阅模式如何区分？

##### observer vs pub/sub

eg. $('input').change() 做三件事件

-  pub/sub   ==> 是根据topic 比如click等来执行通知

trigger('日志') trigger('发起请求) trigger(UI')

-  observer  ==> 比如 redux.subscribe的api就是这样子
不会对事情做区分
['日志','发起请求','UI'].forEach(fn) 

#### 2. 单例模式应用场景

dialog或者modal组件

```js
	<button> =>  click  => 弹出modal、dialog  ==> 点击叉叉隐藏 
	<button> =>  click  => 弹出modal、dialog  ==> 点击叉叉隐藏

```



### Author contact

[github](https://github.com/slashhuang)

[zhihu](https://www.zhihu.com/people/huang-da-xian-14-14)
