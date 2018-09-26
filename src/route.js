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
        path: '/public/aboutus',
        component: asyncComponent(() => import('container/public/aboutus-addedit/aboutus-addedit'))
    },
    {
        path: '/public/contact',
        component: asyncComponent(() => import('container/public/contact-addeidt/contact-addeidt'))
    },
    {
        path: '/public/privacy',
        component: asyncComponent(() => import('container/public/privacy-addeidt/privacy-addeidt'))
    },
    {
        path: '/public/register',
        component: asyncComponent(() => import('container/public/register-addeidt/register-addeidt'))
    },
    {
        path: '/public/buyADS',
        component: asyncComponent(() => import('container/public/buyADS/buyADS'))
    },
    {
        path: '/public/buyADS/addedit',
        component: asyncComponent(() => import('container/public/buyADS/buyADS-addedit'))
    },
    {
        path: '/public/sellETH',
        component: asyncComponent(() => import('container/public/sellETH/sellETH'))
    },
    {
        path: '/public/sellETH/addedit',
        component: asyncComponent(() => import('container/public/sellETH/sellETH-addedit'))
    },
    {
        path: '/public/TransactionRemind',
        component: asyncComponent(() => import('container/public/TransactionRemind/TransactionRemind-addedit'))
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
        path: '/user/customer/editAdvertisementFee',
        component: asyncComponent(() => import('container/user/customer/customer-editAdvertisementFee'))
    },
    {
        path: '/user/customer/accountQuery',
        component: asyncComponent(() => import('container/user/customer/customer-account'))
    },
    {
        path: '/user/customer/entrustQuery',
        component: asyncComponent(() => import('container/user/customer/customer-entrustQuery'))
    },
    {
        path: '/user/customer/ledgerQuery',
        component: asyncComponent(() => import('container/user/customer/customer-ledgerQuery'))
    },
    {
        path: '/user/customer/accountSummary',
        component: asyncComponent(() => import('container/user/customer/customer-accountSummary'))
    },
    // kyc审核
    {
        path: '/user/kycCheck',
        component: asyncComponent(() => import('container/user/kycCheck/kycCheck'))
    },
    {
        path: '/user/kycCheck/addedit',
        component: asyncComponent(() => import('container/user/kycCheck/kycCheck-addedit'))
    },
    // 资料审核
    {
        path: '/user/dataCheck',
        component: asyncComponent(() => import('container/user/dataCheck/dataCheck'))
    },
    {
        path: '/user/dataCheck/addedit',
        component: asyncComponent(() => import('container/user/dataCheck/dataCheck-addedit'))
    },
    // 历史分红名单
    {
        path: '/user/historyDivideList',
        component: asyncComponent(() => import('container/user/historyDivideList/historyDivideList'))
    },
    {
        path: '/user/historyDivideList/divideList',
        component: asyncComponent(() => import('container/user/historyDivideList/historyDivideList-divideList'))
    },
    {
        path: '/user/historyDivideList/divide',
        component: asyncComponent(() => import('container/user/historyDivideList/historyDivideList-divide'))
    },
    // 佣金结算历史
    {
        path: '/user/commissionsHistoryList',
        component: asyncComponent(() => import('container/user/commissionsHistoryList/commissionsHistoryList'))
    },
    {
        path: '/user/commissionsHistoryList/commissions',
        component: asyncComponent(() => import('container/user/commissionsHistoryList/commissionsHistoryList-commissions'))
    },
    // 黑名单管理
    {
        path: '/user/customerBlackList',
        component: asyncComponent(() => import('container/user/customer/customer-blackList'))
    },
    {
        path: '/user/customerBlackList/addedit',
        component: asyncComponent(() => import('container/user/customer/customer-blackListAddedit'))
    },

    // 渠道商管理
    // 渠道商管理
    {
        path: '/user/channelDealer',
        component: asyncComponent(() => import('container/user/channelDealer/channelDealer'))
    },
    {
        path: '/user/channelDealer/addedit',
        component: asyncComponent(() => import('container/user/channelDealer/channelDealer-addedit'))
    },
    {
        path: '/user/channelDealer/accountQuery',
        component: asyncComponent(() => import('container/user/customer/customer-account'))
    },
    // 待结算佣金名单
    {
        path: '/user/channelDealerCommissions',
        component: asyncComponent(() => import('container/user/channelDealerCommissions/channelDealerCommissions'))
    },
    {
        path: '/user/channelDealerCommissions/checklist',
        component: asyncComponent(() => import('container/user/channelDealerCommissions/channelDealerCommissions-checklist'))
    },
    {
        path: '/user/channelDealerCommissions/settlement',
        component: asyncComponent(() => import('container/user/channelDealerCommissions/channelDealerCommissions-settlement'))
    },
    // 佣金结算历史
    {
        path: '/user/channelDealerSettleHistory',
        component: asyncComponent(() => import('container/user/channelDealerCommissions/channelDealerSettleHistory'))
    },
    {
        path: '/user/channelDealerSettleHistory/commissions',
        component: asyncComponent(() => import('container/user/channelDealerCommissions/channelDealerSettleHistory-commissions'))
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

    // 承兑商管理
    // 收款方式
    {
        path: '/accept/payment',
        component: asyncComponent(() => import('container/biz/accept/payment/payment'))
    },
    {
        path: '/accept/payment/addedit',
        component: asyncComponent(() => import('container/biz/accept/payment/payment-addedit'))
    },
    // 购买订单
    {
        path: '/accept/buyOrder',
        component: asyncComponent(() => import('container/biz/accept/buyOrder/buyOrder'))
    },
    {
        path: '/accept/buyOrder/addedit',
        component: asyncComponent(() => import('container/biz/accept/buyOrder/buyOrder-addedit'))
    },
    // 出售订单
    {
        path: '/accept/saleOrder',
        component: asyncComponent(() => import('container/biz/accept/saleOrder/saleOrder'))
    },
    {
        path: '/accept/saleOrder/addedit',
        component: asyncComponent(() => import('container/biz/accept/saleOrder/saleOrder-addedit'))
    },
    // 已完成订单
    {
        path: '/accept/finishOrder',
        component: asyncComponent(() => import('container/biz/accept/finishOrder/finishOrder'))
    },
    {
        path: '/accept/finishOrder/addedit',
        component: asyncComponent(() => import('container/biz/accept/finishOrder/finishOrder-addedit'))
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

    // 活动管理
    // 邀请好友
    {
        path: '/activity/invitingFriends',
        component: asyncComponent(() => import('container/biz/activity/invitingFriends/invitingFriends'))
    },
    {
        path: '/activity/invitingFriends/addedit',
        component: asyncComponent(() => import('container/biz/activity/invitingFriends/invitingFriends-addedit'))
    },
    // 邀请好友链接文本
    {
        path: '/activity/invitingTxt',
        component: asyncComponent(() => import('container/biz/activity/invitingHref/invitingTxt-addedit'))
    },
    // 业务规则
    // 广告费规则
    {
        path: '/rules/advertisingFee',
        component: asyncComponent(() => import('container/rules/advertisingFee/advertisingFee'))
    },
    {
        path: '/rules/advertisingFee/addedit',
        component: asyncComponent(() => import('container/rules/advertisingFee/advertisingFee-addedit'))
    },
    // 币币交易手续费规则
    {
        path: '/rules/simuOrderRule',
        component: asyncComponent(() => import('container/rules/simuOrderRule/simuOrderRule'))
    },
    {
        path: '/rules/simuOrderRule/addedit',
        component: asyncComponent(() => import('container/rules/simuOrderRule/simuOrderRule-addedit'))
    },
    // 提币手续费规则
    {
        path: '/rules/withdrawUserFee',
        component: asyncComponent(() => import('container/rules/withdrawUserFee/withdrawUserFee'))
    },
    {
        path: '/rules/withdrawUserFee/addedit',
        component: asyncComponent(() => import('container/rules/withdrawUserFee/withdrawUserFee-addedit'))
    },
    // 承兑商手续费规则
    {
        path: '/rules/acceptRule',
        component: asyncComponent(() => import('container/rules/acceptRule/acceptRule'))
    },
    {
        path: '/rules/acceptRule/addedit',
        component: asyncComponent(() => import('container/rules/acceptRule/acceptRule-addedit'))
    },

    // ETH财务管理
    // 平台账户
    {
        path: '/finance/platformAccount',
        component: asyncComponent(() => import('container/finance/platformAccount/platformAccount'))
    },
    {
        path: '/finance/platformAccount/ledger',
        component: asyncComponent(() => import('container/user/customer/customer-ledgerQuery'))
    },
    // 分发地址
    {
        path: '/finance/diviAddress',
        component: asyncComponent(() => import('container/finance/diviAddress/diviAddress'))
    },
    {
        path: '/finance/diviAddress/addedit',
        component: asyncComponent(() => import('container/finance/diviAddress/diviAddress-ledger'))
    },
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
    // 归集地址
    {
        path: '/finance/GJAddress',
        component: asyncComponent(() => import('container/finance/GJAddress/GJAddress'))
    },
    {
        path: '/finance/GJAddressQuery',
        component: asyncComponent(() => import('container/finance/GJAddress/GJAddressQuery'))
    },

    // BTC财务管理
    // 平台账户
    {
        path: '/BTC-finance/platformAccount',
        component: asyncComponent(() => import('container/BTC-finance/platformAccount/platformAccount'))
    },
    {
        path: '/BTC-finance/platformAccount/ledger',
        component: asyncComponent(() => import('container/user/customer/customer-ledgerQuery'))
    },
    // 分发地址
    {
        path: '/BTC-finance/diviAddress',
        component: asyncComponent(() => import('container/BTC-finance/diviAddress/diviAddress'))
    },
    {
        path: '/BTC-finance/diviAddress/addedit',
        component: asyncComponent(() => import('container/BTC-finance/diviAddress/diviAddress-ledger'))
    },
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
    },

    // 归集地址
    {
        path: '/BTC-finance/GJAddress',
        component: asyncComponent(() => import('container/BTC-finance/GJAddress/GJAddress'))
    },
    {
        path: '/BTC-finance/GJAddressQuery',
        component: asyncComponent(() => import('container/BTC-finance/GJAddress/GJAddressQuery'))
    },

    // TOKEN财务管理
    // 平台账户
    {
        path: '/TOKEN-finance/platformAccount',
        component: asyncComponent(() => import('container/TOKEN-finance/platformAccount/platformAccount'))
    },
    {
        path: '/TOKEN-finance/platformAccount/ledger',
        component: asyncComponent(() => import('container/user/customer/customer-ledgerQuery'))
    },
    // 分发地址
    {
        path: '/TOKEN-finance/diviAddress',
        component: asyncComponent(() => import('container/TOKEN-finance/diviAddress/diviAddress'))
    },
    {
        path: '/TOKEN-finance/diviAddress/addedit',
        component: asyncComponent(() => import('container/TOKEN-finance/diviAddress/diviAddress-ledger'))
    },
    // 充币管理
    // 线下充值
    {
        path: '/TOKEN-finance/offlineRecharge',
        component: asyncComponent(() => import('container/TOKEN-finance/offlineRecharge/offlineRecharge'))
    },
    {
        path: '/TOKEN-finance/offlineRecharge/addedit',
        component: asyncComponent(() => import('container/TOKEN-finance/offlineRecharge/offlineRecharge-addedit'))
    },
    // 充值查询
    {
        path: '/TOKEN-finance/offlineRechargeQuery',
        component: asyncComponent(() => import('container/TOKEN-finance/offlineRecharge/offlineRechargeQuery'))
    },

    // 提币管理
    // 提币地址
    {
        path: '/TOKEN-finance/TBAddress',
        component: asyncComponent(() => import('container/TOKEN-finance/TBAddress/TBAddress'))
    },
    // 线下提币
    {
        path: '/TOKEN-finance/TBunderline',
        component: asyncComponent(() => import('container/TOKEN-finance/TBunderline/TBunderline'))
    },
    {
        path: '/TOKEN-finance/TBunderline/addedit',
        component: asyncComponent(() => import('container/TOKEN-finance/TBunderline/TBunderline-addedit'))
    },
    {
        path: '/TOKEN-finance/TBunderline/multiCheck',
        component: asyncComponent(() => import('container/TOKEN-finance/TBunderline/TBunderline-multiCheck'))
    },
    // 归集地址
    {
        path: '/TOKEN-finance/GJAddress',
        component: asyncComponent(() => import('container/TOKEN-finance/GJAddress/GJAddress'))
    },
    {
        path: '/TOKEN-finance/GJAddressQuery',
        component: asyncComponent(() => import('container/TOKEN-finance/GJAddress/GJAddressQuery'))
    }
];

export default ROUTES;
