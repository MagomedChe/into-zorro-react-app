import React from 'react';
import styles from '../../../../../common/Common.module.scss';
import logo from '../../../images/logo.jpg';

function LogoText(props) {
  return (
    <div className={styles.logoText}>
      <div className={styles.logo}>
        <img src={logo} alt="image" />
      </div>
      <div className={styles.text}>
        <span>Рестораны и Кафе</span>
      </div>
    </div>
  );
}

export default LogoText;
