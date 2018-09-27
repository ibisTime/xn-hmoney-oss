import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/BTC-finance/offlineRecharge/offlineRecharge-addedit';
import {getQueryString, moneyFormat, getUserName, showSucMsg} from 'common/js/util';
import {DetailWrapper} from 'common/js/build-detail';
import {getListUserAccount} from 'api/account';
import fetch from 'common/js/fetch';

@DetailWrapper(
    state => state.BTCFinanceOfflineRechargeAddEdit,
    {initStates, doFetching, cancelFetching, setSelectData, setPageData, restore}
)
class OfflineRechargeAddedit extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
        this.isCheck = !!getQueryString('isCheck', this.props.location.search);
    }

    render() {
        let fields = [{
            field: 'userId',
            title: '充值用户',
            required: true,
            type: 'select',
            pageCode: '805120',
            keyName: 'userId',
            valueName: '{{nickname.DATA}}-{{mobile.DATA}}',
            searchName: 'nickname',
            placeholder: '请输入用户昵称搜索',
            onChange: (v, data) => {
                if (v) {
                    getListUserAccount({userId: v, currency: 'BTC'}).then((d) => {
                        this.props.setPageData({'accountNumber': d[0].accountNumber});
                    });
                }
            }
        }, {
            field: 'accountNumber',
            title: '充值账户',
            hidden: true
        }, {
            title: '充值数量',
            field: 'amount',
            required: true,
            coinAmount: true,
            coin: 'BTC',
            formatter: (v, data) => {
                return v ? moneyFormat(v, '', data.currency) : '';
            }
        }, {
            field: 'payCardInfo',
            title: '打币渠道'
        }, {
            field: 'payCardNo',
            title: '打币地址'
        }, {
            field: 'applyNote',
            title: '充值说明'
        }];

        let buttons = [];
        if (this.isCheck) {
            fields = fields.concat([{
                field: 'payNote',
                title: '审核意见',
                readonly: !this.isCheck,
                required: true
            }]);
            buttons = [{
                title: '通过',
                handler: (param) => {
                    param.payResult = '1';
                    param.codeList = [this.code];
                    param.payUser = getUserName();
                    this.props.doFetching();
                    fetch(802341, param).then(() => {
                        showSucMsg('操作成功');
                        this.props.cancelFetching();
                        setTimeout(() => {
                            this.props.history.go(-1);
                        }, 1000);
                    }).catch(this.props.cancelFetching);
                },
                check: true,
                type: 'primary'
            }, {
                title: '不通过',
                handler: (param) => {
                    param.payResult = '0';
                    param.codeList = [this.code];
                    param.payUser = getUserName();
                    this.props.doFetching();
                    fetch(802341, param).then(() => {
                        showSucMsg('操作成功');
                        this.props.cancelFetching();
                        setTimeout(() => {
                            this.props.history.go(-1);
                        }, 1000);
                    }).catch(this.props.cancelFetching);
                },
                check: true
            }, {
                title: '返回',
                handler: (param) => {
                    this.props.history.go(-1);
                }
            }];
        }
        return this.props.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            addCode: '802340',
            detailCode: '802346',
            beforeSubmit: function(data) {
                data.applyUser = getUserName();
                return data;
            },
            buttons: buttons
        });
    }
}

export default OfflineRechargeAddedit;
