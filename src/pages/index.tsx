import React from 'react'
import { Redirect } from 'umi';

// 解决：“Redirect”不能用作 JSX 组件。
const RedirectComp = Redirect as any;

export default function index() {
  return <RedirectComp to="/film" />;
}
