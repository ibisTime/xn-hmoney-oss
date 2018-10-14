import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/public/warmReminding-addedit';
import {showSucMsg} from 'common/js/util';
import {DetailWrapper} from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@DetailWrapper(
    state => state.publicWarmRemindingAddedit,
    {initStates, doFetching, cancelFetching, setSelectData, setPageData, restore}
)
class WarmRemindingAddedit extends React.Component {
    render() {
        const fields = [{
            field: 'id',
            hidden: true
        }, {
            title: '内容',
            field: 'cvalue',
            type: 'textarea',
            required: true
        }, {
            field: 'remark',
            hidden: true,
            value: '温馨提醒'
        }];
        return this.props.buildDetail({
            fields,
            key: 'ckey',
            code: 'tips',
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

export default WarmRemindingAddedit;
