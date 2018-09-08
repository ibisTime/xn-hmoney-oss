import {combineReducers} from 'redux';
import {user} from './redux/user';
import {menu} from './redux/menu';
import {modalDetail} from './redux/modal/build-modal-detail';
import {systemRole} from './redux/system/role';
import {systemRoleAddEdit} from './redux/system/role-addedit';
import {systemMenu} from './redux/system/menu';
import {systemMenuAddEdit} from './redux/system/menu-addedit';
import {systemSysParam} from './redux/system/sysParam';
import {systemSysParamAddEdit} from './redux/system/sysParam-addedit';
import {systemUser} from './redux/system/user';
import {systemAssign} from './redux/system/assign';
import {systemPwdReset} from './redux/system/pwdReset';
import {systemUserAddEdit} from './redux/system/user-addedit';
import {systemDataDict} from './redux/system/dataDict';
import {systemDataDictAddEdit} from './redux/system/dataDict-addedit';
import {systemNode} from './redux/system/node';
import {systemNodeAddEdit} from './redux/system/node-addedit';
import {systemNodeSetMateriallist} from './redux/system/node-setMateriallist';
import {publicBanner} from './redux/public/banner';
import {publicBannerAddEdit} from './redux/public/banner-addedit';
import {publicAboutusAddEdit} from './redux/public/aboutus-addedit';
import {publicHotLineAddEdit} from './redux/public/hotLine-addedit';
import {publicTimeAddEdit} from './redux/public/time-addedit';
import {publicNotice} from './redux/public/notice';
import {publicNoticeAddEdit} from './redux/public/notice-addedit';
import {generalTextParam} from './redux/general/text-param';
import {generalTextParamAddEdit} from './redux/general/text-param-addedit';

/* 业务管理 */
// 客户管理
import {userCustomer} from './redux/user/customer/customer';
import {userCustomerAddEdit} from './redux/user/customer/customer-addedit';
import {userCustomerAccount} from './redux/user/customer/customer-account';
import {userCustomerBlackList} from './redux/user/customer/customer-blackList';

// OTC交易管理
// 购买交易
import {tradeBuyTrade} from './redux/trade/buyTrade/buyTrade';
import {tradeBuyTradeAddEdit} from './redux/trade/buyTrade/buyTrade-addedit';

// 出售交易
import {tradeSaleTrade} from './redux/trade/saleTrade/saleTrade';
import {tradeSaleTradeAddEdit} from './redux/trade/saleTrade/saleTrade-addedit';

// 交易手续费
import {tradeHandsFee} from './redux/trade/handsFee/handsFee';
import {tradeHandsFeeAddEdit} from './redux/trade/handsFee/handsFee-addedit';

// OTC订单管理
// 进行中订单
import {tradeUnderWayOrder} from './redux/trade/underWayOrder/underWayOrder';
import {tradeUnderWayOrderAddEdit} from './redux/trade/underWayOrder/underWayOrder-addedit';

// 已结束订单
import {tradeFinishOrder} from './redux/trade/finishOrder/finishOrder';
import {tradeFinishOrderAddEdit} from './redux/trade/finishOrder/finishOrder-addedit';

// 仲裁订单管理
// 仲裁订单
import {tradeArbitrationOrder} from './redux/trade/arbitrationOrder/arbitrationOrder';
import {tradeArbitrationOrderAddEdit} from './redux/trade/arbitrationOrder/arbitrationOrder-addedit';
import {tradeArbitrationOrderResolve} from './redux/trade/arbitrationOrder/arbitrationOrder-resolve';

// 仲裁通知人
import {tradeArbitrationNotifier} from './redux/trade/arbitrationNotifier/arbitrationNotifier';
import {tradeArbitrationNotifierAddEdit} from './redux/trade/arbitrationNotifier/arbitrationNotifier-addedit';

// 币种管理
// 币种管理
import {bizCoin} from './redux/biz/coin/coin';
import {bizCoinAddEdit} from './redux/biz/coin/coin-addedit';

// 行情管理
// 交易对管理
import {quotationTradePair} from './redux/biz/quotation/tradePair';

// BTC行情
import {quotationQuotationBTC} from './redux/biz/quotation/quotationBTC';

// ETH行情
import {quotationQuotationETH} from './redux/biz/quotation/quotationETH';

// X行情
import {quotationQuotationX} from './redux/biz/quotation/quotationX';

