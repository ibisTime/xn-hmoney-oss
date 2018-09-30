import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/TOKEN-finance/GJAddressQuery/GJAddressQuery-addedit';
import {getQueryString, moneyFormat} from 'common/js/util';
import {DetailWrapper} from 'common/js/build-detail';

@DetailWrapper(
    state => state.TOKENFinanceGJAddressQueryAddEdit,
    {initStates, doFetching, cancelFetching, setSelectData, setPageData, restore}
)
class GJAddressQueryAddedit extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
    }
    render() {
        let fields = [{
            field: 'amountString',
            title: '交易数量',
            coin: 'X',
            coinAmount: true
        }, {
            title: '矿工费',
            field: 'txFeeString',
            coin: 'ETH',
            coinAmount: true
        }, {
            field: 'fromAddress',
            title: '来方归集'
        }, {
            title: '去方归集地址',
            field: 'toAddress'
        }, {
            title: '交易HASH',
            field: 'txHash'
        }, {
            title: '关联订单号',
            field: 'refNo'
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            data: [{
                key: '0',
                value: '广播中'
            }, {
                key: '1',
                value: '广播成功'
            }, {
                key: '2',
                value: '广播失败'
            }],
            keyName: 'key',
            valueName: 'value'
        }, {
            field: 'confirmDatetime',
            title: '区块确认时间',
            type: 'datetime'
        }, {
            field: 'createDatetime',
            title: '归集时间',
            type: 'datetime'
        }];

        return this.props.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            detailCode: '802366'
        });
    }
}

export default GJAddressQueryAddedit;
