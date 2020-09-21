import './styles/tailwind.css';

import React, { useEffect, useState } from 'react';

import Error from './components/Error';
import List from './components/List';
import Loader from './components/Loader';

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

  if (error) return <Error error={error} />;

  return (
    <div>
      <h1 className='font-fancy text-4xl bg-gray-400 text-blue-800 text-center py-4 fixed top-0 w-full'>
        Theran Brigowatz Fetch Project
      </h1>
      <div
        className={`grid grid-rows-${filteredData.length || 1} lg:grid-cols-${
          filteredData.length || 1
        } lg:grid-rows-none pt-20`}>
        {filteredData.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
}

export default App;
