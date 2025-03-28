import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TopUsers.css';

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-4">Top Users</h2>
      <div className="top-users">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.image} alt={user.name} />
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopUsers;
