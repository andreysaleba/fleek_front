import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  createAPIKey,
  deleteAPIKey,
  loadAPIKey,
} from '../../redux/actions/userDataActions';
import { getUserAPIKey } from '../../redux/selectors/userDataSelectors';

const APIKeys = () => {
  const apiKey = useSelector(getUserAPIKey);

  const dispatch = useDispatch();

  const createOrDeleteKey = () =>
    apiKey ? dispatch(deleteAPIKey()) : dispatch(createAPIKey());

  useEffect(() => {
    dispatch(loadAPIKey());
  }, [dispatch]);

  return (
    <div className="api-keys__wrapper">
      <div className="form">
        {apiKey && <div className="input_container">{apiKey}</div>}
        <div className="input_container">
          <button type="button" onClick={createOrDeleteKey}>
            {apiKey ? 'Delete API Key' : 'Create new API Key'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default APIKeys;
