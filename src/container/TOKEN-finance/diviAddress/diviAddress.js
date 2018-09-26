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
} from '@redux/TOKEN-finance/diviAddress/diviAddress';
import {listWrapper} from 'common/js/build-list';
import {
    moneyFormat,
    getCoinList,
    dateTimeFormat,
    showWarnMsg
} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.TOKENFinanceDiviAddress,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class DiviAddress extends React.Component {
    render() {
        const fields = [{
            field: 'address',
            title: '地址',
            search: true
        }, {
            title: '拥有者',
            field: 'userId',
            formatter: function(v, data) {
                if (data.userInfo) {
                    return data.userInfo.mobile + '(' + data.userInfo.nickname + ')';
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
            field: 'balanceString',
            title: '当前余额',
            amount: true,
            formatter: moneyFormat
        }];
        return this.props.buildList({
            fields,
            rowKey: 'id',
            pageCode: '802505',
            searchParams: {
            }
        });
    }
}

export default DiviAddress;
