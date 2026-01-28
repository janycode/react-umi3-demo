import React from 'react'

export default function Login(props: any) {
  return (
      <div>
          Login
          <button onClick={() => {
              localStorage.setItem("token", "123")
              props.history.push("/center")
          }}>登陆</button>
      </div>
  )
}
