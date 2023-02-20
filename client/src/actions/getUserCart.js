import { GETUSERCART, EMPTYCART } from './type';
import api from '../api/api';

export const getusercart = () => async (dispatch) => {
	const userID = localStorage.getItem('user');

	try {
		const userCart = await api.get(`/getusercart/${userID}`);
		if (localStorage.getItem('user')) {
			console.log(userCart.data);
			dispatch({
				type: GETUSERCART,
				payload: userCart.data,
			});
		}
	} catch (error) {
		dispatch({
			type: EMPTYCART,
		});
	}
};
