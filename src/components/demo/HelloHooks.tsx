import React, { useState, useEffect } from "react"
import { Button } from "antd"

interface Greeting {
  name: string
  firstName?: string
  lastName?: string
}

const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState<string | null>(null)
  useEffect(() => {
    if (count > 5) {
      setText("plz wait a moment!")
    }
  }, [count])

  return (
    <>
      <p>点击了{count}次</p>
      {text}
      <Button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Hello {props.name}
      </Button>
    </>
  )
}

HelloHooks.defaultProps = {
  firstName: "",
  lastName: "",
}
export default HelloHooks
