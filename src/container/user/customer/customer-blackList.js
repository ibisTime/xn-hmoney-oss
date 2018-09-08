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
import {SYSTEM_CODE} from 'common/js/config';

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
            field: 'mobile',
            title: '手机号',
            render: (v, data) => {
                if(data.user) {
                    return data.user.mobile;
                }
            }
        }, {
            field: 'userId',
            title: '手机号',
            type: 'select',
            pageCode: '805120',
            params: {
                updater: '',
                kind: 'C'
            },
            keyName: 'userId',
            valueName: '{{mobile.DATA}}--{{nickname.DATA}}',
            searchName: 'mobile',
            search: true,
            noVisible: true
        }, {
            field: 'nickname',
            title: '昵称',
            render: (v, data) => {
                if(data.user) {
                    return data.user.nickname;
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
            pageCode: '805245',
            searchParams: {
                status: '1'
            }
        });
    }
}

export default CustomerBlackList;
