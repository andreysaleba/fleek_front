import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authorize } from '../../redux/actions/userDataActions';
import {
  getErrorMessage,
  getLoadingState,
} from '../../redux/selectors/userDataSelectors';

function Login() {
  const loading = useSelector(getLoadingState);
  const error = useSelector(getErrorMessage);

  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    dispatch(authorize(email, password));
  };

  return (
    <div className="container">
      <form className={'form'} onSubmit={onSubmit}>
        <div className="input_container">
          <input type="email" name="email" />
        </div>
        <div className="input_container">
          <input type="password" name="password" />
        </div>
        <div className="input_container">
          <button type="submit" disabled={loading}>
            Submit
          </button>
        </div>
        <div className="input_container error-message">{error}</div>
      </form>
    </div>
  );
}

export default Login;
