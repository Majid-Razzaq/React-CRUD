import { useEffect, useState } from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";
import { set } from "react-hook-form";
import { toast } from "react-toastify";

const ListUsers = () => {

    const [users, setUser] = useState([]);

    const fetchUser = async () => {
      const res = await fetch('http://localhost:3000/users');
      const data = await res.json();
      setUser(data);
    }

    // delete user method
    const deleteUser = async (id) => {
      if(window.confirm("Are you sure you want to delete?")){
          await fetch('http://localhost:3000/users/'+id,{
            method: 'DELETE',
          });

          const newUsers = users.filter((user) => user.id !== id);
          setUser(newUsers);

          toast("User deleted successfully.");
      }

 
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
                users.map((user) => {
                  return(
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>
                        <Link to={`/users/edit/${user.id}`} className="btn btn-primary">Edit</Link>
                        <Link onClick={() => deleteUser(user.id)} className="btn btn-danger ms-2">Delete</Link>
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
  