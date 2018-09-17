import fetch from 'common/js/fetch';

/**
 * 分页查询账号
 * @param start
 * @param limit
 * @param type
 */
export function getPageAccount({start, limit, type}) {
    return fetch(802500, {
        start,
        limit,
        type
    });
}
/**
 * 列表查询用户账号
 * @param userId
 * @param currency
 */
export function getListUserAccount(params) {
    return fetch(802301, params);
}
export function gettotalAcount() {
    return fetch(630900);
}
