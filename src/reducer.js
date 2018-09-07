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

import {analysisInsuranceAmount} from './redux/analysis/insuranceAmount';

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
    userCustomerBlackList
});
