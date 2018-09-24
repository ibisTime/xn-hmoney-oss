import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/user/channelDealerCommissions/channelDealerCommissions-settlement';
import {getQueryString, moneyFormat, dateTimeFormat, showSucMsg} from 'common/js/util';
import {DetailWrapper} from 'common/js/build-detail';

@DetailWrapper(
    state => state.userCustomerAddEdit,
    {initStates, doFetching, cancelFetching, setSelectData, setPageData, restore}
)
class ChannelDealerCommissionsSettlement extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
    }

    render() {
        const fields = [{
            field: 'userId',
            title: '渠道商',
            render: (v, data) => {
                return data.user ? data.user.nickname : '-';
            }
        }, {
            field: 'mobile',
            title: '手机号',
            render: (v, data) => {
                return data.user ? data.user.mobile : '-';
            }
        }, {
            field: 'amount',
            title: '佣金',
            render: (v, data) => {
                return moneyFormat(v, '', data.currency);
            }
        }, {
            field: 'currency',
            title: '币种'
        }, {
            field: 'refType',
            title: '佣金类型'
        }, {
            field: 'refNote',
            title: '佣金说明'
        }, {
            field: 'refCode',
            title: '关联单号'
        }, {
            field: 'remark',
            title: '备注'
        }, {
            field: 'handleNote',
            title: '处理说明',
            required: true,
            readonly: false
        }];
        return this.props.buildDetail({
            fields,
            key: 'id',
            code: this.code,
            view: this.view,
            detailCode: '805121',
            buttons: [{
                title: '结算',
                handler: (param) => {
                    var data = {
                        'awardList': [{
                            id: this.code,
                            handleResult: '1',
                            handleNote: param.handleNote
                        }]
                    };
                    this.props.doFetching();
                    fetch(802390, data).then(() => {
                        showSucMsg('操作成功');
                        this.props.cancelFetching();
                        setTimeout(() => {
                            this.props.history.go(-1);
                        }, 1000);
                    }).catch(this.props.cancelFetching);
                },
                check: true,
                type: 'primary'
            }, {
                title: '不通过',
                handler: (param) => {
                    var data = {
                        'awardList': [{
                            id: this.code,
                            handleResult: '0',
                            handleNote: param.handleNote
                        }]
                    };
                    this.props.doFetching();
                    fetch(802390, data).then(() => {
                        showSucMsg('操作成功');
                        this.props.cancelFetching();
                        setTimeout(() => {
                            this.props.history.go(-1);
                        }, 1000);
                    }).catch(this.props.cancelFetching);
                },
                check: true
            }, {
                title: '返回',
                handler: (param) => {
                    this.props.history.go(-1);
                }
            }]
        });
    }
}

export default ChannelDealerCommissionsSettlement;
