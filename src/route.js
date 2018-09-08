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
    },

    // 业务管理
    // 客户管理
    // 会员查询
    {
        path: '/user/customer',
        component: asyncComponent(() => import('container/user/customer/customer'))
    },
    {
        path: '/user/customer/addedit',
        component: asyncComponent(() => import('container/user/customer/customer-addedit'))
    },
    {
        path: '/user/customer/account',
        component: asyncComponent(() => import('container/user/customer/customer-account'))
    },
    // 本地账户
    {
        path: '/user/customerAccount',
        component: asyncComponent(() => import('container/user/customer/customer-account'))
    },
    // 黑名单管理
    {
        path: '/user/customerBlackList',
        component: asyncComponent(() => import('container/user/customer/customer-blackList'))
    },

    // OTC交易管理
    // 购买交易
    {
        path: '/trade/buyTrade',
        component: asyncComponent(() => import('container/trade/buyTrade/buyTrade'))
    },
    {
        path: '/trade/buyTrade/addedit',
        component: asyncComponent(() => import('container/trade/buyTrade/buyTrade-addedit'))
    },
    // 出售交易
    {
        path: '/trade/saleTrade',
        component: asyncComponent(() => import('container/trade/saleTrade/saleTrade'))
    },
    {
        path: '/trade/saleTrade/addedit',
        component: asyncComponent(() => import('container/trade/saleTrade/saleTrade-addedit'))
    },
    // 交易手续费
    {
        path: '/trade/handsFee',
        component: asyncComponent(() => import('container/trade/handsFee/handsFee'))
    },
    {
        path: '/trade/handsFee/addedit',
        component: asyncComponent(() => import('container/trade/handsFee/handsFee-addedit'))
    },
    // OTC订单管理
    // 进行中订单
    {
        path: '/trade/underWayOrder',
        component: asyncComponent(() => import('container/trade/underWayOrder/underWayOrder'))
    },
    {
        path: '/trade/underWayOrder/addedit',
        component: asyncComponent(() => import('container/trade/underWayOrder/underWayOrder-addedit'))
    },
    // 已结束订单
    {
        path: '/trade/finishOrder',
        component: asyncComponent(() => import('container/trade/finishOrder/finishOrder'))
    },
    {
        path: '/trade/finishOrder/addedit',
        component: asyncComponent(() => import('container/trade/finishOrder/finishOrder-addedit'))
    },

    // 仲裁订单管理
    // 仲裁订单
    {
        path: '/trade/arbitrationOrder',
        component: asyncComponent(() => import('container/trade/arbitrationOrder/arbitrationOrder'))
    },
    {
        path: '/trade/arbitrationOrder/addedit',
        component: asyncComponent(() => import('container/trade/arbitrationOrder/arbitrationOrder-addedit'))
    },
    {
        path: '/trade/arbitrationOrder/resolve',
        component: asyncComponent(() => import('container/trade/arbitrationOrder/arbitrationOrder-resolve'))
    },
    // 仲裁通知人
    {
        path: '/trade/arbitrationNotifier',
        component: asyncComponent(() => import('container/trade/arbitrationNotifier/arbitrationNotifier'))
    },
    {
        path: '/trade/arbitrationNotifier/addedit',
        component: asyncComponent(() => import('container/trade/arbitrationNotifier/arbitrationNotifier-addedit'))
    },

    // 币种管理
    // 币种管理
    {
        path: '/biz/coin',
        component: asyncComponent(() => import('container/biz/coin/coin'))
    },
    {
        path: '/biz/coin/addedit',
        component: asyncComponent(() => import('container/biz/coin/coin-addedit'))
    },

    // 行情管理
    // 交易对管理
    {
        path: '/quotation/tradePair',
        component: asyncComponent(() => import('container/biz/quotation/tradePair'))
    },
    // BTC行情
    {
        path: '/quotation/quotationBTC',
        component: asyncComponent(() => import('container/biz/quotation/quotationBTC'))
    },
    // ETH行情
    {
        path: '/quotation/quotationETH',
        component: asyncComponent(() => import('container/biz/quotation/quotationETH'))
    },
    // X行情
    {
        path: '/quotation/quotationX',
        component: asyncComponent(() => import('container/biz/quotation/quotationX'))
    },
    // 法币汇率
    {
        path: '/quotation/exchangeRate',
        component: asyncComponent(() => import('container/biz/quotation/exchangeRate'))
    },

    // ETH财务管理
    // 充币管理
    // 线下充值
    {
        path: '/finance/offlineRecharge',
        component: asyncComponent(() => import('container/finance/offlineRecharge/offlineRecharge'))
    },
    {
        path: '/finance/offlineRecharge/addedit',
        component: asyncComponent(() => import('container/finance/offlineRecharge/offlineRecharge-addedit'))
    },
    // 充值查询
    {
        path: '/finance/offlineRechargeQuery',
        component: asyncComponent(() => import('container/finance/offlineRecharge/offlineRechargeQuery'))
    },

    // 提币管理
    // 提币地址
    {
        path: '/finance/TBAddress',
        component: asyncComponent(() => import('container/finance/TBAddress/TBAddress'))
    },
    // 线下提币
    {
        path: '/finance/TBunderline',
        component: asyncComponent(() => import('container/finance/TBunderline/TBunderline'))
    },
    {
        path: '/finance/TBunderline/addedit',
        component: asyncComponent(() => import('container/finance/TBunderline/TBunderline-addedit'))
    },
    {
        path: '/finance/TBunderline/multiCheck',
        component: asyncComponent(() => import('container/finance/TBunderline/TBunderline-multiCheck'))
    },

    // BTC财务管理
    // 充币管理
    // 线下充值
    {
        path: '/BTC-finance/offlineRecharge',
        component: asyncComponent(() => import('container/BTC-finance/offlineRecharge/offlineRecharge'))
    },
    {
        path: '/BTC-finance/offlineRecharge/addedit',
        component: asyncComponent(() => import('container/BTC-finance/offlineRecharge/offlineRecharge-addedit'))
    },
    // 充值查询
    {
        path: '/BTC-finance/offlineRechargeQuery',
        component: asyncComponent(() => import('container/BTC-finance/offlineRecharge/offlineRechargeQuery'))
    },

    // 提币管理
    // 提币地址
    {
        path: '/BTC-finance/TBAddress',
        component: asyncComponent(() => import('container/BTC-finance/TBAddress/TBAddress'))
    },
    // 线下提币
    {
        path: '/BTC-finance/TBunderline',
        component: asyncComponent(() => import('container/BTC-finance/TBunderline/TBunderline'))
    },
    {
        path: '/BTC-finance/TBunderline/addedit',
        component: asyncComponent(() => import('container/BTC-finance/TBunderline/TBunderline-addedit'))
    },
    {
        path: '/BTC-finance/TBunderline/multiCheck',
        component: asyncComponent(() => import('container/BTC-finance/TBunderline/TBunderline-multiCheck'))
    }
];

export default ROUTES;
