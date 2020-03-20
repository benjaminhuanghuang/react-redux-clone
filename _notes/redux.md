## redux的四个角色
## action
action is a JavaScript，它必须要有一个type属性用来标识这个action的用途，reducer 会根据type进行不同处理，value属性是action携带来自View的数据
```
const addAction = {
    type: "ADD",
    value:  {

    }
}
```

action的表示方式也可以是一个函数，这样可以更方面的构建action,但这个函数必须返回一个对象。
```
const addAction = (val) => ({
    type:"ADD",
    value: val
})
```

## reducer
educer指定了应用状态的变化如何响应 actions 并发送到 store
```
  const reducer = (state ={},action){
      switch(action.type){
          case :
            ......
          case :
            ......
          case :
            ......
          default :
            return state;
      }
  }
```
## dispatch
dispatch的作用是派发一个action去执行reducer。

## store
store可以说是redux的核心

store是redux状态管理的唯一数据源，除此之外，store还是将dispatch、reducer等联系起来的命脉。

store通过redux提供的createStore创建，它是一个对象，有如下属性：
store.getState()  获取状态的唯一途径
store.dispatch(action) 派发action响应reducer
store.subscribe(handler) 监听状态的变化
