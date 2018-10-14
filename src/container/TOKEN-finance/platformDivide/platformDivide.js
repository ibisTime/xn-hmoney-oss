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
} from '@redux/TOKEN-finance/platformDivide/platformDivide';
import {listWrapper} from 'common/js/build-list';
import {dateTimeFormat, showWarnMsg} from 'common/js/util';
import {activateUser} from 'api/user';

@listWrapper(
    state => ({
        ...state.TOKENFinancePlatformDivide,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class PlatformDivide extends React.Component {
    render() {
        const fields = [{
            field: 'id',
            title: '分红id'
        }, {
            field: 'createDatetime',
            title: '创建时间',
            type: 'date',
            rangedate: ['dateEnd', 'dateEnd'],
            render: dateTimeFormat,
            search: true
        }, {
            field: 'divideAmount',
            title: '分红总金额',
            coin: 'X',
            coinAmount: true
        }, {
            field: 'divideProfit',
            title: '分红利润',
            coin: 'X',
            coinAmount: true
        }, {
            field: 'divideDatetime',
            title: '分红时间',
            type: 'datetime'
        }, {
            field: 'remark',
            title: '备注'
        }];
        return this.props.buildList({
            fields,
            rowKey: 'id',
            pageCode: '802415',
            searchParams: {
                status: '0'
            },
            btnEvent: {
                divideList: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else {
                        this.props.history.push(`/TOKEN-finance/platformDivide/divideList`);
                    }
                },
                divide: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].status !== '0') {
                        showWarnMsg('不是待分红的状态');
                    } else {
                        this.props.history.push(`/TOKEN-finance/platformDivide/divide?code=${selectedRowKeys[0]}`);
                    }
                }
            }
        });
    }
}

export default PlatformDivide;
