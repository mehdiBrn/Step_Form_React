import React, { Fragment, useContext } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import UserFormContext from '../context/userFormContext/userFormContext';

const FormUserDetail = () => {
	const userFormContext = useContext(UserFormContext);
	const { user, nextStep, handleChange } = userFormContext;
	const { firstName, lastName, email } = user;

	const next = (e) => {
		e.preventDefault();
		nextStep();
	};

	return (
		<MuiThemeProvider>
			<Fragment>
				<AppBar title='Enter User Details' />
				<TextField
					hintText='Enter Your First Name'
					floatingLabelText='First Name'
					onChange={(e) => handleChange('firstName', e.target.value)}
					defaultValue={firstName}
				/>
				<br />
				<TextField
					hintText='Enter Your Last Name'
					floatingLabelText='Last Name'
					onChange={(e) => handleChange('lastName', e.target.value)}
					defaultValue={lastName}
				/>
				<br />
				<TextField
					hintText='Enter Your Email'
					floatingLabelText='Email'
					onChange={(e) => handleChange('email', e.target.value)}
					defaultValue={email}
				/>
				<br />
				<RaisedButton
					label='Continue'
					primary={true}
					style={styles.button}
					onClick={next}
				/>
			</Fragment>
		</MuiThemeProvider>
	);
};

const styles = {
	button: {
		margin: 15,
	},
};

export default FormUserDetail;
