import { serverUrl } from '../../serverUrl';
export const loadContactInfo = () => {
  return (dispatch) => {
    dispatch({ type: 'info/load/start' });

    fetch(`${serverUrl}/ContactInfo`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'info/load/success',
          payload: json,
        });
      });
  };
};
