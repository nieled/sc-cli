import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setupAxiosInterceptors } from './config/axiosInterceptors';

import ErrorBoundary from './shared/error/error-boundary';

setupAxiosInterceptors();

ReactDOM.render(
	<ErrorBoundary>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ErrorBoundary>,
	document.getElementById('root')
);
