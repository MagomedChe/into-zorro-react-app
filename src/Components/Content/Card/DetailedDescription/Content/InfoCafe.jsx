import React from 'react';
import styles from '../../../../../common/Common.module.scss';

function InfoCafe(props) {
  return (
    <div className={styles.Info}>
      <section>
        <div className="contactInfo">
          <div className={styles.tittle1}>
            <span>Контактная информация</span>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.address}>
              <div>Адрес</div>
              <div>
                <span>{props.item.LockAddresses}</span>
              </div>
            </div>

            <div className={styles.clockWork}>
              <div>Время Работы</div>
              <div>
                <span>{props.item.WorkingHours}</span>
              </div>
            </div>

            <div className={styles.numberUs}>
              <div>Телефон</div>
              <div>
                <span>{props.item.phone}</span>
              </div>
            </div>

            <div className="official-site">
              <div>Официальный сайт</div>
              <div>
                <span>
                  <a href="#"> www.travelers-coffee.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoCafe;
