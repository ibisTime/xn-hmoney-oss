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
} from '@redux/accept/buyOrder/buyOrder';
import {listWrapper} from 'common/js/build-list';
import {
    showWarnMsg,
    moneyFormat,
    getCoinList
} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.acceptBuyOrder,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class BuyOrder extends React.Component {
    render() {
        const fields = [{
            field: 'code',
            title: '编号',
            search: true
        }, {
            title: '下单人',
            field: 'nickname',
            render: (v, data) => {
                return data.user ? data.user.nickname : '';
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
            title: '手机号',
            field: 'userMobile',
            render: (v, data) => {
                return data.user ? data.user.mobile : '';
            }
        }, {
            field: 'tradeCoin',
            title: '币种',
            type: 'select',
            data: getCoinList(),
            keyName: 'key',
            valueName: 'value',
            search: true
        }, {
            title: '单价',
            field: 'tradePrice'
        }, {
            title: '数量',
            field: 'count',
            render: (v, data) => {
                return moneyFormat(v, '', data.tradeCoin);
            }
        }, {
            title: '总金额',
            field: 'tradeAmount'
        }, {
            title: '手续费',
            field: 'fee',
            render: (v, data) => {
                return moneyFormat(v, '', data.tradeCoin);
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
                'key': '2',
                'value': '已释放'
            }, {
                'key': '3',
                'value': '已取消'
            }],
            keyName: 'key',
            valueName: 'value'
        }, {
            field: 'createDatetime',
            title: '下单时间',
            type: 'datetime'
        }];
        return this.props.buildList({
            fields,
            pageCode: 625285,
            searchParams: {
                type: '0'
            },
            btnEvent: {
                // 释放
                sale: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else {
                        this.props.history.push(`/accept/buyOrder/addedit?v=1&isSale=1&code=${selectedRowKeys[0]}`);
                    }
                }
            }
        });
    }
}

export default BuyOrder;