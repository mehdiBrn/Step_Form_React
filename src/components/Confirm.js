import React, { Fragment, useContext } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import UserFormContext from '../context/userFormContext/userFormContext';

const Confirm = () => {
	const userFormContext = useContext(UserFormContext);
	const { user, nextStep, prevStep } = userFormContext;
	const { firstName, lastName, email, occupation, city, bio } = user;

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
				<AppBar title='Confirm User Data' />
				<List>
					<ListItem primaryText='First Name' secondaryText={firstName} />
					<ListItem primaryText='Last Name' secondaryText={lastName} />
					<ListItem primaryText='Email' secondaryText={email} />
					<ListItem primaryText='Occupation' secondaryText={occupation} />
					<ListItem primaryText='City' secondaryText={city} />
					<ListItem primaryText='Bio' secondaryText={bio} />
				</List>
				<br />
				<RaisedButton
					label='Back'
					primary={false}
					style={styles.button}
					onClick={prev}
				/>
				<RaisedButton
					label='Confirm & Continue'
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

export default Confirm;
