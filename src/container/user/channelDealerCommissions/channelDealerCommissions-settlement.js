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
import fetch from 'common/js/fetch';

@DetailWrapper(
    state => state.userChannelDealerCommissionsSettlement,
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
            type: 'select',
            pageCode: '805120',
            params: {
                kind: 'Q'
            },
            keyName: 'userId',
            valueName: '{{nickName.DATA}}-{{mobile.DATA}}',
            searchName: 'keyword',
            render: (v, data) => {
                return data.user ? data.user.nickname : '-';
            },
            search: true
        }, {
            field: 'mobile',
            title: '手机号',
            formatter: (v, data) => {
                return data.user ? data.user.mobile : '-';
            }
        }, {
            field: 'email',
            title: '邮箱',
            formatter: (v, data) => {
                return data.user ? data.user.email : '-';
            }
        }, {
            field: 'settleCount',
            title: '结算金额'
        }, {
            field: 'unsettleCount',
            title: '未结算金额'
        }, {
            field: 'nosettleCount',
            title: '不结算金额'
        }, {
            field: 'tradeCount',
            title: '交易总金额'
        }, {
            field: 'tradeAward',
            title: '交易奖励'
        }, {
            field: 'regAward',
            title: '注册奖励'
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
            detailCode: '802398',
            buttons: [{
                title: '结算',
                handler: (param) => {
                    var data = {
                        id: this.code,
                        handleResult: '1',
                        handleNote: param.handleNote
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
                title: '不结算',
                handler: (param) => {
                    var data = {
                        id: this.code,
                        handleResult: '0',
                        handleNote: param.handleNote
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
