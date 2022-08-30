export const loadContactInfo = () => {
  return (dispatch) => {
    dispatch({ type: 'info/load/start' });

    fetch('/ContactInfo')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'info/load/success',
          payload: json,
        });
      });
  };
};
