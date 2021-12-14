import { NEXT_STEP, PREV_STEP, USER_CHANGE } from '../types';

export default (state, action) => {
	switch (action.type) {
		case NEXT_STEP:
			return {
				...state,
				step: state.step + 1,
			};

		case PREV_STEP:
			return {
				...state,
				step: state.step - 1,
			};

		case USER_CHANGE:
			return {
				...state,
				user: {
					...state.user,
					[action.payload.name]: action.payload.value,
				},
			};

		default:
			return state;
	}
};
