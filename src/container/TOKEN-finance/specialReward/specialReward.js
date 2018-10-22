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
} from '@redux/TOKEN-finance/specialReward/specialReward';
import {listWrapper} from 'common/js/build-list';
import {dateTimeFormat, showWarnMsg, dateFormat} from 'common/js/util';
import {activateUser} from 'api/user';
import {CION_FMVP} from 'common/js/config';

@listWrapper(
    state => ({
        ...state.TOKENFinanceSpecialReward,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class SpecialReward extends React.Component {
    render() {
        const fields = [{
            field: 'userId',
            title: '用户',
            type: 'select',
            pageCode: '805120',
            params: {
                kind: 'C'
            },
            keyName: 'userId',
            valueName: '{{nickName.DATA}}-{{mobile.DATA}}',
            searchName: 'keyword',
            render: (v, data) => {
                return data.user ? data.user.realName ? data.user.realName : data.user.nickname : '';
            }
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
            field: 'userKind',
            title: '用户类型',
            type: 'select',
            data: [{
                'key': 'C',
                'value': '会员'
            }, {
                'key': 'Q',
                'value': '渠道商'
            }],
            keyName: 'key',
            valueName: 'value',
            search: true
        }, {
            field: 'count',
            title: '佣金',
            coin: CION_FMVP,
            coinAmount: true
        }, {
            field: 'createDatetime',
            title: '申请时间',
            type: 'date',
            rangedate: ['dateStart', 'dateEnd'],
            render: dateTimeFormat,
            search: true
        }, {
            field: 'remark',
            title: '备注'
        }];
        return this.props.buildList({
            fields,
            rowKey: 'id',
            pageCode: '802395',
            searchParams: {
                status: '0',
                refType: '4'
            },
            btnEvent: {
                settle: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else {
                        this.props.history.push(`/TOKEN-finance/specialReward/addedit?isSpecial=1&v=1&code=${selectedRowKeys[0]}`);
                    }
                }
            }
        });
    }
}

export default SpecialReward;
