import { ADDTOCART } from '../actions/type';

const initialState = {
	loading: false,
	usercart: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case ADDTOCART:
			localStorage.setItem('user', payload.userId);

			return {
				...state,

				loading: true,
				usercart: payload,
			};

		default:
			return state;
	}
}
