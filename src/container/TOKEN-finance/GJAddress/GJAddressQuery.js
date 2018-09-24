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
} from '@redux/TOKEN-finance/GJAddress/GJAddressQuery';
import {listWrapper} from 'common/js/build-list';
import {
    moneyFormat,
    getCoinList,
    dateTimeFormat,
    showWarnMsg
} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.TOKENFinanceGJAddressQuery,
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
            field: 'address',
            title: '地址',
            search: true
        }, {
            title: '拥有者',
            field: 'userId',
            formatter: function(v, data) {
                if (data.user) {
                    return data.user.mobile + '(' + data.user.nickname + ')';
                }
            },
            type: 'select',
            pageCode: '805120',
            params: {
                kind: 'C'
            },
            keyName: 'userId',
            valueName: '{{mobile.DATA}}--{{nickname.DATA}}',
            searchName: 'mobile',
            search: true
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            data: [{
                key: '0',
                value: '启用'
            }, {
                key: '2',
                value: '弃用'
            }],
            kayName: 'key',
            valueName: 'value',
            search: true
        }, {
            field: 'balanceString',
            title: '当前余额',
            amount: true,
            formatter: moneyFormat
        }];
        return this.props.buildList({
            fields,
            pageCode: '802565',
            searchParams: {
            }
        });
    }
}

export default GJAddressQuery;
