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
} from '@redux/public/notice';
import {showWarnMsg, getUserName} from 'common/js/util';
import {listWrapper} from 'common/js/build-list';
import {SYSTEM_CODE} from 'common/js/config';
import {Button, Upload, Modal} from 'antd';
import fetch from 'common/js/fetch';

@listWrapper(
    state => ({
        ...state.publicNotice,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class Notice extends React.Component {
    render() {
        const fields = [{
            field: 'title',
            title: '标题'
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            search: true,
            key: 'sms_status'
        }, {
            field: 'updater',
            title: '最近修改人'
        }, {
            field: 'updateDatetime',
            title: '最近修改时间',
            formatter: 'datetime'
        }, {
            field: 'remark',
            title: '备注'
        }];
        return this.props.buildList({
            fields,
            pageCode: 805305,
            searchParams: {
                type: '0'
            },
            btnEvent: {
                pushDown: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].status === '0') {
                        Modal.confirm({
                            okText: '确认',
                            cancelText: '取消',
                            content: '确定发布？',
                            onOk: () => {
                                this.props.doFetching();
                                return fetch(805301, {
                                    code: selectedRowKeys[0],
                                    updater: getUserName()
                                }).then(() => {
                                    this.props.cancelFetching();
                                    showWarnMsg('操作成功');
                                }).catch(() => {
                                    this.props.cancelFetching();
                                });
                            }
                        });
                    } else if (selectedRows[0].status === '1') {
                        Modal.confirm({
                            okText: '确认',
                            cancelText: '取消',
                            content: '确定撤下？',
                            onOk: () => {
                                this.props.doFetching();
                                return fetch(805302, {
                                    code: selectedRowKeys[0],
                                    updater: getUserName()
                                }).then(() => {
                                    this.props.cancelFetching();
                                    showWarnMsg('操作成功');
                                }).catch(() => {
                                    this.props.cancelFetching();
                                });
                            }
                        });
                    } else {
                        showWarnMsg('该记录的状态不可操作');
                    }
                }
            }
        });
    }
}

export default Notice;
