import './styles/tailwind.css';

import React, { useEffect, useState } from 'react';

import List from './components/List';
import { Loader } from './components/Loader';

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getListData = (arr) => {
    let ids = [];
    arr.forEach((item) => {
      if (!ids.some((element) => element === item.listId)) {
        ids.push(item.listId);
      }
    });
    let listData = ids
      .sort((a, b) => a - b)
      .map((id) => {
        return {
          id,
          items: [
            ...arr
              .filter((item) => item.name !== null && item.name !== '' && item.listId === id)
              .sort((a, b) => a.id - b.id),
          ],
        };
      });
    setFilteredData(listData);
  };

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/example_hiring.json')
      .then((res) => res.json())
      .then((data) => {
        getListData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  if (error)
    return (
      <div className='min-h-screen flex flex-col justify-center items-center'>
        <p className='font-fancy text-2xl'>{error}</p>
      </div>
    );

  return (
    <div className='grid grid-rows-4 lg:grid-cols-4 lg:grid-rows-none'>
      {filteredData.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </div>
  );
}

export default App;
