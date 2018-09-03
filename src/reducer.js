import { combineReducers } from 'redux';
import { user } from './redux/user';
import { menu } from './redux/menu';
import { modalDetail } from './redux/modal/build-modal-detail';
import { securityRole } from './redux/security/role';
import { securityRoleAddEdit } from './redux/security/role-addedit';
import { securityMenu } from './redux/security/menu';
import { securityMenuAddEdit } from './redux/security/menu-addedit';
import { securitySysParam } from './redux/security/sysParam';
import { securitySysParamAddEdit } from './redux/security/sysParam-addedit';
import { securityUser } from './redux/security/user';
import { securityAssign } from './redux/security/assign';
import { securityPwdReset } from './redux/security/pwdReset';
import { securityUserAddEdit } from './redux/security/user-addedit';
import { securityDataDict } from './redux/security/dataDict';
import { securityDataDictAddEdit } from './redux/security/dataDict-addedit';
import { securityCompConstruct } from './redux/security/compConstruct';
import { securityPost } from './redux/security/post';
import { securityNode } from './redux/security/node';
import { securityNodeAddEdit } from './redux/security/node-addedit';
import { securityNodeSetMateriallist } from './redux/security/node-setMateriallist';
import { publicBanner } from './redux/public/banner';
import { publicBannerAddEdit } from './redux/public/banner-addedit';
import { publicAboutusAddEdit } from './redux/public/aboutus-addedit';
import { publicHotLineAddEdit } from './redux/public/hotLine-addedit';
import { publicTimeAddEdit } from './redux/public/time-addedit';
import { publicNotice } from './redux/public/notice';
import { publicNoticeAddEdit } from './redux/public/notice-addedit';
import { generalTextParam } from './redux/general/text-param';
import { generalTextParamAddEdit } from './redux/general/text-param-addedit';

// 二维码制作
import { erweimaErweima } from './redux/erweima/erweima';

/**
 * 基础管理
 */
//  保险公司管理 + 新增 + 修改 + 删除
import { basisInsuranceCompany } from './redux/basis/insuranceCompany';
import { basisInsuranceCompanyAddedit } from './redux/basis/insuranceCompany-addedit';

//  收款账户管理 + 新增 + 修改 + 删除
import { basisReceivables } from './redux/basis/receivables';
import { basisReceivablesAddedit } from './redux/basis/receivables-addedit';

//  银行管理 + 详情 + 修改 + 删除 + 支行管理
import { basisBank } from './redux/basis/bank';
import { basisBankAddEdit } from './redux/basis/bank-addedit';
import { basisSubbranch } from './redux/basis/subbranch';
import { basisSubbranchAddEdit } from './redux/basis/subbranch-addedit';

//  身份证区域表 + 新增 + 修改 + 删除
import { basisIdCardArea } from './redux/basis/idCardArea';
import { basisIdCardAreaAddedit } from './redux/basis/idCardArea-addedit';

//  全国省份编号 + 新增 + 修改 + 删除
import { basisProvinceNum } from './redux/basis/provinceNum';
import { basisProvinceNumAddedit } from './redux/basis/provinceNum-addedit';

//  经销商管理 + 详情 + 删除
import { basisDealer } from './redux/basis/dealer';
import { basisDealerAddedit } from './redux/basis/dealer-addedit';

//  我司贷款成数比例 + 修改
import { basisLoanPercent } from './redux/basis/loanPercent';
import { basisLoanPercentAddedit } from './redux/basis/loanPercent-addedit';

//  gps提成百分比 + 修改
import { basisGpsextract } from './redux/basis/gpsextract';
import { basisGpsextractAddedit } from './redux/basis/gpsextract-addedit';

//  油补 + 修改
import { basisOilpercentage } from './redux/basis/oilpercentage';
import { basisOilpercentageAddedit } from './redux/basis/oilpercentage-addedit';

//  车贷期数管理 + 修改
import { basisCarloan } from './redux/basis/carloan';
import { basisCarloanAddEdit } from './redux/basis/carloan-addedit';

//  奖金提成配置 + 新增 + 修改 + 删除
import { basisBonusesConfigure } from './redux/basis/bonusesConfigure';
import { basisBonusesConfigureAddedit } from './redux/basis/bonusesConfigure-addedit';

export default combineReducers({
  user,
  menu,
  modalDetail,
  securityRole,
  securityRoleAddEdit,
  securityMenu,
  securityMenuAddEdit,
  securityUser,
  securityAssign,
  securityPwdReset,
  securitySysParam,
  securitySysParamAddEdit,
  securityUserAddEdit,
  securityDataDict,
  securityDataDictAddEdit,
  securityCompConstruct,
  securityPost,
  securityNode,
  securityNodeAddEdit,
  securityNodeSetMateriallist,
  publicHotLineAddEdit,
  publicBanner,
  publicBannerAddEdit,
  publicAboutusAddEdit,
  publicTimeAddEdit,
  publicNotice,
  publicNoticeAddEdit,
  generalTextParam,
  generalTextParamAddEdit,
  financeUserAccount,
  financeUserFlows,
  financeAllUserFlows,
  financeAccount,
  financePlatformLedger,
  financeEnchashmentRule,
  financeEnchashmentRuleAddEdit,
  financeUnderEnchashment,
  financeUnderEnchashmentAddEdit,
  financeUnderEnchashmentCheck,
  financeEnchashments,
  financeEnchashmentsAddEdit,
  creditAddEdit,
  erweimaErweima,
  basisInsuranceCompany,
  basisInsuranceCompanyAddedit,
  basisReceivables,
  basisReceivablesAddedit,
  basisIdCardArea,
  basisIdCardAreaAddedit,
  basisProvinceNum,
  basisProvinceNumAddedit,
  basisDealer,
  basisDealerAddedit,
  basisLoanPercent,
  basisLoanPercentAddedit,
  basisBank,
  basisBankAddEdit
});
