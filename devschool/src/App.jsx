import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'

function App() {

  var [users, setUsers] = useState(null);

  async function getUser() {
    try {
      const response = await axios.get('https://65f45089f54db27bc021609a.mockapi.io/users');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchDataUsers() {
      const users = await getUser();
      setUsers(users);
    }

    fetchDataUsers();
  }, [])

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
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            ) :
            null
            }
            </div>
          </div>
          


          <div className="col-6" style={{ border: '1px solid black'}}>
            <h2>Form</h2>
            <form>
              <div className="form-group">
                <label>First Name</label>
                <input 
                  type="text" 
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default App
