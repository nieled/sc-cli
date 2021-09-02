import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import ErrorBoundary from './shared/error/error-boundary';

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <Header title="React app" />
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById('root')
);
