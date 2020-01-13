import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }

  //代码逻辑：合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher 等等
  //最后调用$mount方法，Vue 实例挂载的实现
  //生命周期  beforeCreate，created
  this._init(options)
}

/*

Vue为什么不适用ES6的class去实现?
答：xxxMixin函数，把Vue当参数传入，给Vue 的 prototype 上扩展⼀些方法。
Vue按功能把这些扩展分散到多个模块中去实现，而不是在一个模块里实现，而不 是在一个模块内实现所有，这种方式是用 Class难以实现的

*/

//Vue构造函数的原型属性prototype添加方法
initMixin(Vue)   //添加prototype._init私有方法
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)  //添加prototype._render私有方法

export default Vue
