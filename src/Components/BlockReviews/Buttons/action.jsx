export const addReview = (text, userId, id, positive,authUserId) => {
  return (dispatch) => {
    dispatch({ type: 'review/add/start' });
    fetch(`/reviews`, {
      method: 'POST',
      body: JSON.stringify({
        userId: authUserId,
        cafeId: id,
        text: text,
        positive: positive,
        date: new Date().toLocaleDateString(),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      dispatch({
        type: 'reviews/add',
        payload: {
          userId: authUserId,
          cafeId: id,
          text: text,
          positive: positive,
          date: new Date().toLocaleDateString(),
        },
      });
    });
  };
};
