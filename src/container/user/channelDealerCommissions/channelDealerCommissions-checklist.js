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
} from '@redux/user/channelDealerCommissions/channelDealerCommissions-checklist';
import {listWrapper} from 'common/js/build-list';
import {getQueryString, moneyFormat, dateTimeFormat, showWarnMsg} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.userChannelDealerCommissionsChecklist,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class ChannelDealerCommissionsChecklist extends React.Component {
    constructor(props) {
        super(props);
        this.userId = getQueryString('userId', this.props.location.search);
        this.buttons = [];
        this.buttons = [{
            code: 'settlement',
            name: '结算',
            handler: (selectedRowKeys, selectedRows) => {
                if (!selectedRowKeys.length) {
                    showWarnMsg('请选择记录');
                } else if (selectedRowKeys.length > 1) {
                    showWarnMsg('请选择一条记录');
                } else {
                    this.props.history.push(`/user/channelDealerCommissions/settlement?v=1&${selectedRowKeys[0]}`);
                }
            }
        }, {
            code: 'goBack',
            name: '返回',
            check: false,
            handler: () => {
                this.props.history.push(`/user/commissionsHistoryList`);
            }
        }];
    }

    render() {
        const fields = [{
            field: 'userId',
            title: '渠道商',
            type: 'select',
            pageCode: '805120',
            params: {
                kind: 'Q'
            },
            keyName: 'userId',
            valueName: '{{nickName.DATA}}-{{mobile.DATA}}',
            searchName: 'mobile',
            render: (v, data) => {
                return data.user ? data.user.nickname : '-';
            },
            search: true
        }, {
            field: 'mobile',
            title: '手机号',
            render: (v, data) => {
                return data.user ? data.user.mobile : '-';
            }
        }, {
            field: 'amount',
            title: '佣金',
            render: (v, data) => {
                return moneyFormat(v, '', data.currency);
            }
        }, {
            field: 'currency',
            title: '币种'
        }, {
            field: 'refType',
            title: '佣金类型'
        }, {
            field: 'refNote',
            title: '佣金说明'
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            data: [{
                key: '0',
                value: '待结算'
            }, {
                key: '1',
                value: '已结算'
            }],
            keyName: 'key',
            valueName: 'value',
            search: true
        }, {
            field: 'settleDatetime',
            title: '结算时间',
            type: 'date',
            rangedate: ['applyDateStart', 'applyDateEnd'],
            render: dateTimeFormat,
            search: true
        }, {
            field: 'refCode',
            title: '关联单号'
        }, {
            field: 'remark',
            title: '备注'
        }];
        return this.props.buildList({
            fields,
            rowKey: 'id',
            pageCode: '802396',
            buttons: this.buttons,
            searchParams: {
                status: '0',
                userId: this.userId
            }
        });
    }
}

export default ChannelDealerCommissionsChecklist;
