import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [dataIdToDelete, setDataIdToDelete] = useState('');

  useEffect(() => {
    // Fetch data from backend API when component mounts
    fetchData();
  }, []);

  const fetchData = () => {
    // Fetch data from backend API
    axios.get('https://api.example.com/data')
      .then(response => {
        setData(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleDelete = () => {
    // Send DELETE request to backend API
    axios.delete(`https://api.example.com/data/${dataIdToDelete}`)
      .then(response => {
        console.log('Delete successful:', response);
        // Filter out the deleted item from the data array
        setData(data.filter(item => item.id !== dataIdToDelete));
        setDataIdToDelete(''); // Clear input field after successful deletion
      })
      .catch(error => {
        console.error('Error deleting data:', error);
        // Handle error, show error message, etc.
      });
  };

  return (
    <div>
      <h1>Delete Data</h1>
      <input
        type="text"
        value={dataIdToDelete}
        onChange={e => setDataIdToDelete(e.target.value)}
        placeholder="Enter data ID to delete"
      />
      <button onClick={handleDelete}>Delete</button>

      <h2>Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li> // Assuming each item has an ID and name property
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
