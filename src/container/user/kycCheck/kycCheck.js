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
} from '@redux/user/kycCheck/kycCheck';
import {listWrapper} from 'common/js/build-list';
import {dateTimeFormat, showWarnMsg} from 'common/js/util';
import {activateUser} from 'api/user';

@listWrapper(
    state => ({
        ...state.userKycCheck,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class KycCheck extends React.Component {
    render() {
        const fields = [{
            field: 'realName',
            title: '姓名',
            search: true
        }, {
            field: 'mobile',
            title: '手机号',
            search: true,
            render: (v, data) => {
                return data.user ? data.user.mobile : '';
            }
        }, {
            field: 'userReferee',
            title: '推荐人'
        }, {
            field: 'type',
            title: '类型',
            type: 'select',
            search: true
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            key: 'user_status',
            search: true
        }, {
            field: 'remark',
            title: '备注'
        }];
        return this.props.buildList({
            fields,
            rowKey: 'id',
            pageCode: '805165',
            btnEvent: {
                check: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    // } else if (selectedRows[0].status !== '0') {
                    //     showWarnMsg('不是待审核的记录');
                    } else {
                        this.props.history.push(`/user/kycCheck/addedit?v=1&isCheck=1&code=${selectedRowKeys[0]}`);
                    }
                }
            }
        });
    }
}

export default KycCheck;
