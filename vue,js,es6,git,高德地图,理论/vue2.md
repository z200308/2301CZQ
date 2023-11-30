#                                                                             vue2

## 1.ref和$ref

```中文
ref可以获取dom元素和子组件的实例

获取dom： 标签添加ref属性  通过this.$refs.xx获取标签
获取组件： 标签添加ref属性  通过this.$refs.xx获取组件
```



## 2.sync

```中文
可实现父子组件双向数据绑定

使用场景：
	封装弹框组件
```



## 3.指令

```
指令分为两种:分别是自定义指令和内置指令
 1.内置指令:
	v-html
	v-text
	v-for
	v-if
	v-else
	v-bloak
	v-bind
	v-model
	v-pre
	v-on
	v-once
	v-show
2.自定义指令:可以封装一些dom操作，扩展额外的功能
(1)全局注册:				
vue.directive('指令名',{		
'inserted'(el,binding){
	//对el标签扩展额外功能
	el.focus()
}
})
(2)局部注册:
directives:{
'指令名':{
	'inserted'(el,binding){
		el.focus()
		}
	}
}

在绑定指令时，可以通过等号形式为指令绑定具体的参数值
通过binding,value可以拿到指令值
指令值会触发update函数
```



## 4.插槽slot

```
插槽分为三种:
匿名插槽
具名插槽: 使用name属性传值
作用域插槽:
	(1)给slot标签以添加属性的方式传值
	(2)所有被添加的属性，都会被收集到一个对象中
	(3)再template中，通过slot-scope="obj" 接收 默认插槽名是default
```



## 5.props

```
第一种：使用数组的方法
props: ['value1', 'value2', 'value3']


第二种：使用对象方法
props:{
	props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true // 是否必填选项
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].includes(value)
      }
    }
  }
}
```



## 6.$nextTick

```
$nextTick也叫做异步更新队列⽅法,⽽$nextTick⽅法的主要作⽤就是等待dom元素加载完毕之后才
会执⾏的回调函数,我们经常会在$nextTick⽅法⾥⾯获取dom元素
```



## 7.路由的传参方式

```中文
1.声明式导航
	在 router-link 上的 to 属性传值,
	/path?参数名=值
	接收传递过来的值: $route.query.参数名
	/path/值/值 –> 需要路由对象提前配置 path: “/path/参数名”
	接收传递过来的值: $route.params.参数名
	
	
2.编程式导航
	this.$router.push( ) 可以不传参数
因为使用path会自动忽略params ,所以会出现两种组合
(1) name+params 方式传参
A页面传参
this.$router.push({
    name: 'xxx', // 跳转的路由
    params: {
      id: id   // 发送的参数
    }
})
复制代码B页面接收传参：
this.$route.params.id

(2) path+query 方式传参
A页面传参
this.$router.push({
    path: '/xxx', // 跳转的路由
    query: {
      id: id    // 发送的参数
    }
})
复制代码B页面接参：
this.$route.query.id


3.props:
1.写死对象props:{a:xxx}
2.props:true,只能接受params传参
3.函数形式 props: function(){
retutin{
tile:route.query.title
}
}
组件中的声明props进行取值
4.replace,forward前进，back后退,go()可前进可后退
```



## 8.query和params的区别

```中文
1.同点
	都可以用来传参
	都可以在组件中通过$route对象访问；
	传递的数据可以是字符串，数字，对象等类型
2.不同点
	query传参刷新不会丢失，params会丢失
	params传参地址栏不可见，query传参地址栏会显示
	params可以和动态路由一起用，query不行
	params只能使用name
```



## 9.keep-alive

```中文
keep-alive是vue的内置组件，他的主要作用是在vue进行组件切换的时候将状态
保留在内存中进行缓存，从而减少dom的重复渲染

keep-alive有三个属性分别是:
include:名称匹配的组件会被缓存
exclude:名称匹配的组件不会被缓存
max:最多可以换成组件的数量

keep-alive的两个狗子函数:
activated:组件被激活时调用
deactivated:组件被停用时调用

使用场景:
(1)搭配<component></component>使用
(2)搭配路由使用
(3)清楚缓存组件
```



## 10.mixin(混入)

