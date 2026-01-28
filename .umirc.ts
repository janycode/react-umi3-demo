import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 注释 routes 为了让 自动生成路由生效
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  // 配置路由模式
  history: {
    type: 'hash', //默认是 browser 路由模式
  },
  proxy: {
    '/ajax': {
      target: 'https://m.maoyan.com',
      changeOrigin: true,
    },
  },
  // 禁用 umi 自带的 antd 使用自己安装的版本：npm i antd-mobile
  antd: {
    mobile: false
  }
});
