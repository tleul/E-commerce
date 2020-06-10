import { GETUSERCART } from './type';
import api from '../api/api';

export const getusercart = () => async (dispatch) => {
	const userID = localStorage.getItem('user');

	const userCart = await api.get(`/getusercart/${userID}`);
	dispatch({
		type: GETUSERCART,
		payload: userCart.data,
	});
};
