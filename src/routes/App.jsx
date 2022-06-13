import React from 'react';
import { HashRouter, Routes, Route }  from 'react-router-dom';
import Layout from '@containers/Layout';
import ChangePassword from '@pages/ChangePassword';
import RecoveryPassword from '@pages/RecoveryPassword';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import EmailSent from '@pages/EmailSent';
import Login from '@pages/Login';
import CreateAccount from '@pages/CreateAccount';
import MyAccount from '@pages/MyAccount';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInicialState';
import '@styles/global.css';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={ initialState } >
      <HashRouter>
        <Layout>
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/change-password' element = {<ChangePassword/>} />
            <Route path='/recovery-password' element = {<RecoveryPassword/>} />
            <Route path='/email-sent' element = {<EmailSent/>} />
            <Route path='/login' element = {<Login/>} />
            <Route path='/create-account' element = {<CreateAccount/>} />
            <Route path='/my-account' element = {<MyAccount/>} />
            <Route path='/my-account' element = {<MyAccount/>} />
            <Route path='*' element = {<NotFound/>} />
          </Routes>
        </Layout>
      </HashRouter>
    </AppContext.Provider>
  );
}

export default App;