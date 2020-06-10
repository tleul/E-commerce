import { GETUSERCART, EMPTYCART } from './type';
import api from '../api/api';

export const getusercart = () => async (dispatch) => {
	const userID = localStorage.getItem('user');

	try {
		const userCart = await api.get(`/getusercart/${userID}`);

		dispatch({
			type: GETUSERCART,
			payload: userCart.data,
		});
	} catch (error) {
		dispatch({
			type: EMPTYCART,
		});
	}
};
