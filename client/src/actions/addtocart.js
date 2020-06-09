import { ADDTOCART } from './type';
import api from '../api/api';

export const addtocart = (id) => async (dispatch) => {
	const userId = localStorage.getItem('user');
	console.log(userId);
	const body = { user: userId };
	const res = await api.post(`/addtocart/${id}`, body);
	if (!localStorage.getItem('user')) {
		localStorage.setItem('user', res.data.userId);
	}
	dispatch({
		type: ADDTOCART,
		payload: res.data,
	});
};
