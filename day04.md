### es6

```

let:
1.变量不能重复声明 当前作用域不可以重复声明,在下一个作用域的时候可以重复声明
2.不存在变量提升
3.不影响作用域链 
4.块儿级作用域

const:
1.声明一个常量,不能更改.声明常量要初始化进行赋值
2.常量用大写
3.块儿级作用域
4.对于数组和对象的元素修改,不算做对常量的修改,不会报错
5.只能修改基础类型放到堆里面 不能修改引用数据类型

作用域链：
函数执行时，先在内部找这个变量如果找不到向上层找直到找到全局作用域或者undefined

作用域：变量的作用范围
在ES6之前，只有全局作用域和函数作用域，在ES6中，新增了块级作用域


变量解构赋值：
1.数组解构赋值：不能使用字符串 下标的形式
2.对象解构赋值：使用属性名进行结构 属性名可以重命名

箭头函数：
es6 允许使用（）=>定义函数
特点:
1.this是动态的this 的值取决于函数本身被谁调用
2.没有arguments伪数组,如果有绝对是来自于父组件
3.不能作为构造实例化对象


call、apply、bind三者的异同

共同点:

- 都可以改变this指向;
- 三者第一个参数都是`this`要指向的对象，如果如果没有这个参数或参数为`undefined`或`null`，则默认指向全局`window`

不同点:

- call 和 apply 会调用函数, 并且改变函数内部this指向.
- call 和 apply传递的参数不一样,call传递参数使用逗号隔开,apply使用数组传递，且`apply`和`call`是一次性传入参数，而`bind`可以分为多次传入
- `bind`是返回绑定this之后的函数


```

### day04

```
1.[...] 扩展运算符能将 数组 转换为逗号分隔的下参数序列]
2.symbol
1.Symbol的值是唯一的,用来解决命名冲突的问题
2.Symbol值不能和其他数据进行运算
3.Svmbol定义的对象属性不能使用for..in循环遍历但是可以使用Rflect,ownkeys来获取对象的所有键名
3.遍历器(lterator)
读法: 迭代器 生成器 遍历器
1，概念:是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 terapr 接口，就可以完成遍历操作(即依次处理该数据结构的所有成员

2.遍历过程.
(1)创建一个指针对象，指向当前数据结构的开始位置。遍历器对象本质上是一个指针对象.
(2) 第一次调用指针对象的 next 方法，可以将指针指向数据结构的第一个成员。
(3) 第二次调用指针对象的 next 方法，指针就指向数据结构的第二个成员。
(4)不断调用指针对象的 next 方法，直到它指向数据结构的结束位置。
每一次调用 next 方法，都会返回数据结构的当前成员的信息。返回一个包含 value 和 done 两个属性，value 属性值，done 属性是一个布尔值，表示遍历是否结束

3.生成器
1.概念:生成器一个特殊的函数 生成器的底层原理是根据遍历器
2.异步编程 纯回调函数 node fs ajax mongodb
3.代码编写

4.Promise
1.概念:promise函数是解决异步编程问题产生的,是一个容器，里面保存着某个未来才会结束的事件(通常是个异步操作)的结果。Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 AP1，各种异步操作都可以用同样的方法进行处理
2. 特点
1.对象的状态不受外界影响,有三种状态: pending (进行中)、fulfilled (已成功)和 rejected (已失败)
2.一旦状态改变就不会再变,任何时候都可以得到这个结果.
3.Promise 对象的状态改变，只有两种可能: 从 pending 变为 fulfilLed 和从 pending 变为 rejected 。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved(已定型)。如果改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。这与事件(Event)完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
```

### 获取元素的方法

```java
document 在这里是上下文的意思， 就是我在哪个范围里边去找元素

1.通过ID获取（getElementById）
getElementById()括号中的不需要在前面加“#”，因为方法就决定了括号中的值是一个元素的id值。该方法返回一个DOM对象。
<div id="box"></div>
<script>
    let box= document.getElementById("box");
</script>



2.通过name属性（getElementsByName）只有含有name属性的元素(表单元素)才能通过name属性获取
    <div id="box">
    <input type="text" name="user" />
    </div>
    <script>
    let userInput= document.getElementsByName("user");
    </script>
        
3.通过标签名（getElementsByTagName）
  返回的也是一个集合
    <div id="box">
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
</div>
<script>
    let pCollection= document.getElementsByTagName("p");
</script>

4.通过类名（getElementsByClassName）
 getElementsByClassName()括号中的不需要在前面加 “.” ，因为方法就决定了括号中的值是一个元素的class值。该方法返回一个集合。不能直接给集合绑定事件，需要获取到集合中的某一个元素，然后再为元素绑定事件。
    <div class="box"></div>
<div class="box"></div>
<script>
    let boxCollection= document.getElementsByClassName("box");
    let box1 = boxList[0];
    let box2 = boxList[1];
</script>
    
    
5.通过querySelector获取
  querySelector()方法括号中的值是元素的选择器，所以前面加了”#”符号，使用的是id选择器。此方法直接返回DOM对象本身
  <div id="box"></div>
<script>
    let box= document.querySelector("#box");
</script>  
    
    
6.通过querySelectorAll获取  
  querySelector()和querySelectorAll()方法括号中的取值都是选择器，两个方法是有区别的。当有多个class相同的元素时，使用querySelector()方法只能获取到第一个class为box的元素，而querySelectorAll()获取到了所有class为box的元素集合。
<div class="box">box1</div>
<div class="box">box2</div>
<div class="box">box3</div>
<div class="box">box4</div>
<div class="box">box5</div>
<script>
    let box1= document.querySelector(".box");
    let boxes= document.querySelectorAll(".box");
</script>

7.获取html的方法（document.documentElement）
8.获取body的方法（document.body）
```

