import React, { useEffect, useRef, useState } from 'react';

export default function Login(props: any) {
  useEffect(() => {
    // mock 测试
    fetch('/users')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <h1>Login</h1>
      <input type="text" onChange={(evt) => {
          setUsername(evt.target.value);
        }}
      />
      <br />
      <input type="password" onChange={(evt) => {
          setPassword(evt.target.value);
        }}
      />
      <button onClick={() => {
          console.log(username, password);
          // mock 登陆
          fetch('/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            }),
          }).then((res) => res.json()).then((res) => {
              console.log(res);
              if (res.ok) {
                localStorage.setItem('token', 'token123');
                props.history.push('/center');
              } else {
                alert('用户名与密码不匹配');
              }
            });
        }}
      >
        登陆
      </button>
    </div>
  );
}
