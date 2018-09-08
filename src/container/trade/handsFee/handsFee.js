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
} from '@redux/trade/handsFee/handsFee';
import {listWrapper} from 'common/js/build-list';
import {dateTimeFormat} from 'common/js/util';
import {SYSTEM_CODE} from 'common/js/config';

@listWrapper(
    state => ({
        ...state.tradeHandsFee,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class HandsFee extends React.Component {
    render() {
        const fields = [{
            field: 'remark',
            title: '说明'
        }, {
            field: 'cvalue',
            title: '数值'
        }];
        return this.props.buildList({
            fields,
            rowKey: 'id',
            pageCode: '630045',
            searchParams: {
                type: 'trade_rule'
            }
        });
    }
}

export default HandsFee;
