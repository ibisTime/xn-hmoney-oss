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
} from '@redux/accept/payment/payment';
import {listWrapper} from 'common/js/build-list';
import {
    moneyFormat,
    getCoinList
} from 'common/js/util';
import {
    SYS_USER
} from 'common/js/config';

@listWrapper(
    state => ({
        ...state.acceptPayment,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class Payment extends React.Component {
    render() {
        const fields = [{
            field: 'type',
            title: '收款类型',
            type: 'select',
            key: 'bank_card_type',
            search: true
        }, {
            field: 'currency',
            title: '币种'
        }, {
            field: 'realName',
            title: '户名',
            search: true
        }, {
            field: 'bankcardNumber',
            title: '卡号'
        }, {
            field: 'bankName',
            title: '银行名称'
        }, {
            field: 'subbranch',
            title: '支行'
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            data: [{
                'key': '0',
                'value': '可用'
            }, {
                'key': '1',
                'value': '不可用'
            }],
            keyName: 'key',
            valueName: 'value',
            search: true
        }, {
            field: 'createDatetime',
            title: '创建时间',
            type: 'datetime'
        }, {
            field: 'remark',
            title: '备注'
        }];
        return this.props.buildList({
            fields,
            pageCode: 802025,
            searchParams: {
                userId: SYS_USER
            }
        });
    }
}

export default Payment;
