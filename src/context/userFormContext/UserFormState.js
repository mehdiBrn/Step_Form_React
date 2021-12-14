import React, { useReducer } from 'react';
import UserFormContext from './userFormContext';
import UserFormReducer from './userFormReducer';
import { NEXT_STEP, PREV_STEP, USER_CHANGE } from '../types';

const UserFormState = (props) => {
	const initialState = {
		step: 1,
		user: {
			firstName: '',
			lastName: '',
			email: '',
			occupation: '',
			city: '',
			bio: '',
		},
	};

	const [state, dispatch] = useReducer(UserFormReducer, initialState);

	// Proceed to Next Step
	const nextStep = () => {
		dispatch({
			type: NEXT_STEP,
		});
	};

	// Proceed to Previous Step
	const prevStep = () => {
		dispatch({
			type: PREV_STEP,
		});
	};

	// Handle change
	const handleChange = (name, value) => {
		dispatch({
			type: USER_CHANGE,
			payload: { name, value },
		});
	};

	return (
		<UserFormContext.Provider
			value={{
				step: state.step,
				user: state.user,
				nextStep,
				prevStep,
				handleChange,
			}}>
			{props.children}
		</UserFormContext.Provider>
	);
};

export default UserFormState;
