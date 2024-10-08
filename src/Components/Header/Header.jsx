import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import c from '../../Assets/G.png';
import { UserContext } from '../../UserContext';

function Header() {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Home">
          <img
            src={c}
            alt="Your SVG"
            width={50}
            height={50}
            aria-label="cabecalho"
          />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
