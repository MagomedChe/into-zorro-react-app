import { serverUrl } from '../../serverUrl';

export const loadReviews = () => {
  return (dispatch) => {
    dispatch({ type: 'reviews/load/start' });
    fetch(`${serverUrl}/reviews`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'reviews/load/success',
          payload: json,
        });
      });
  };
};
