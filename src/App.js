import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login.js';
import SignUp from './components/pages/SignUp.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Login />} />
        <Route path = '/sign-up' element = {<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};