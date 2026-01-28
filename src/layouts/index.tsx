import React from 'react'
import { NavLink } from 'umi'
import './index.less' //导入样式文件

const NavLinkComp = NavLink as any;

// 根组件
export default function indexLayout(props: any) {
  return (
    <div>
      {props.children}
      <ul>
        <li>
          <NavLinkComp to="/film" activeClassName="active">
            电影
          </NavLinkComp>
        </li>
        <li>
          <NavLinkComp to="/cinema" activeClassName="active">
            影院
          </NavLinkComp>
        </li>
        <li>
          <NavLinkComp to="/message" activeClassName="active">
            资讯
          </NavLinkComp>
        </li>
        <li>
          <NavLinkComp to="/center" activeClassName="active">
            我的
          </NavLinkComp>
        </li>
      </ul>
    </div>
  );
}
