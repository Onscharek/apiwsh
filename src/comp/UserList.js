import React, { useEffect, useState } from 'react';
 import axios from 'axios';
import UserCard from './UserCard';

const UserList = () => {
                // initial state
  const [users, setUsers] = useState([])
                //  use effect
useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
       .then((res)=>setUsers(res.data))
       .catch ((err)=>console.log(err));
},[]);


  return (
    <div className='cli'>
{users.map((elem)=>(<UserCard user={elem} key={elem.id}/>))}
    </div>
  );
  
};

export default UserList