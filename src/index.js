import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/GlobalStyle.js';
import { Main } from './styles/constants/styledComponents.js';
import { AuthProvider } from './components/providers/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <Main>
        <App />
      </Main>
    </AuthProvider>
  </React.StrictMode>
);