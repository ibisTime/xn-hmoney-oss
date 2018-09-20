import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/accept/payment/payment-addedit';
import {getQueryString, moneyFormat} from 'common/js/util';
import {DetailWrapper} from 'common/js/build-detail';

@DetailWrapper(
    state => state.acceptPaymentAddEdit,
    {initStates, doFetching, cancelFetching, setSelectData, setPageData, restore}
)
class PaymentAddedit extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
    }

    render() {
        const fields = [{
            field: 'type',
            title: '收款类型',
            value: '1',
            hidden: true
        }, {
            field: 'currency',
            title: '币种',
            required: true
        }, {
            field: 'realName',
            title: '户名',
            required: true
        }, {
            field: 'bankcardNumber',
            title: '卡号',
            required: true
        }, {
            field: 'bankName',
            title: '银行名称',
            required: true,
            type: 'select',
            listCode: 802116,
            keyName: 'bankName',
            valueName: '{{bankName.DATA}}'
        }, {
            field: 'subbranch',
            title: '支行',
            required: true
        }, {
            field: 'remark',
            title: '备注'
        }];
        return this.props.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            detailCode: '625251'
        });
    }
}

export default PaymentAddedit;
