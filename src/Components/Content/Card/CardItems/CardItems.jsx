//library
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Rating from 'react-rating';

//Redux Actions
import { postRating } from '../../../../redux/RatingReducer/actions';

//styles
import styles from '../../../../common/Common.module.scss';
import style from '../../../BlockReviews/styles.module.css';
import './StarGlobal.css';

function CardItems(props) {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
  const filteredReviews = reviews.filter(
    (review) => review.cafeId === props.item.id,
  );
  const ratingItems = useSelector((state) => {
    const items = state.ratinges.rating.filter(
      (item) => item.cafeId === props.item.id,
    );
    return (
      items.reduce((value, item) => {
        return item.rating + value;
      }, 0) / items.length
    );
  });
  const id = props.item.id;
  const m = ratingItems.toFixed(1);
  const handleClick = (rating) => {
    dispatch(postRating(id, rating));
  };

  return (
    <div className={styles.cardItem1}>
      <NavLink to={`${props.item.id}`} className={styles.HomePage}>
        <div className={styles.cardImage}>
          <img src={props.item.url} alt="images" />
        </div>
        <div className="card-tittle">
          <div className={styles.tittle1}>
            <span>{props.item.title}</span>
          </div>
        </div>
      </NavLink>
      <div className="addressees">
        <div className={styles.address}>
          <span>{props.item.address}</span>
        </div>
      </div>
      <div className={styles.RatingStar}>
        <div>
          <Rating
            className={styles.Star}
            initialRating={m}
            onClick={handleClick}
            emptySymbol={'fa fa-star star_gray'}
            fullSymbol={'fa fa-star'}
          />
        </div>
        <div>
          <p>{m}</p>
        </div>
      </div>
      <div className={style.ReviewLength}>
        {/*Это не кликабельно! данный блок просто выводит кол-во отзывов на той или иной странице!
       Я просто для украшения сделал Cursor:Pointer.
       */}
        <span>Отзывы ({filteredReviews.length})</span>
      </div>
    </div>
  );
}

export default CardItems;
