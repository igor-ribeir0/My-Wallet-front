import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login.js';
import SignUp from './components/pages/SignUp.js';
import Home from './components/pages/Home.js';
import NewEntry from './components/pages/NewEntry.js';
import NewOut from './components/pages/NewOut.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Login />} />
        <Route path = '/sign-up' element = {<SignUp />} />
        <Route path = '/home' element = {<Home />} />
        <Route path = '/nova-entrada' element = {<NewEntry />} />
        <Route path = '/nova-saida' element = {<NewOut />} />
      </Routes>
    </BrowserRouter>
  );
};