export const loadReviews = () => {
  return (dispatch) => {
    dispatch({ type: 'reviews/load/start' });
    fetch(`/reviews`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'reviews/load/success',
          payload: json,
        });
      });
  };
};
