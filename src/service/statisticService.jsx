import {getData} from '../util/fetch.jsx';

export function getHomeCount() {
    let url = '/manage/statistic/base_count.do';
    return getData(url);
}

