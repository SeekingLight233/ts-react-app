// let hello: string = "hello Typescript"
// document.querySelectorAll(".app")[0].innerHTML = hello
import "antd/dist/antd.css"
import React from "react"
import ReactDOM from "react-dom"
import Hello from "./components/demo/Hello"
import HelloClass from "./components/demo/HelloClass"

ReactDOM.render(
  <HelloClass name="typescript!" firstName="jason" lastName="lee"></HelloClass>,
  document.querySelectorAll(".app")[0]
)
