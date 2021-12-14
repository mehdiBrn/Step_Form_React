import React, { Fragment, useContext } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import UserFormContext from '../context/userFormContext/userFormContext';

const FormPersonalDetail = () => {
	const userFormContext = useContext(UserFormContext);
	const { user, nextStep, prevStep, handleChange } = userFormContext;
	const { occupation, city, bio } = user;

	const next = (e) => {
		e.preventDefault();
		nextStep();
	};

	const prev = (e) => {
		e.preventDefault();
		prevStep();
	};

	return (
		<MuiThemeProvider>
			<Fragment>
				<AppBar title='Enter Personal Details' />
				<TextField
					hintText='Enter Your Occupation'
					floatingLabelText='Occupation'
					onChange={(e) => handleChange('occupation', e.target.value)}
					defaultValue={occupation}
				/>
				<br />
				<TextField
					hintText='Enter Your City'
					floatingLabelText='City'
					onChange={(e) => handleChange('city', e.target.value)}
					defaultValue={city}
				/>
				<br />
				<TextField
					hintText='Enter Your Bio'
					floatingLabelText='Bio'
					onChange={(e) => handleChange('bio', e.target.value)}
					defaultValue={bio}
				/>
				<br />
				<RaisedButton
					label='Back'
					primary={false}
					style={styles.button}
					onClick={prev}
				/>
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

export default FormPersonalDetail;
