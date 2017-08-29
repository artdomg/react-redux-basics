const getTodos = () => {
  return (dispatch) => {
    dispatch({
      type: 'TODOS_LIST',
      fetching: true
    });

    return Promise.resolve([
      {
        id: 0,
        text: 'blah'
      }
    ])
    .then(todos => {
      return dispatch({
        type: 'TODOS_LIST',
        fetching: false,
        items: todos
      });
    });
  };
}

export default {
  getTodos
};
