import { Fragment } from 'react';
import './App.css';
import UserFormState from './context/userFormContext/UserFormState';
import UserForm from './components/UserForm';

function App() {
	return (
		<UserFormState>
			<div className='App'>
				<UserForm />
			</div>
		</UserFormState>
	);
}

export default App;
