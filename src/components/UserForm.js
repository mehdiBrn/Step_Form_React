import React, { useContext } from 'react';
import UserFormContext from '../context/userFormContext/userFormContext';
import FormUserDetail from './FormUserDetail';
import FormPersonalDetail from './FormPersonalDetail';
import Confirm from './Confirm';
import Success from './Success';
import userFormContext from '../context/userFormContext/userFormContext';

const UserForm = () => {
	const userFormContext = useContext(UserFormContext);
	const { step } = userFormContext;

	switch (step) {
		case 1:
			return <FormUserDetail />;
		case 2:
			return <FormPersonalDetail />;

		case 3:
			return <Confirm />;

		case 4:
			return <Success />;
	}
};

export default UserForm;
