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
                    this.props.history.push(`/user/channelDealerCommissions/settlement?v=1&code=${selectedRowKeys[0]}`);
                }
            }
        }, {
            code: 'goBack',
            name: '返回',
            check: false,
            handler: () => {
                this.props.history.push(`/user/channelDealerCommissions`);
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
            searchName: 'keyword',
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
            field: 'email',
            title: '邮箱',
            render: (v, data) => {
                return data.user ? data.user.email : '-';
            }
        }, {
            field: 'settleCount',
            title: '结算金额'
        }, {
            field: 'unsettleCount',
            title: '未结算金额'
        }, {
            field: 'nosettleCount',
            title: '不结算金额'
        }, {
            field: 'tradeCount',
            title: '交易总金额'
        }, {
            field: 'tradeAward',
            title: '交易奖励'
        }, {
            field: 'regAward',
            title: '注册奖励'
        }, {
            field: 'endDate',
            title: '结束日期',
            type: 'dates'
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
