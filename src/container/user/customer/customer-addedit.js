import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/user/customer/customer-addedit';
import {getQueryString} from 'common/js/util';
import {DetailWrapper} from 'common/js/build-detail';
import {SYSTEM_CODE} from 'common/js/config';

@DetailWrapper(
    state => state.userCustomerAddEdit,
    {initStates, doFetching, cancelFetching, setSelectData, setPageData, restore}
)
class CustomerAddedit extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
    }

    render() {
        const fields = [{
            field: 'mobile',
            title: '手机号',
            required: true,
            readonly: this.view
        }, {
            title: '昵称',
            field: 'nickname',
            readonly: this.view
        }, {
            field: 'idKind',
            title: '证件类型',
            type: 'select',
            readonly: this.view,
            data: [{
                key: '1',
                value: '身份证'
            }],
            keyName: 'key',
            valueName: 'value'
        }, {
            field: 'idNo',
            title: '证件号',
            readonly: this.view,
            maxlength: 30
        }, {
            field: 'realName',
            title: '真实姓名',
            readonly: this.view,
            maxlength: 10
        }, {
            field: 'userReferee',
            title: '推荐人',
            formatter: function(v, data) {
                if (data.refereeUser) {
                    return data.refereeUser.mobile;
                } else {
                    return '-';
                }
            },
            required: true
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            key: 'user_status'
        }, {
            field: 'createDatetime',
            title: '注册时间',
            type: 'datetime'
        }, {
            field: 'lastLogin',
            title: '最后登录时间',
            type: 'datetime'
        }, {
            field: 'remark',
            title: '备注'
        }];
        console.log(this.props.coinList);
        return this.props.buildDetail({
            fields,
            key: 'userId',
            code: this.code,
            view: this.view,
            detailCode: '805121'
        });
    }
}

export default CustomerAddedit;
