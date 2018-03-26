import {getData} from '../util/fetchUtils.jsx';

export function getHomeCount() {
    let url = '/manage/statistic/base_count.do';
    return getData(url);
}