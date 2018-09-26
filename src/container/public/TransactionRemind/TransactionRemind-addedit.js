import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/public/TransactionRemind-addedit';
import {showSucMsg} from 'common/js/util';
import {DetailWrapper} from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@DetailWrapper(
    state => state.publicTransactionRemindAddEdit,
    {initStates, doFetching, cancelFetching, setSelectData, setPageData, restore}
)
class TransactionRemindAddedit extends React.Component {
    render() {
        const fields = [{
            field: 'id',
            hidden: true
        }, {
            field: 'remark',
            value: '交易提醒',
            hidden: true
        }, {
            title: '内容',
            field: 'cvalue',
            type: 'textarea',
            normalArea: true,
            required: true
        }];
        return this.props.buildDetail({
            fields,
            key: 'ckey',
            code: 'trade_remind',
            detailCode: 630047,
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

export default TransactionRemindAddedit;
