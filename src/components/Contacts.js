import React, { useEffect, useState } from 'react';
import UsersConfig from '../userConfig/UsersConfig';
import ContactForm from './ContactForm';

const Contacts = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        getUsers();
    },[])
const getUsers=async()=>{
    const data=await UsersConfig.getAllUsers();
    console.log(data.docs)
    setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}

    return (
        <div>
            <pre>{JSON.stringify(users,undefined,2)} </pre>
            <h1 className='text-center py-3 text-white mb-5 bg-secondary'>USER DETAILS CRUD OPERATION</h1>
            <div className='col-12 row ml-4 mr-4 p-5'>
            <div className='col-5'><ContactForm/></div>
            <div className='col-7'>
              

            <table class="table ">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((doc,index)=>{
        return (
            <tr key={doc.id}>
      <th scope="row">{index+1}</th>
      <td>{doc.firstName}</td>
      <td>{doc.lastName}</td>
      <td>{doc.email}</td>
      <td>{doc.mobile}</td>
      <td>{doc.address}</td>
      <td className='d-flex '>
        <button className='btn btn-success me-2' >Edit</button>
        <button className='btn btn-danger' >DELETE</button>
      </td>
    </tr>
        )
    })}
   
  </tbody>
</table>


            </div>
        </div>
        </div>
    );
};

export default Contacts;