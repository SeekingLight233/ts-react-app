// let hello: string = "hello Typescript"
// document.querySelectorAll(".app")[0].innerHTML = hello
import "antd/dist/antd.css"
import React from "react"
import ReactDOM from "react-dom"
import Hello from "./components/demo/Hello"
import HOC from "./components/demo/HelloHoc"
import HelloClass from "./components/demo/HelloClass"

const HocHello = HOC(HelloClass)
ReactDOM.render(
  // <HelloClass name="typescript!" firstName="jason" lastName="lee"></HelloClass>,
  <HocHello name="jason" loading={true}></HocHello>,
  document.querySelectorAll(".app")[0]
)
