import React from 'react';
import {
    setTableData,
    setPagination,
    setBtnList,
    setSearchParam,
    clearSearchParam,
    doFetching,
    cancelFetching,
    setSearchData
} from '@redux/finance/offlineRecharge/offlineRechargeQuery';
import {listWrapper} from 'common/js/build-list';
import {
    moneyFormat,
    getCoinList,
    dateTimeFormat
} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.financeOfflineRechargeQuery,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class OfflineRechargeQuery extends React.Component {
    render() {
        const fields = [{
            field: 'code',
            title: '编号',
            search: true
        }, {
            field: 'accountName',
            title: '户名',
            search: true
        }, {
            field: 'amount',
            title: '充值金额',
            render: (v, data) => {
                return moneyFormat(Number(v), '', data.currency);
            }
        }, {
            field: 'bizNote',
            title: '充值说明'
        }, {
            field: 'applyDatetime',
            title: '申请时间',
            type: 'date',
            rangedate: ['applyDateStart', 'applyDateEnd'],
            render: dateTimeFormat,
            search: true
        }, {
            title: '状态',
            field: 'status',
            type: 'select',
            key: 'charge_status',
            search: true
        }];
        return this.props.buildList({
            fields,
            pageCode: '802345',
            searchParams: {
                currency: 'ETH'
            }
        });
    }
}

export default OfflineRechargeQuery;
