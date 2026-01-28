import React from 'react';
import { Redirect, useLocation } from 'umi';

// 解决：“Redirect”不能用作 JSX 组件。
const RedirectComp = Redirect as any;

// _layout.tsx 即默认为  /film 路由
export default function Film(props: any) {
    const location = useLocation()
    if (location.pathname === "/film" || location.pathname === "/film/") {
      return <RedirectComp to="/film/nowplaying" />;
    }
  return (
    <div>
      <div style={{ width: '100%', height: '200px', background: 'yellow' }}>
        大轮播
      </div>
      {props.children}
    </div>
  );
}
