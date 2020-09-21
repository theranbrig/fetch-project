import React from 'react';

export const Loader = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1 className='font-fancy text-4xl'>Loading...</h1>
    </div>
  );
};
