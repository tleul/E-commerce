import { ADDTOCART } from '../actions/type';

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

		default:
			return state;
	}
}
