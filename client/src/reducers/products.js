import { PRODUCTADDED } from '../actions/type';

const initialState = {
	loading: false,
	products: [],
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case PRODUCTADDED:
			return {
				...state,

				loading: true,
				products: payload,
			};

		default:
			return state;
	}
}
