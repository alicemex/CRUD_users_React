
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';


function App() {

  const [users,setUsers]=useState([]);
  const [selected, setSelected] = useState("")

  const getUsers=()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then((res)=>setUsers(res.data));
  }


useEffect(()=>{
  axios.get("https://users-crud1.herokuapp.com/users/")
  .then(res=>setUsers(res.data));
},[])

  return (
    <div className="App">
   <div>
   <UsersForm
    setSelected={setSelected}
    selected = {selected}
    getUsers ={getUsers}
    ></UsersForm>
    <UsersList 
    getUsers={getUsers}
    setSelected={setSelected}
    users ={users}
    ></UsersList>
    
   </div>
      
    </div>
  );
}

export default App;
