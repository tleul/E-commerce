import { ADDTOCART } from './type';
import api from '../api/api';

export const addtocart = (id) => async (dispatch) => {
	const res = await api.post(`/addtocart/${id}`);

	dispatch({
		type: ADDTOCART,
		payload: res.data,
	});
};
