import React from 'react';
import {
    setTableData,
    setPagination,
    setBtnList,
    setSearchParam,
    clearSearchParam,
    doFetching,
    cancelFetching,
    setSearchData,
    setCoinData,
    setCoinListData
} from '@redux/user/customer/customer-account';
import {listWrapper} from 'common/js/build-list';
import {getQueryString, moneyFormat, moneyFormatSubtract, getCoinList} from 'common/js/util';
import {SYSTEM_CODE} from 'common/js/config';

@listWrapper(
    state => ({
        ...state.userCustomerAccount,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData,
        setCoinData, setCoinListData
    }
)
class CustomerAccount extends React.Component {
    constructor(props) {
        super(props);
        this.userId = getQueryString('userId', this.props.location.search) || '';
    }

    render() {
        const fields = [{
            field: 'realName',
            title: '户名'
        }, {
            field: 'currency',
            title: '币种',
            type: 'select',
            data: getCoinList(),
            keyName: 'key',
            valueName: 'value'
        }, {
            field: 'accountNumber',
            title: '账号'
        }, {
            field: 'amount',
            title: '余额',
            render: (v, data) => {
                return moneyFormat(v, '', data.currency);
            }
        }, {
            field: 'frozenAmount',
            title: '冻结金额',
            render: (v, data) => {
                return moneyFormat(v, '', data.currency);
            }
        }, {
            field: 'availableAmount',
            title: '可用余额',
            render: (v, data) => {
                var amount = data.amount;
                var frozenAmount = data.frozenAmount;

                return moneyFormatSubtract(amount, frozenAmount, '', data.currency);
            }
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            key: 'currency_type'
        }, {
            field: 'createDatetime',
            title: '创建时间',
            type: 'datetime'
        }];
        return this.props.buildList({
            fields,
            rowKey: 'accountNumber',
            pageCode: '802300',
            searchParams: {
                kind: '0',
                userId: this.userId
            }
        });
    }
}

export default CustomerAccount;
