import React, { Component } from "react"

interface Loading {
  loading: boolean
}

//编写HOC来控制组件渲染
function HOC<P>(WrappedComponent: React.ComponentType<P>) {
  //返回一个新的组件,指定被包装属性的类型为泛型P
  return class extends Component<P & Loading> {
    //混入属性
    render() {
      const { loading, ...props } = this.props
      return loading ? (
        <div>loading...</div>
      ) : (
        <WrappedComponent {...(props as P)}></WrappedComponent>
      )
    }
  }
}
//暴露HOC函数
export default HOC
