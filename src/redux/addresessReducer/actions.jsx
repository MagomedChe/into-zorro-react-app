import { serverUrl } from '../../serverUrl';
export const loadAddress = () => {
  return (dispatch) => {
    dispatch({ type: 'addresses/load/start' });

    fetch(`${serverUrl}/addresses`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'addresses/load/success',
          payload: json,
        });
      });
  };
};
