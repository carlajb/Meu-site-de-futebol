import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPassWordLost from './LoginPassWordLost';
import LoginPassWordReset from './LoginPassWordReset';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPassWordLost />} />
          <Route path="resetar" element={<LoginPassWordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
