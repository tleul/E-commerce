import { ADDTOCART, EMPTYCART, GETUSERCART } from '../actions/type';

const initialState = {
	loading: false,
	usercart: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case ADDTOCART:
			return {
				...state,

				loading: true,
				usercart: payload,
			};
		case GETUSERCART:
			return {
				loading: true,
				usercart: payload,
			};
		case EMPTYCART:
			return {
				loading: true,
				usercart: null,
			};

		default:
			return state;
	}
}
