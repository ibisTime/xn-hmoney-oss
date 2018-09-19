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
} from '@redux/accept/finishOrder/finishOrder';
import {listWrapper} from 'common/js/build-list';
import {
    moneyFormat,
    getCoinList
} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.acceptFinishOrder,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class FinishOrder extends React.Component {
    render() {
        const fields = [{
            field: 'code',
            title: '编号',
            search: true
        }, {
            title: '买家',
            field: 'buyUser',
            render: (v, data) => {
                if (data.buyUserInfo) {
                    return data.buyUserInfo.mobile + '(' + data.buyUserInfo.nickname + ')';
                }
            },
            type: 'select',
            pageCode: '805120',
            params: {
                updater: '',
                kind: 'C'
            },
            keyName: 'userId',
            valueName: '{{mobile.DATA}}--{{nickname.DATA}}',
            searchName: 'mobile',
            search: true
        }, {
            title: '卖家',
            field: 'sellUser',
            render: (v, data) => {
                if (data.sellUserInfo) {
                    return data.sellUserInfo.mobile + '(' + data.sellUserInfo.nickname + ')';
                }
            },
            type: 'select',
            pageCode: '805120',
            params: {
                updater: '',
                kind: 'C'
            },
            keyName: 'userId',
            valueName: '{{mobile.DATA}}--{{nickname.DATA}}',
            searchName: 'mobile',
            search: true
        }, {
            field: 'tradeCoin',
            title: '币种',
            type: 'select',
            data: getCoinList(),
            keyName: 'key',
            valueName: 'value'
        }, {
            field: 'coin',
            title: '币种',
            type: 'select',
            data: getCoinList(),
            keyName: 'key',
            valueName: 'value',
            search: true,
            noVisible: true
        }, {
            title: '交易价格',
            field: 'tradePrice'
        }, {
            title: '交易数量',
            field: 'countString',
            render: (v, data) => {
                return moneyFormat(v, '', data.tradeCoin) + data.tradeCoin;
            }
        }, {
            title: '交易金额',
            field: 'tradeAmount'
        }, {
            title: '手续费',
            field: 'feeString',
            render: (v, data) => {
                return moneyFormat(v, '', data.tradeCoin) + data.tradeCoin;
            }
        }, {
            title: '状态',
            field: 'status',
            type: 'select',
            data: [{
                'key': '0',
                'value': '待支付'
            }, {
                'key': '1',
                'value': '已支付'
            }, {
                'key': '3',
                'value': '仲裁中'
            }],
            keyName: 'key',
            valueName: 'value'
        }, {
            title: '状态',
            field: 'statusList',
            type: 'select',
            data: [{
                'key': '0',
                'value': '待支付'
            }, {
                'key': '1',
                'value': '已支付'
            }, {
                'key': '3',
                'value': '仲裁中'
            }],
            keyName: 'key',
            valueName: 'value',
            noVisible: true,
            search: true
        }, {
            field: 'updateDatetime',
            title: '更新时间',
            type: 'datetime'
        }, {
            title: '备注',
            field: 'remark'
        }];
        return this.props.buildList({
            fields,
            pageCode: 625285,
            searchParams: {
                status: '2'
            }
        });
    }
}

export default FinishOrder;
