import { ADDTOCART, EMPTYCART, GETUSERCART, DELETEITEM } from '../actions/type';

const initialState = {
	loading: false,
	usercart: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case ADDTOCART:
		case DELETEITEM:
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
