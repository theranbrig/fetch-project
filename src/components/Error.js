import React from 'react';

const Error = ({ error }) => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <p className='font-fancy text-2xl'>{error}</p>
    </div>
  );
};

export default Error;
