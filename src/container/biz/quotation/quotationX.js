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
} from '@redux/biz/quotation/quotationX';
import {listWrapper} from 'common/js/build-list';
import {dateTimeFormat} from 'common/js/util';
import {CION_FMVP} from 'common/js/config';

@listWrapper(
    state => ({
        ...state.quotationQuotationX,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class QuotationX extends React.Component {
    render() {
        const fields = [{
            title: '币种',
            field: 'coin'
        }, {
            title: '最新成交价',
            field: 'lastPrice'
        }, {
            title: '卖家期望价格',
            field: 'ask'
        }, {
            title: '买家期望价格',
            field: 'bid'
        }, {
            title: '最高价',
            field: 'high'
        }, {
            title: '最低价',
            field: 'low'
        }, {
            title: '中间价',
            field: 'mid'
        }, {
            title: '来源',
            field: 'origin'
        }, {
            title: '参照货币',
            field: 'referCurrency',
            type: 'select',
            data: [{
                key: 'CNY',
                value: '人民币'
            }],
            keyName: 'key',
            valueName: 'value'
        }, {
            title: '过去24小时成交量',
            field: 'volume'
        }, {
            title: '更新时间',
            field: 'updateDatetime',
            type: 'datetime'
        }];
        return this.props.buildList({
            fields,
            rowKey: 'id',
            pageCode: '650101',
            searchParams: {
                symbol: CION_FMVP
            }
        });
    }
}

export default QuotationX;
