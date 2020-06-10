import { ADDTOCART } from './type';
import api from '../api/api';
import { getusercart } from './getUserCart';

export const addtocart = (id) => async (dispatch) => {
	try {
		const userId = localStorage.getItem('user');

		const body = { user: userId };

		const res = await api.post(`/addtocart/${id}`, body);
		if (!localStorage.getItem('user')) {
			localStorage.setItem('user', res.data.userId);
		}

		dispatch({
			type: ADDTOCART,
			payload: res.data,
		});

		dispatch(getusercart());
	} catch (error) {
		console.log(error);
	}
};