// 法币汇率
import {quotationExchangeRate} from './redux/biz/quotation/exchangeRate';

import {analysisInsuranceAmount} from './redux/analysis/insuranceAmount';

/* ETH财务管理 */
// 充币管理
// 线下充值
import {financeOfflineRecharge} from './redux/finance/offlineRecharge/offlineRecharge';
import {financeOfflineRechargeAddEdit} from './redux/finance/offlineRecharge/offlineRecharge-addedit';
// 充值查询
import {financeOfflineRechargeQuery} from './redux/finance/offlineRecharge/offlineRechargeQuery';

// 提币管理
// 提币地址
import {financeTBAddress} from './redux/finance/TBAddress/TBAddress';

// 线下提币
import {financeTBunderline} from './redux/finance/TBunderline/TBunderline';
import {financeTBunderlineAddEdit} from './redux/finance/TBunderline/TBunderline-addedit';
import {financeTBunderlineMultiCheck} from './redux/finance/TBunderline/TBunderline-multiCheck';

/* BTC财务管理 */
// 充币管理
// 线下充值
import {BTCFinanceOfflineRecharge} from './redux/BTC-finance/offlineRecharge/offlineRecharge';
import {BTCFinanceOfflineRechargeAddEdit} from './redux/BTC-finance/offlineRecharge/offlineRecharge-addedit';
// 充值查询
import {BTCFinanceOfflineRechargeQuery} from './redux/BTC-finance/offlineRecharge/offlineRechargeQuery';

// 提币管理
// 提币地址
import {BTCFinanceTBAddress} from './redux/BTC-finance/TBAddress/TBAddress';

// 线下提币
import {BTCFinanceTBunderline} from './redux/BTC-finance/TBunderline/TBunderline';
import {BTCFinanceTBunderlineAddEdit} from './redux/BTC-finance/TBunderline/TBunderline-addedit';
import {BTCFinanceTBunderlineMultiCheck} from './redux/BTC-finance/TBunderline/TBunderline-multiCheck';

export default combineReducers({
    user,
    menu,
    modalDetail,
    systemRole,
    systemRoleAddEdit,
    systemMenu,
    systemMenuAddEdit,
    systemUser,
    systemAssign,
    systemPwdReset,
    systemSysParam,
    systemSysParamAddEdit,
    systemUserAddEdit,
    systemDataDict,
    systemDataDictAddEdit,
    systemNode,
    systemNodeAddEdit,
    systemNodeSetMateriallist,
    publicHotLineAddEdit,
    publicBanner,
    publicBannerAddEdit,
    publicAboutusAddEdit,
    publicTimeAddEdit,
    publicNotice,
    publicNoticeAddEdit,
    generalTextParam,
    generalTextParamAddEdit,
    analysisInsuranceAmount,
    userCustomer,
    userCustomerAddEdit,
    userCustomerAccount,
    userCustomerBlackList,
    tradeBuyTrade,
    tradeBuyTradeAddEdit,
    tradeSaleTrade,
    tradeSaleTradeAddEdit,
    tradeHandsFee,
    tradeHandsFeeAddEdit,
    tradeUnderWayOrder,
    tradeUnderWayOrderAddEdit,
    tradeFinishOrder,
    tradeFinishOrderAddEdit,
    tradeArbitrationOrder,
    tradeArbitrationOrderAddEdit,
    tradeArbitrationOrderResolve,
    tradeArbitrationNotifier,
    tradeArbitrationNotifierAddEdit,
    bizCoin,
    bizCoinAddEdit,
    quotationTradePair,
    quotationQuotationBTC,
    quotationQuotationETH,
    quotationQuotationX,
    quotationExchangeRate,
    // ETH 财务管理
    financeOfflineRecharge,
    financeOfflineRechargeAddEdit,
    financeOfflineRechargeQuery,
    financeTBAddress,
    financeTBunderline,
    financeTBunderlineAddEdit,
    financeTBunderlineMultiCheck,
    // BTC 财务管理
    BTCFinanceOfflineRecharge,
    BTCFinanceOfflineRechargeAddEdit,
    BTCFinanceOfflineRechargeQuery,
    BTCFinanceTBAddress,
    BTCFinanceTBunderline,
    BTCFinanceTBunderlineAddEdit,
    BTCFinanceTBunderlineMultiCheck
});
