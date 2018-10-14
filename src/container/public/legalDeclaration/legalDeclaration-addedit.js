import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/public/legalDeclaration-addedit';
import {showSucMsg} from 'common/js/util';
import {DetailWrapper} from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@DetailWrapper(
    state => state.publicLegalDeclarationAddEdit,
    {initStates, doFetching, cancelFetching, setSelectData, setPageData, restore}
)
class LegalDeclarationAddedit extends React.Component {
    render() {
        const fields = [{
            field: 'id',
            hidden: true
        }, {
            title: '法律声明',
            field: 'cvalue',
            type: 'textarea',
            required: true
        }, {
            field: 'remark',
            hidden: true,
            value: '法律声明'
        }];
        return this.props.buildDetail({
            fields,
            key: 'ckey',
            code: 'raw_note',
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

export default LegalDeclarationAddedit;
