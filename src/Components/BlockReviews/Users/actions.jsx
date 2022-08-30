export const loadUsers = () => {
  return (dispatch) => {
    dispatch({ type: 'users/load/start' });
    fetch('/users')
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'users/load/success',
          payload: json,
        });
      });
  };
};
