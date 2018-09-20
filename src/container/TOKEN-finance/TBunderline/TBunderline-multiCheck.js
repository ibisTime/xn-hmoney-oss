import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/TOKEN-finance/TBunderline/TBunderline-multiCheck';
import {getQueryString, moneyFormat, getUserName, showSucMsg} from 'common/js/util';
import {DetailWrapper} from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@DetailWrapper(
    state => state.TOKENFinanceTBunderlineMultiCheck,
    {initStates, doFetching, cancelFetching, setSelectData, setPageData, restore}
)
class TBunderlineMultiCheck extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
    }

    render() {
        let fields = [{
            field: 'mAddressCode',
            title: '广播地址',
            required: true,
            type: 'select',
            listCode: '802515',
            params: {
                type: 'M',
                statusList: ['0']
            },
            keyName: 'code',
            valueName: '{{address.DATA}}--{{balanceString.DATA}}',
            searchName: 'address'
        }];
        return this.props.buildDetail({
            fields,
            code: '',
            view: this.view,
            addCode: '802340',
            detailCode: '802346',
            beforeSubmit: function(data) {
                data.applyUser = getUserName();
                return data;
            },
            buttons: [{
                title: '广播',
                handler: (param) => {
                    param.payResult = '1';
                    param.code = this.code;
                    param.approveUser = getUserName();
                    this.props.doFetching();
                    fetch(802353, param).then(() => {
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
                title: '返回',
                handler: (param) => {
                    this.props.history.go(-1);
                }
            }]
        });
    }
}

export default TBunderlineMultiCheck;
