import React from 'react';

function Center(props: any) {
  return (
    <div>
      Center
      <button
        onClick={() => {
          localStorage.removeItem('token');
          props.history.push("/login")
        }}
      >
        退出登陆
      </button>
    </div>
  );
}
// 给Center增加一个装饰器
Center.wrappers = ['@/wrappers/Auth'];
export default Center;
