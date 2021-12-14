import React, { Fragment, useContext } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Success = () => {
	return (
		<MuiThemeProvider>
			<Fragment>
				<AppBar title='Successful' />
				<h1>Thank You For Your Submission</h1>
				<p>you will get an email with further instructios</p>
			</Fragment>
		</MuiThemeProvider>
	);
};

export default Success;
