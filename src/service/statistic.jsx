/*
* @Author: hj
* @Date:   2018-05-06 09:21:14
* @Last Modified by:   hj
* @Last Modified time: 2018-05-06 09:21:14
*/
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class Statistic{
	getHomeCount() {
		return _mm.request({
			    type: 'get',
			    url: '/manage/statistic/base_count.do',
		})
	}
}

export default Statistic;