import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/public/notice-addedit';
import {getQueryString, getUserName} from 'common/js/util';
import {DetailWrapper} from 'common/js/build-detail';
import {SYSTEM_CODE} from 'common/js/config';

@DetailWrapper(
    state => state.publicNoticeAddEdit,
    {initStates, doFetching, cancelFetching, setSelectData, setPageData, restore}
)
class NoticeAddEdit extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
    }

    render() {
        const fields = [{
            title: '标题',
            field: 'title',
            required: true,
            maxlength: 30
        }, {
            title: '内容',
            field: 'content',
            type: 'textarea',
            normalArea: true,
            required: true
        }, {
            title: '类型',
            field: 'type',
            hidden: true,
            value: 0
        }, {
            title: '备注',
            field: 'remark'
        }];
        return this.props.buildDetail({
            fields,
            key: 'id',
            code: this.code,
            view: this.view,
            detailCode: 805307,
            addCode: 805300,
            editCode: 805300,
            beforeSumit: (params) => {
                params.updater = getUserName();
                return params;
            }
        });
    }
}

export default NoticeAddEdit;
