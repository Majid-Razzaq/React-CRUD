import { useEffect, useState } from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";

const ListUsers = () => {

    const [users, setUser] = useState([]);

    const fetchUser = async () => {
      const res = await fetch('http://localhost:3000/users');
      const data = await res.json();
      setUser(data);
    }

    useEffect(() => {
      fetchUser();
    },[]);
    return (
      <>

      <Header/>

      <div className="container">
        <div className="row py-4">
            <div className="col-md-6">
              <h3>Users</h3>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/users/create" className="btn btn-primary">Create User</Link>
            </div>
        </div> 
        <div className="card border-0 shadow p-3">
          <table className="table table-striped">
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th width="150">Action</th>
                </tr>
            </thead>
            <tbody>
              {
                users.map((users) => {
                  return(
                    <tr>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.mobile}</td>
                    <td>
                        <Link to={`/users/edit/${users.id}`} className="btn btn-primary">Edit</Link>
                        <Link to="#" className="btn btn-danger ms-2">Delete</Link>
                    </td>
                  </tr>
                  )
                })
              }
      
            </tbody>
          </table>
        </div>
      </div>
    </>
    )
  }
  
  export default ListUsers
  