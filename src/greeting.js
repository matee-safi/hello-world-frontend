import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchGreeting } from './redux/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchGreeting());
  }, [dispatch]);

  const data = useSelector((state) => state.greetings.greeting);
  return (
    <div>
      <h1>RANDOM GREETING FROM API</h1>
      <p className="greeting">{data}</p>
    </div>
  );
};

export default Greeting;
