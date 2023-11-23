# 实现继承的方法



### 1、原型继承

实现：

```js
function Super(){ this.a=1 }
Super.prototype.say = function(){ console.log(‘hhh’) }
function Sub(){}
Sub.prototype = new Super()

const test = new Sub()
console.log( test.say() )// hhh
```

优点：通过原型继承多个引用类型的属性和方法

缺点：Sub原型变成了Super的实例，如果Super的实例某个属性是引用值，该引用值就会被应用到所有Sub创建的实例中去，会有污染问题。如下

```js
function Super(){ this.a=[1,2] }
function Sub(){}
Sub+.prototype = new Super()

const test1 = new Sub()
test1.a.push(3)
console.log(test1.a)// [1,2,3]
const test2 = new Sub()
console.log(test2.a)// [1,2,3]
```

### 2、盗用构造函数

实现：构造函数模式+call

```js
// 构造函数
function Super = function(){ 
  this.a = 1 
}
function Sub = function(){
       Super.call(this)
       this.b = 2
}

const test = new Sub() 
// test log
```

优点：每个实例都会有自己的a属性，哪怕是引用值也不会被污染

缺点：Super构造函数中的方法在每个实例上都要创建一遍（除非该方法声明提到全局）；Sub的实例无法访问Super原型上的方法

### 3、组合继承

实现：原型继承+盗用构造函数继承

```js
	function Super(){ 
            this.a=[1,2] 
        }
		Super.prototype.say = function(){ console.log('hhh') }
		function Sub(){
		    Super.call(this)
		    this.b=2
		}
		Sub.prototype = new Super()

		const test1 = new Sub()
		console.log( test1.say() )// hhh
		test1.a.push(3)
		console.log(test1.a)// [1,2,3]
		const test2 = new Sub()
		console.log(test2.a)// [1,2]
```

优点：集合了【原型继承】和【盗用构造函数继承】的优点

缺点：存在效率问题，Super始终会被调用两次

### 4、原型式继承

实现：

es5之前

```js
   const obj = { a:1 }
                function createObj(o){
                    const Fn = function(){}
                    Fn.prototype = o
                    return new Fn()
                }

                const test = createObj(obj)
```

es5之后

```js
const obj = { a:1 }

const test = Object.create(obj)
```

优点：对一个对象进行浅克隆创建另一个对象，同时继承该对象的原型属性

缺点：无法判断实例的构造函数是父类还是子类

```js
const obj = { a:[1,2], b:2 }
const test1 = Object.create(obj)
const test2 = Object.create(obj)

test1.a.push(3)
test1.b=3
console.log(test1.a, test2.a)// [1,2,3]  [1,2,3]
console.log(test1.b, test2.b)// 3 2
```

### 5、寄生式继承

实现：构造函数模式+工厂模式

```js
 function objectCopy(o){
                    const Fn = function(){}
                    Fn.prototype = o
                    return new Fn()
                }
		function createObj(o) {
			let clone = objectCopy(o);
			clone.say = function () {
				console.log('hhh');
			};
			return clone;
		}

		const obj = { a: 1 };
		const test = createObj(obj);
```

优点：根据一个对象克隆创建另一个对象，并增强对象

缺点：同【盗用构造函数继承】方法在每个实例上都要创建一遍

注意：objectCopy不是原生接口，是自定义方法，对入参对象进行复制

### 6、寄生式组合继承

实现：盗用构造函数继承 + 原型式继承

``` js
function Super(){ this.a=[1,2] }
Super.prototype.say = function(){ console.log(‘hhh’) }
function Sub(){
    Super.call(this)
    this b=2
}

Sub.prototype = Object.create(Super.prototype)
Sub.prototype.constructor = Sub

const test = new Sub()
```