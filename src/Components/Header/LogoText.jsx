import React from 'react';
import styles from '../../common/Common.module.scss';
import logo from '../../logo/photo_2021-07-27_22-29-19.jpg';
import { NavLink } from 'react-router-dom';

function LogoText(props) {
  return (
    <NavLink exact to="/" className={styles.HomePage}>
      <div className={styles.logoText}>
        <div className={styles.logo}>
          <img src={logo} alt="images" />
        </div>
        <div className={styles.text}>
          <span>Intozorro</span>
        </div>
      </div>
    </NavLink>
  );
}

export default LogoText;
