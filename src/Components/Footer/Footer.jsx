import React from 'react';
import styles from '../../common/Common.module.scss';

function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.company}>
        <p>© 1999–2021 ООО «Компания Lincode». Все права защищены.</p>
      </div>
    </div>
  );
}

export default Footer;
