import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchGreetings } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetingsReducer);

  useEffect(() => {
    dispatch(fetchGreetings());

    window.scrollTo(0, 0);
  }, []);

  if (greetingsData.loading) {
    return <h2 className="text-dark">Loading...</h2>;
  }
  if (greetingsData.error) {
    return <h2 className="text-dark">{greetingsData.error}</h2>;
  }

  return (
    <div className="d-flex mt-5 flex-column align-items-center" data-testid="greetingsList">

      <button type="button" key={uuidv4()} className="col-6 mb-5 btn btn-primary btn-lg" onClick={() => dispatch(fetchGreetings())}>Get greetings</button>

      <h2 className="col m-0 mt-2">{greetingsData.greetingsDisplay}</h2>
    </div>
  );
};

export default Greeting;
