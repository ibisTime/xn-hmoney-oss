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
} from '@redux/biz/quotation/quotationETH';
import {listWrapper} from 'common/js/build-list';
import {dateTimeFormat} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.quotationQuotationETH,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class QuotationETH extends React.Component {
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
            pageCode: '805120'
        });
    }
}

export default QuotationETH;
