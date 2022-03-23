
import axios from 'axios';
import React, { useEffect } from 'react';
import {useState} from 'react';

const UsersForm = ({selected, getUsers, setSelected}) => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");

const clean = ()=>{
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setBirthday("");
}

const submit =(e)=>{
    e.preventDefault();
   const userSelected ={
    first_name:name,
    last_name:lastName,
    email,
    password,
    birthday
   }
   if(selected){
      
    axios.put(`https://users-crud1.herokuapp.com/users/${selected.id}/`, userSelected)
    .then(()=>{
        getUsers();
        setSelected("");
        clean();
    })
   }else{
       console.log("ingresando nuevo usuario...")
       axios.post(`https://users-crud1.herokuapp.com/users/`, userSelected)
       .then(()=>{
           getUsers();
           clean();
       })
       .catch((error) => console.log(error.response));
   }
}

useEffect(()=>{
    if(selected){
        setName(selected.first_name);
        setLastName(selected.last_name);
        setEmail(selected.email);
        setPassword(selected.password);
        setBirthday(selected.birthday);
    }
},[selected])

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    />
                </div>

                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />
                </div>
                <div>
                    <label htmlFor="birthday">Birthday:</label>
                    <input
                    type="text"
                    onChange={(e) => setBirthday(e.target.value)}
                    value={birthday}
                    />
                </div>
                
                <button>Submit</button>
                <button onClick={() => clean()} type="button">
                    Clear
                </button>
                </form>
        </div>
    );
};

export default UsersForm;