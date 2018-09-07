import {commDetailState} from '../../common';

const PREFIX = 'USER_CUSTOMER_ACCOUNT_';
const SET_SELECT_DATA = PREFIX + 'SET_SELECT_DATA';
const LOADING = PREFIX + 'LOADING';
const CANCEL_LOADING = PREFIX + 'CANCEL_LOADING';
const INIT_STATE = PREFIX + 'INIT_STATE';
const SET_PAGE_DATA = PREFIX + 'SET_PAGE_DATA';
const RESTORE = PREFIX + 'RESTORE';
const SET_COIN_DATA = PREFIX + 'SET_COIN_DATA';
const SET_COINLIST_DATA = PREFIX + 'SET_COINLIST_DATA';

const initState = {...commDetailState};

export function userCustomerAddEdit(state = initState, action) {
    switch (action.type) {
        case INIT_STATE:
            return {...state, ...action.payload};
        case SET_SELECT_DATA:
            return {...state, selectData: {...state.selectData, [action.payload.key]: action.payload.data}};
        case SET_PAGE_DATA:
            return {...state, pageData: action.payload, isLoaded: true};
        case SET_COIN_DATA:
            return {...state, coinData: action.payload};
        case SET_COINLIST_DATA:
            return {...state, coinListData: action.payload};
        case RESTORE:
            return {...initState};
        case LOADING:
            return {...state, fetching: true};
        case CANCEL_LOADING:
            return {...state, fetching: false};
        default:
            return state;
    }
}

export function restore() {
    return {type: RESTORE};
}

export function doFetching() {
    return {type: LOADING};
}

export function cancelFetching() {
    return {type: CANCEL_LOADING};
}

export function setSelectData(data) {
    return {type: SET_SELECT_DATA, payload: data};
}

export function initStates(data) {
    return {type: INIT_STATE, payload: data};
}

export function setPageData(data) {
    return {type: SET_PAGE_DATA, payload: data};
}

// 设置币种的数据
export function setCoinData(data) {
    return {type: SET_COIN_DATA, payload: data};
}

// 设置币种列表的数据
export function setCoinListData(data) {
    return {type: SET_COINLIST_DATA, payload: data};
}
