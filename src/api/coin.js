import fetch from 'common/js/fetch';

// 获取币种列表
export function getCoinList() {
    return fetch(802007, {updater: ''});
}