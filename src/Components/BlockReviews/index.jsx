import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Review from './Review';
import Form from './Form/Form';
import Likes from './Likes';
import ButtonAddReview from './Buttons/ButtonAddReview';
import { loadUsers } from './Users/actions';
import AllAndPositiveButtons from './Buttons/AllAndPositiveButtons';

function Reviews(props) {
  const dispatch = useDispatch();
  const id = parseInt(useParams().id);
  const reviews = useSelector((state) => state.reviews.reviews);
  const authUser = JSON.parse(localStorage.getItem('user'));
  const userId = reviews.map((review) => review.userId);
  const filteredReviews = reviews.filter((review) => review.cafeId === id);
  const positiveReviews = filteredReviews.filter(
    (review) => review.positive === true,
  );
  const [text, setText] = useState('');

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  //Стейт для определения положительного или отрицательного отзыва
  const [positive, setPositive] = useState('');

  //Стейт для вывода положительных отзывов
  // Берем ключ из sessionStorage. по умолчанию в ключ передается false
  const [filterPositive, setFilterPositive] = useState(
    JSON.parse(sessionStorage.getItem('positive')) || false,
  );

  //Сохраняем ключ в sessionStorage
  useEffect(() => {
    sessionStorage.setItem('positive', JSON.stringify(filterPositive));
  }, [filterPositive]);

  const positiveReview = () => {
    if (filterPositive === false) {
      return filteredReviews;
    }
    return positiveReviews;
  };

  return (
    <div className={styles.reviewsContent}>
      {authUser && (
        <div className={styles.reviewsFormButton}>
          <Form text={text} setText={setText} />
          <div className={styles.appraisal}>
            <Likes setPositive={setPositive} positive={positive} />
          </div>
          <div>
            <ButtonAddReview
              positive={positive}
              setPositive={setPositive}
              text={text}
              setText={setText}
              id={id}
            />
          </div>
        </div>
      )}

      <div>
        <AllAndPositiveButtons
          setFilterPositive={setFilterPositive}
          filterPositive={filterPositive}
        />
      </div>
      <div className={styles.reviews}>
        <div>
          {positiveReview().map((review) => {
            return <Review review={review} userId={userId} key={review.id} />;
          })}
        </div>
        {!authUser && (
          <div>
            <Link to="/auth" style={{ fontWeight: 'bold', color: 'black' }}>
              Войдите
            </Link>
            , чтобы оставить отзыв
          </div>
        )}
      </div>
    </div>
  );
}

export default Reviews;
