import { ADDTOCART, EMPTYCART, GETUSERCART } from '../actions/type';

const initialState = {
	loading: false,
	usercart: {},
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
			console.log(payload);
			return {
				...state,
				loading: true,
				usercart: payload,
			};
		case EMPTYCART:
			return {
				...state,
				loading: false,
				usercart: null,
			};

		default:
			return state;
	}
}
