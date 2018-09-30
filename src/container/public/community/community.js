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
} from '@redux/public/community';
import {listWrapper} from 'common/js/build-list';

@listWrapper(
    state => ({
        ...state.publicCommunity,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class Community extends React.Component {
    render() {
        const fields = [{
            title: '名称',
            field: 'name',
            search: true
        }, {
            title: '社群号',
            field: 'url'
        }, {
            title: '顺序',
            field: 'orderNo'
        }, {
            title: '备注',
            field: 'remark'
        }];
        return this.props.buildList({
            fields,
            pageCode: '630505',
            deleteCode: '630501',
            searchParams: {
                type: 6,
                location: 'community'
            }
        });
    }
}

export default Community;
