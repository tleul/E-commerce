import { PRODUCTADDED } from './type';
import API from '../api/api';
import { getusercart } from './getUserCart';
export const getProducts = () => async (dispatch) => {
	const res = await API.get('/getproduct');
	console.log(res.data);
	dispatch({
		type: PRODUCTADDED,
		payload: res.data,
	});
	dispatch(getusercart());
};
