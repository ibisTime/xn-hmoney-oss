import React from 'react';
import {Modal} from 'antd';
import {
    setTableData,
    setPagination,
    setBtnList,
    setSearchParam,
    clearSearchParam,
    doFetching,
    cancelFetching,
    setSearchData
} from '@redux/finance/GJAddressQuery/GJAddressQuery';
import {listWrapper} from 'common/js/build-list';
import {
    moneyFormat,
    getCoinList,
    dateTimeFormat,
    showWarnMsg
} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.financeGJAddressQuery,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class GJAddressQuery extends React.Component {
    render() {
        const fields = [{
            field: 'amountString',
            title: '交易数量',
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
            valueName: 'value',
            search: true
        }, {
            field: 'createDatetime',
            title: '归集时间',
            type: 'datetime'
        }];
        return this.props.buildList({
            fields,
            pageCode: '802365',
            searchParams: {
                currency: 'ETH'
            }
        });
    }
}

export default GJAddressQuery;
