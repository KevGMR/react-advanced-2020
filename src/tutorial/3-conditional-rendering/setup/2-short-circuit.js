import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'Something Proper';
  // const secondValue = text && 'Loaded In';

  return <>
    {/* <h2>{firstValue}</h2>
    <h1>value: { secondValue }</h1> */}
    <h1>{text || 'Hey You'}</h1>
    <button className='btn' onClick={() => setIsError(!isError)} >Toggle Error</button>
    { isError && <p>Error Found...</p>}
    { isError ? <p>Error Found</p> : <p>It Works Perfectly,, No Errors</p>}
  </>
};

export default ShortCircuit;