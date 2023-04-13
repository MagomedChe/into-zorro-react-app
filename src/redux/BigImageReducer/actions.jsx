import { serverUrl } from '../../serverUrl';

export const loadBigImage = () => {
  return (dispatch) => {
    dispatch({ type: 'image/load/start' });

    fetch(`${serverUrl}/bigImages`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'image/load/success',
          payload: json,
        });
      });
  };
};
