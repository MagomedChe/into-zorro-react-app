export const addReview = (text, userId, id, positive) => {
  return(dispatch) => {
    dispatch({type: 'review/add/start'})
    fetch(`http://localhost:8000/reviews`, {
      method: 'POST',
      body: JSON.stringify({
        userId: 1,
        cafeId: id,
        text: text,
        positive: positive,
        date: new Date().toLocaleDateString()
      }),
      headers:{
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(() => {
        dispatch({
          type: 'reviews/add',
          payload: {
            userId: 1,
            cafeId: id,
            text: text,
            positive: positive,
            date: new Date().toLocaleDateString()
          }
        })
      })
  }
}