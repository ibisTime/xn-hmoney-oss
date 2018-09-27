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
} from '@redux/user/channelDealerCommissions/channelDealerCommissions';
import {listWrapper} from 'common/js/build-list';
import {dateTimeFormat, showWarnMsg} from 'common/js/util';
import {activateUser} from 'api/user';

@listWrapper(
    state => ({
        ...state.userChannelDealerCommissions,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class ChannelDealerCommissions extends React.Component {
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
            searchName: 'nickname',
            placeholder: '请输入用户昵称搜索',
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
        }];
        return this.props.buildList({
            fields,
            rowKey: 'id',
            pageCode: '802396',
            searchParams: {
                userKind: 'Q',
                status: ''
            },
            btnEvent: {
                checklist: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else {
                        this.props.history.push(`/user/channelDealerCommissions/checklist?userId=${selectedRows[0].userId}`);
                    }
                }
            }
        });
    }
}

export default ChannelDealerCommissions;
