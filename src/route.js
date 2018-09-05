import asyncComponent from './component/async-component/async-component';

const ROUTES = [
  {
    path: '/system/role',
    component: asyncComponent(() => import('container/system/role/role'))
  },
  {
    path: '/system/role/addedit',
    component: asyncComponent(() => import('container/system/role-addedit/role-addedit'))
  },
  {
    path: '/system/role/menu',
    component: asyncComponent(() => import('container/system/role-menu/role-menu'))
  },
  {
    path: '/system/role/nodemenu',
    component: asyncComponent(() => import('container/system/node-menu/node-menu'))
  },
  {
    path: '/system/menu',
    component: asyncComponent(() => import('container/system/menu/menu'))
  },
  {
    path: '/system/menu/addedit',
    component: asyncComponent(() => import('container/system/menu-addedit/menu-addedit'))
  },
  {
    path: '/system/user',
    component: asyncComponent(() => import('container/system/user/user'))
  },
  {
    path: '/system/user/role',
    component: asyncComponent(() => import('container/system/user/assign'))
  },

  //  系统参数
  {
    path: '/system/sysPara',
    component: asyncComponent(() => import('container/system/sysParam/sysParam'))
  },
  //  系统参数修改
  {
    path: '/system/sysPara/addedit',
    component: asyncComponent(() => import('container/system/sysParam-addedit/sysParam-addedit'))
  },
  {
    path: '/system/dataDict',
    component: asyncComponent(() => import('container/system/dataDict/dataDict'))
  },
  {
    path: '/system/dataDict/addedit',
    component: asyncComponent(() => import('container/system/dataDict-addedit/dataDict-addedit'))
  },
  {
    path: '/system/user/addedit',
    component: asyncComponent(() => import('container/system/user-addedit/user-addedit'))
  },
  {
    path: '/system/node',
    component: asyncComponent(() => import('container/system/node/node'))
  },
  {
    path: '/system/node/addedit',
    component: asyncComponent(() => import('container/system/node-addedit/node-addedit'))
  },
  {
      path: '/system/node/setMateriallist',
      component: asyncComponent(() => import('container/system/node-setMateriallist/node-setMateriallist'))
  },
  {
    path: '/public/aboutus_addedit',
    component: asyncComponent(() => import('container/public/aboutus-addedit/aboutus-addedit'))
  },
  {
    path: '/public/hotLine_addedit',
    component: asyncComponent(() => import('container/public/hotLine-addedit/hotLine-addedit'))
  },
  {
    path: '/public/time_addedit',
    component: asyncComponent(() => import('container/public/time-addedit/time-addedit'))
  },
  {
    path: '/public/notice',
    component: asyncComponent(() => import('container/public/notice/notice'))
  },
  {
    path: '/public/notice/addedit',
    component: asyncComponent(() => import('container/public/notice-addedit/notice-addedit'))
  },
  {
    path: '/public/banner',
    component: asyncComponent(() => import('container/public/banner/banner'))
  },
  {
    path: '/public/banner/addedit',
    component: asyncComponent(() => import('container/public/banner-addedit/banner-addedit'))
  },
  {
    path: '/general/textParam',
    component: asyncComponent(() => import('container/general/text-param/text-param'))
  },
  {
    path: '/general/textParam/addedit',
    component: asyncComponent(() => import('container/general/text-param-addedit/text-param-addedit'))
  }
];

export default ROUTES;
