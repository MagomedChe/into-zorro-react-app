import React from 'react';
import styles from '../../../../../common/Common.module.scss';
import image from '../../../images/image 8.png';
import { useDispatch, useSelector } from 'react-redux';
import { postRating } from '../../../../../redux/RatingReducer/actions';
import Rating from 'react-rating';

function Map(props) {
  const dispatch = useDispatch();
  const ratingItems = useSelector((state) => {
    const items = state.ratinges.rating.filter(
      (item) => item.cafeId === props.id,
    );
    return (
      items.reduce((value, item) => {
        return item.rating + value;
      }, 0) / items.length
    );
  });
  const m = ratingItems.toFixed(1);

  const handleClick = (rating) => {
    dispatch(postRating(props.id, rating));
  };

  return (
    <div className={styles.ClockMap}>
      <div className={styles.addresses}>
        <img src={image} alt="" />
        <span>{props.item.location}</span>
      </div>

      <div className={styles.rating}>
        <Rating
          className={styles.Star}
          initialRating={m}
          onClick={(e) => handleClick(e)}
          emptySymbol={'fa fa-star star_gray'}
          fullSymbol={'fa fa-star'}
        />
        <p>Rating is {m}</p>
      </div>
    </div>
  );
}

export default Map;
