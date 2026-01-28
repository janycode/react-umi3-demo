import React from 'react'

function Center() {
  return (
    <div>Center</div>
  )
}
// 给Center增加一个装饰器
Center.wrappers = ["@/wrappers/Auth"]
export default Center