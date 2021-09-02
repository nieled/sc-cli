import React, { useReducer } from 'react';
import Layout from './components/Layout';

function App() {
  const [useDefaultTheme, toggle] = useReducer(theme => !theme, true);

  return (
    <>
      <Layout toggleTheme={toggle} useDefaultTheme={useDefaultTheme}>
        <div>Child component</div>
      </Layout>
    </>
  );
}

export default App;
