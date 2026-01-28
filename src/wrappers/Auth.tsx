import React from 'react';
import { Redirect } from 'umi';

const RedirectComp = Redirect as any;

export default function Auth(props: any) {
  if (localStorage.getItem('token')) {
    return (
      <div>
        {props.children}  {/* 插槽替换的是 Center 组件 */}
      </div>
    );
  }
  return <RedirectComp to="/login" />;
}
