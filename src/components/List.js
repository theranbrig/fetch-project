import ListItem from './ListItem';
import React from 'react';

const List = ({ list }) => {
  console.log(list);
  return (
    <div className={` bg-gray-${list.id * 2 + 1}00 p-4`}>
      <h2 className={`text-4xl text-blue-${11 - list.id * 2}00 list-title text-center font-fancy`}>
        List {list.id} - ({list.items.length} Items)
      </h2>
      <ul className='flex flex-wrap flex-row items-center justify-center'>
        {list.items.map((item) => (
          <ListItem key={item.id} item={item} list={list.id} />
        ))}
      </ul>
    </div>
  );
};

export default List;
