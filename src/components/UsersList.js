import axios from 'axios';
import React from 'react';

const UsersList = ({users, setSelected, getUsers}) => {

    const onDelete = (id)=>{
       axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
       .then(res=>{getUsers()});
    }
    
    return (
        <div>
             {users.map(user=>(
       <div key={user.id}>
         <ul >
           <li>Name: {user.first_name}</li>
           <li>Last name: {user.last_name}</li>
           <li> Email: {user.email}</li>
           <li>Birthday: {user.birthday}</li>
         </ul>
         <button onClick={() => {onDelete(user.id)}}>Delete  </button>
         <button onClick={()=>{setSelected(user)}}>Edit</button>
       </div>
      
     ))}
        </div>
    );
};

export default UsersList;