```中文
将组件的公共逻辑或者配置提取出来，哪个组件需要用到时，直接将提取的这部分混入到组件内部即可。

使用方式
	新建一下mixin文件在创建一个js文件, 使用的时候用import引入。
	当出现重复的属性时是组件优先，mixin的生命周期先执行当两个mixin有重复值时根据mixin的引入顺序来决定值得顺序
	
/*次要*/
`mixins` 选项接受一个 mixin 对象数组。这些 mixin 对象可以像普通的实例对象一样包含实例选项，它们将使用一定的选项合并逻辑与最终的选项进行合并。举例来说，如果你的 mixin 包含了一个 `created` 钩子，而组件自身也有一个，那么这两个函数都会被调用。

Mixin 钩子的调用顺序与提供它们的选项顺序相同，且会在组件自身的钩子前被调用。

  Plugins 

  插件 (Plugins) 是一种能为 Vue 添加全局功能的工具代码 

 *import* { createApp } *from* 'vue' const app = createApp({}) app.use(myPlugin, {  */\* || \*/* }) 
```



## 11.响应式数据原理

```
通过object.defineProperty()来实现数据劫持和发布订阅者模式

数据劫持：
	当data一个vue实例被访问时vue会对data中的每个数据使用object.defineProperty()方法进行劫持
将其转为访问器属性, 在 Vue 中，我们使⽤了访问器属性，即 get 和 set ⽅法，来劫持数据的读取和修改。

发布订阅者模式：
	当我们访问⼀个响应式数据时，Vue 会将当前的 Watcher 对象添加到该数据的订阅列表中。当数 据发⽣变化时，Vue 会通知订阅列表中的所有 Watcher 对象，从⽽触发视图的更新。这种实现⽅式 可以看作是⼀种订阅发布者模式，其中响应式数据是发布者，Watcher 对象是订阅者。
```



## 12.vue组件通信

```
父传子： 在子组件标签上自定义属性，子级用props接收
子传父： 在子级用this.$emit('事件名称',传递的值), 父组件通过监听自定义事件来接收参数
中央事件总线: 传递用this.$bus.$emit传递,接收在created中用this.$bus.$on接收
本地存储
vuex
ref,refs
.sync修饰符
```



## 13.路由的模式

```中文
hash模式：
使用hash模式的地址会带有#号，#号后面的部分就是hash他只作为前端的一个标记不会出现在http请求中
hash模式浏览器并不会重新请求服务器，其原理就是onhashchange()事件，

history模式：
history模式前后端的请求地址必须保持一致否则切换和刷新页面会报404错误
history的两种模式 切换历史状态和修改历史状态
切换历史状态：H5新增的replaceState和pushState，可以在不刷新⻚⾯的情况下修改浏览器的历史记录
历史状态： back，go， forword
```



## 14.计算属性和监听器

```
计算属性和监听器都是用来观察数据变化已执行相应操作的特殊属性

计算属性computed
计算属性是基于它们的响应式依赖进行缓存的，只有当依赖的数据发生变化时，它们才会重新计算
这样可以避免不必要的计算

监听器watch
监听器用于观察一个数据的变化，并在变化时执行特定的操作。当数据发生变化时，就会被调用
通常用于对数据进行异步操作，复杂逻辑处理等

区别
computed  具备缓存   不支持异步
watch     不具备缓存  支持异步

```



## 15.虚拟dom

```
由模板生成的js对象再由js对象生成真实的dom元素对复杂的dom元素提供了一种方便的开发工具最小化的dom操作。

工作原理:
应用初始化时，通过解析模板或组件生成虚拟dom
当数据发生变化时，生成一个新的虚拟dom
比较新旧虚拟dom的差异，并记录下需要更新的部分
根据差异信息，只对需要更新的部分进行真实的dom操作
```



## 16.diff算法

```
当data发生改变时，会根据新的数据生成一个新的虚拟dom，
新的虚拟dom和旧的虚拟dom进行对比，这个对比的过程就是diff算法，
会找到不同地方，只去渲染不同的地方
对比时会返回一个patch对象，patch对象存储两个节点不同的地方,
并进行局部渲染
```



## 17.修饰符

```
stop:阻止冒泡
prevent:阻止默认事件
capture:事件捕获
self: 事件只作用于元素本身
once:事件只触发一次
native:事件穿透
number:输入的值自动转换为数字类型
lazy:change事件触发时更新
trim:输入值自动去除首尾空格
sync：双向绑定，⼦组件可以修改⽗组件的数据。
passive:指定指令的事件监听器为被动模式
```

