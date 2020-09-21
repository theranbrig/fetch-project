import React from 'react';

const ListItem = ({ item, list }) => {
  return (
    <li
      className={`list-item bg-gray-${
        11 - list * 2
      }00 rounded-full flex flex-col justify-center items-center text-center text-blue-${
        list * 2 + 1
      }00 m-2 hover:transform hover:scale-125 border-2 border-white text-3xl shadow-md hover:shadow-xl font-fancy leading-none`}>
      <span className='block font-sans text-xs'>Item</span>
      {item.name.slice(4)}
    </li>
  );
};

export default ListItem;
