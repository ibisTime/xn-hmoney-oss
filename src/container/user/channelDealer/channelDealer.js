import React from 'react';
import {Modal} from 'antd';
import {
    setTableData,
    setPagination,
    setBtnList,
    setSearchParam,
    clearSearchParam,
    doFetching,
    cancelFetching,
    setSearchData
} from '@redux/user/channelDealer/channelDealer';
import {listWrapper} from 'common/js/build-list';
import {dateTimeFormat, showWarnMsg} from 'common/js/util';
import {activateUser} from 'api/user';

@listWrapper(
    state => ({
        ...state.userChannelDealer,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class ChannelDealer extends React.Component {
    render() {
        const fields = [{
            field: 'mobile',
            title: '手机号',
            search: true
        }, {
            field: 'nickname',
            title: '昵称'
        }, {
            field: 'userReferee',
            title: '推荐人',
            render: (v, data) => {
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
            key: 'user_status',
            search: true
        }, {
            field: 'isRealname',
            title: '是否实名',
            render: (v, data) => {
                return data.realName ? '是' : '否';
            }
        }, {
            field: 'realName',
            title: '真实姓名',
            render: (v, data) => {
                return data.realName ? data.realName : '-';
            }
        }, {
            field: 'divRate1',
            title: '普通分成'
        }, {
            field: 'divRate2',
            title: '代理人分成'
        }, {
            field: 'tradeRate',
            title: '广告费率'
        }, {
            field: 'createDatetime',
            title: '注册时间',
            type: 'date',
            rangedate: ['createDatetimeStart', 'createDatetimeEnd'],
            render: dateTimeFormat,
            search: true
        }, {
            field: 'lastLogin',
            title: '最后登录时间',
            type: 'datetime'
        }, {
            field: 'remark',
            title: '备注'
        }];
        return this.props.buildList({
            fields,
            rowKey: 'userId',
            pageCode: '805120',
            searchParams: {
                kind: 'C'
            },
            btnEvent: {
                active: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].status === '0') {
                        showWarnMsg('用户状态正常');
                    } else {
                        Modal.confirm({
                            okText: '确认',
                            cancelText: '取消',
                            content: `确定允许此用户登录？`,
                            onOk: () => {
                                this.props.doFetching();
                                return activateUser(selectedRowKeys[0]).then(() => {
                                    this.props.getPageData();
                                    showWarnMsg('操作成功');
                                }).catch(() => {
                                    this.props.cancelFetching();
                                });
                            }
                        });
                    }
                },
                rock: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].status === '2') {
                        showWarnMsg('用户已禁止登陆');
                    } else {
                        Modal.confirm({
                            okText: '确认',
                            cancelText: '取消',
                            content: `确定禁止此用户登录？`,
                            onOk: () => {
                                this.props.doFetching();
                                return activateUser(selectedRowKeys[0]).then(() => {
                                    this.props.getPageData();
                                    showWarnMsg('操作成功');
                                }).catch(() => {
                                    this.props.cancelFetching();
                                });
                            }
                        });
                    }
                },
                // 修改广告费率
                editAdvertisementFee: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else {
                        this.props.history.push(`/user/customer/editAdvertisementFee?code=${selectedRowKeys[0]}`);
                    }
                },
                // 账户查询
                accountQuery: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else {
                        this.props.history.push(`/user/customer/accountQuery?userId=${selectedRowKeys[0]}`);
                    }
                },
                // 委托单查询
                entrustQuery: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else {
                        this.props.history.push(`/user/customer/entrustQuery?userId=${selectedRowKeys[0]}`);
                    }
                }
            }
        });
    }
}

export default ChannelDealer;
