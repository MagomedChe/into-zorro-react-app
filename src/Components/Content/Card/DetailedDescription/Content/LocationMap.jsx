import React from 'react';
import styles from '../../../../../common/Common.module.scss';

function LocationMap(props) {
  return (
    <div>
      <div className={styles.tittleOfMap}>
        <span>Кофейни по близости</span>
      </div>
      <div className="map-location">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6a8ededcc198cb409c09cf1391780422559e562b77d4ad20b78573826836e0dc&amp;source=constructor"
          width="878"
          height="447"
          frameBorder="0"
        />
      </div>
    </div>
  );
}

export default LocationMap;
