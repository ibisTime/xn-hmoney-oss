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
import {getQueryString, moneyFormat, dateTimeFormat, showWarnMsg, dateFormat} from 'common/js/util';
import {CION_FMVP} from 'common/js/config';

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
            title: '用户',
            type: 'select',
            pageCode: '805120',
            params: {
                kind: 'Q'
            },
            keyName: 'userId',
            valueName: '{{realName.DATA}}-{{mobile.DATA}}',
            searchName: 'keyword',
            render: (v, data) => {
                return data.user ? data.user.realName ? data.user.realName : data.user.nickname : '';
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
        }, {field: 'count',
            title: '佣金',
            coin: CION_FMVP,
            coinAmount: true
        }, {
            field: 'currency',
            title: '币种'
        }, {
            field: 'refType',
            title: '佣金类型',
            type: 'select',
            key: 'award_ref_type'
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
            field: 'createDatetime',
            title: '产生时间',
            type: 'date',
            rangedate: ['dateStart', 'dateEnd'],
            render: dateTimeFormat,
            search: true
        }, {
            field: 'handleDatetime',
            title: '结算时间',
            type: 'datetime'
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
            pageCode: '802395',
            buttons: this.buttons,
            searchParams: {
                status: '0',
                userId: this.userId
            }
        });
    }
}

export default ChannelDealerCommissionsChecklist;
