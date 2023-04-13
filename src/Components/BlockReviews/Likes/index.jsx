import React from 'react';
import styles from '../styles.module.css';

function Likes(props) {
  return (
    <div className={styles.likes}>
      <div
        className={styles.like}
        onClick={() => props.setPositive(true)}
        style={props.positive ? { color: '#02b302' } : {}}
      >
        <i className="fas fa-thumbs-up" />
      </div>
      <div
        className={styles.dislike}
        onClick={() => props.setPositive(false)}
        style={props.positive === false ? { color: 'red' } : {}}
      >
        <i className="fas fa-thumbs-down" />
      </div>
    </div>
  );
}

export default Likes;
