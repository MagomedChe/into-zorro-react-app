export const loadRatings = () => {
  return (dispatch) => {
    dispatch({ type: 'rating/load/start' });

    fetch('/Rating')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'rating/load/success',
          payload: json,
        });
      });
  };
};

export const postRating = (id, rating) => {
  return (dispatch) => {
    dispatch({
      type: 'rating/send/start',
    });
    fetch('/Rating', {
      method: 'POST',
      body: JSON.stringify({
        cafeId: id,
        rating: rating,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'rating/send/success',
          payload: json,
        });
      });
  };
};
