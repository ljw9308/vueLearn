## Runtime Only（只包含运行时） VS Runtime+Compiler(运行时+编译器)?
**Runtime Only**	 		
通常需要借助如 webpack的 vue-loader工具把 .vue文件编译成 JavaScript，因为是在编译阶段做的，所以它只包含运行时的 Vue.js 代码，因此代码体积也会更轻量（预编译）。	
**Runtime+Compiler**	
我们如果没有对代码做预编译，但又使用了 Vue 的 template 属性并传入一个字符串，则需要在客户端编译模板，如下所示：
```javascript
// 需要编译器
new Vue({
  template: '<div>{{ hi }}</div>'
})
// 不需要编译器
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
```
因为在 Vue.js 2.0 中，最终渲染都是通过 render 函数。	
如果你需要在客户端编译模板 (比如传入一个字符串给 template 选项，或挂载到一个元素上并以其 DOM 内部的 HTML 作为模板)，就将需要加上编译器，即完整版。	
当使用 vue-loader 或 vueify 的时候，*.vue 文件内部的模板会在构建时预编译成 JavaScript。你在最终打好的包里实际上是不需要编译器的，所以只用运行时版本即可。
## Vue函数
Vue的本质上就是一个用Function 实现的 Class，然后它的原型 prototype 以及它本身都扩展了⼀系列的方法和属性，我们只能通过new Vue 去实例化它
## Vue为什么不适用ES6的class去实现?
xxxMixin函数，把Vue当参数传入，给Vue 的 prototype 上扩展一些方法。
Vue按功能把这些扩展分散到多个模块中去实现，而不是在一个模块里实现，而不 是在一个模块内实现所有，这种方式是用 Class难以实现的	


虚拟Dom
Virtual DOM 除了它的数据结构的定义，映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程。
VNode 的 create 是通过之前提到的 createElement ⽅法创建的  


