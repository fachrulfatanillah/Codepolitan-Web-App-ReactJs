import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'

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
              users.map((user) => 
              <div className="col-md-6" key={user.id}>
                <div className="card" style={{ margin: 10}}>
                  <div className="card-body">
                  <h5 className="card-title">ID Member: {user.id}</h5>
                    <h5 className="card-title">{user.firstName}</h5>
                    <h5 className="card-title">{user.lastName}</h5>
                    <button className="btn btn-primary" onClick={()=> handleBtnEdit({'getUserId': user.id, 'getUserFirstName': user.firstName, 'getUserLastName': user.lastName})}>Edit</button>
                    <button className="btn btn-danger" onClick={() => deleteUser({'getUserId': user.id})}>Delete</button>
                  </div>
                </div>
              </div>
            ) :
            null
            }
            </div>
          </div>
          

          {editForm ? 
            <div className="col-6" style={{ border: '1px solid black'}}>
              <h2>Edit Form</h2>
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    onChange={firstNameOnChange}
                    value={firstName}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    onChange={lastNameOnChange}
                    value={lastName}
                  />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => updateUser()}>Submit</button>
              </form>
            </div> 
          :
            <div className="col-6" style={{ border: '1px solid black'}}>
              <h2>Form</h2>
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    onChange={firstNameOnChange}
                    value={firstName}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    onChange={lastNameOnChange}
                    value={lastName}
                  />
                </div>
                <button type="button" className="btn btn-primary" onClick={()=> postUser()}>Submit</button>
              </form>
            </div>
          }
        </div>
      </div>
  )
}

export default App
