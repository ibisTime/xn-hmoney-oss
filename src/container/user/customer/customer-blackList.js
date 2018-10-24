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
} from '@redux/user/customer/customer-blackList';
import {listWrapper} from 'common/js/build-list';
import {dateTimeFormat} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.userCustomerBlackList,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class CustomerBlackList extends React.Component {
    render() {
        const fields = [{
            field: 'nickname',
            title: '昵称',
            render: (v, data) => {
                if(data.userInfo) {
                    return data.userInfo.nickname;
                }
            }
        }, {
            field: 'mobile',
            title: '手机号',
            render: (v, data) => {
                if(data.userInfo) {
                    return data.userInfo.mobile;
                }
            }
        }, {
            field: 'userId',
            title: '手机号',
            type: 'select',
            pageCode: '805120',
            params: {
                kind: 'C'
            },
            keyName: 'userId',
            valueName: '{{nickname.DATA}})-{{mobile.DATA}}-{{email.DATA}}',
            searchName: 'nickname',
            placeholder: '请输入用户昵称搜索',
            search: true,
            noVisible: true
        }, {
            field: 'email',
            title: '邮箱',
            render: (v, data) => {
                if(data.userInfo) {
                    return data.userInfo.mobile;
                }
            }
        }, {
            field: 'createDatetime',
            title: '拉黑时间',
            type: 'datetime'
        }, {
            field: 'updater',
            title: '操作人'
        }, {
            field: 'remark',
            title: '备注'
        }];
        return this.props.buildList({
            fields,
            rowKey: 'id',
            pageCode: '805245',
            deleteCode: '805241',
            searchParams: {
                status: '1',
                updater: ''
            }
        });
    }
}

export default CustomerBlackList;
