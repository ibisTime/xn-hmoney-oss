import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/public/contact-addedit';
import {showSucMsg} from 'common/js/util';
import {DetailWrapper} from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@DetailWrapper(
    state => state.publicContactAddEdit,
    {initStates, doFetching, cancelFetching, setSelectData, setPageData, restore}
)
class ContactAddeidt extends React.Component {
    render() {
        const fields = [{
            field: 'id',
            hidden: true
        }, {
            title: '联系客服',
            field: 'cvalue',
            type: 'textarea',
            required: true
        }, {
            field: 'remark',
            hidden: true,
            value: '联系客服'
        }];
        return this.props.buildDetail({
            fields,
            key: 'ckey',
            code: 'service',
            detailCode: 630047,
            editCode: 630042,
            buttons: [{
                title: '保存',
                check: true,
                handler: (params) => {
                    this.props.doFetching();
                    fetch(630042, params).then(() => {
                        showSucMsg('操作成功');
                        this.props.cancelFetching();
                    }).catch(this.props.cancelFetching);
                }
            }]
        });
    }
}

export default ContactAddeidt;
