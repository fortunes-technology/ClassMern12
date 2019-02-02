import axios from 'axios';


// Create Contract
export const createContract = (contractData, history) => dispatch => {
    axios
      .post('/api/contract', contractData)
      .then(res => history.push('/dashboard'))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };