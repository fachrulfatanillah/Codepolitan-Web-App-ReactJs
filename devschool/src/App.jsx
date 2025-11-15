import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'

import Member from './components/Members/Members'
import Form from './components/Form/Form';

function App() {

  var [users, setUsers] = useState(null);
  var [firstName, setFirstName] = useState("");
  var [lastName, setLastName] = useState("");
  var [userID, setUserID] = useState("");
  var [editForm, setEditForm] = useState(false);

  const apiLink = 'https://65f45089f54db27bc021609a.mockapi.io/users';

  async function getUser() {
    try {
      const response = await axios.get(apiLink);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function postUser() {
    try {
      const response = await axios.post(apiLink, {
        firstName: firstName,
        lastName: lastName,
      });

      console.log(response.data);
      refreshUsers();
    } catch (error) {
      console.error(error);
    }
    setFirstName("");
    setLastName("");
  }


  useEffect(() => {
    async function fetchDataUsers() {
      const users = await getUser();
      setUsers(users);
    }

    fetchDataUsers();
  }, [])

  function firstNameOnChange(event) {
    setFirstName(event.target.value);
  };

  function lastNameOnChange(event) {
    setLastName(event.target.value)
  }

  function handleBtnEdit(props) {
    setEditForm(true)
    setUserID(props.getUserId);
    setFirstName(props.getUserFirstName ?? "");
    setLastName(props.getUserLastName ?? "");
  }

  async function updateUser() {
    try {
      const response = await axios.put(`${apiLink}/${userID}`, {
        firstName: firstName,
        lastName: lastName,
      });
      
      console.log(response);
      refreshUsers();
      setEditForm(false);
    } catch (error) {
      console.log(error);
    }
    setFirstName("");
    setLastName("");
    setUserID("");
  }

  async function deleteUser(props) {
    try {
      const response = await axios.delete(`${apiLink}/${props.getUserId}`);
      console.log(response);
      refreshUsers();
    } catch (error) {
      console.log(error);
    }
  }

  async function refreshUsers() {
    try {
      const users = await getUser();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  }


  return (
      <div className="container">
        <h1>Codepolitan DevSchool</h1>
        <div className="row" >
          <div className="col-6" style={{ border: '1px solid black'}}>
            <h2>Member</h2>
            <div className="row" >
            {users != null ? 
              <Member
                members={users}
                handleBtnEdit={handleBtnEdit}
                deleteUser={deleteUser}
              />
             :
            null
            }
            </div>
          </div>
          

          {editForm ? 
            <Form 
              title={'Edit Form'}
              firstName={firstName}
              lastName={lastName}
              onChangeFirstName={firstNameOnChange}
              onChangeLastName={lastNameOnChange}
              onSubmit={updateUser}
            />
          :
            <Form 
              title={'Form'}
              firstName={firstName}
              lastName={lastName}
              onChangeFirstName={firstNameOnChange}
              onChangeLastName={lastNameOnChange}
              onSubmit={postUser}
            />
          }
        </div>
      </div>
  )
}

export default App
