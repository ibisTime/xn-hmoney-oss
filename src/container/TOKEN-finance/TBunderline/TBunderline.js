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
} from '@redux/TOKEN-finance/TBunderline/TBunderline';
import {listWrapper} from 'common/js/build-list';
import {
    moneyFormat,
    moneyFormatSubtract,
    getCoinList,
    dateTimeFormat,
    showWarnMsg
} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.TOKENFinanceTBunderline,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class TBunderline extends React.Component {
    render() {
        const fields = [{
            field: 'code',
            title: '编号',
            search: true
        }, {
            field: 'accountName',
            title: '账号',
            type: 'select',
            pageCode: '802500',
            params: {
                type: 'C'
            },
            keyName: 'realName',
            valueName: '{{realName.DATA}}',
            searchName: 'realName',
            search: true
        }, {
            field: 'amountW',
            title: '提现金额',
            render: (v, data) => {
                return moneyFormat(Number(data.amount), '', data.currency);
            }
        }, {
            field: 'amount',
            title: '实际到账金额',
            render: (v, data) => {
                return moneyFormatSubtract(data.amount, data.feeString, '', data.currency);
            }
        }, {
            field: 'channelType',
            title: '渠道',
            type: 'select',
            key: 'channel_type',
            search: true
        }, {
            title: '区块链类型',
            field: 'payCardInfo'
        }, {
            title: '提现地址',
            field: 'payCardNo'
        }, {
            field: 'mobile',
            title: '申请人',
            render: (v, data) => {
                if (data.user) {
                    if(data.user.kind === 'P') {
                        return data.user.loginName;
                    }else{
                        return data.user.mobile;
                    }
                } else {
                    return data.approveUser;
                }
            }
        }, {
            field: 'applyDatetime',
            title: '申请时间',
            type: 'date',
            rangedate: ['applyDateStart', 'applyDateEnd'],
            render: dateTimeFormat,
            search: true
        }, {
            title: '申请说明',
            field: 'applyNote'
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            key: 'withdraw_status',
            search: true
        }, {
            field: 'approveNote',
            title: '审核意见'
        }, {
            field: 'approveUser',
            title: '审核人'
        }, {
            field: 'approveDatetime',
            title: '审核时间',
            type: 'date',
            rangedate: ['approveDateStart', 'approveDateEnd'],
            render: dateTimeFormat,
            search: true
        }];
        return this.props.buildList({
            fields,
            pageCode: '802355',
            searchParams: {
                currency: 'X'
            },
            btnEvent: {
                multiCheck: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].status !== '1') {
                        showWarnMsg('不是待审核的记录');
                    } else {
                        this.props.history.push(`/finance/TBunderline/addedit?v=1&isCheck=1&code=${selectedRowKeys[0]}`);
                    }
                },
                sp: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].status !== '3') {
                        showWarnMsg('不是可广播的记录');
                    } else {
                        this.props.history.push(`/finance/TBunderline/multiCheck?code=${selectedRowKeys[0]}`);
                    }
                }
            }
        });
    }
}

export default TBunderline;
