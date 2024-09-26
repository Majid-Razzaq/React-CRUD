import { useEffect } from "react";
import Header from "../common/Header"
import { useForm } from "react-hook-form"
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = () => {

  const {register,handleSubmit,reset, formState: { errors },} = useForm();
  const navigate = useNavigate();
  const params = useParams();
  

  const formSubmit = async (data) => {

    const res = await fetch('http://localhost:3000/users/'+params.id,{
        method:'PUT',
        headers:{
          'Content-type' : 'application/json',
        },
        body: JSON.stringify(data)
    });

    toast("User updated successfully.");
    navigate('/users');
  }

  const fetchUser = async () => {
      const res = await fetch('http://localhost:3000/users/'+params.id);
      const data = await res.json();
      reset(data);
  }

  useEffect(() => {
      fetchUser();
  },[]);

    return (
      <>
      <Header />
      <div className="container">
        <div className="row py-4">
              <div className="col-md-6">
                <h3>Users / Edit</h3>
              </div>
              <div className="col-md-6 text-end">
                <Link to="/users" className="btn btn-primary">Back</Link>
              </div>
          </div> 
        <div className="card border-0 shadow p-3 my-5">
          <form onSubmit={handleSubmit(formSubmit)}>
              <div className="mb-3">
                <label>Name:</label>
                <input {...register('name',{required: true})} type="text" className={`form-control ${errors.name && 'is-invalid'}`} placeholder="Enter Name" />
                {errors.name && <p className="invalid-feedback">This field is required</p>}
              </div>

              <div className="mb-3">
                <label>Email:</label>
                <input {...register('email',
                  {
                    required: true,
                    pattern:{
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address',
                    }

                  })} type="text" className={`form-control ${errors.email && 'is-invalid'}`} placeholder="Enter Email" />
                {errors.email && <p className="invalid-feedback">{errors.email?.message}</p>}
              </div>

              <div className="mb-3">
                <label>Mobile:</label>
                <input {...register('mobile',{required: true})} type="text" className={`form-control ${errors.mobile && 'is-invalid'}`} placeholder="Enter Mobile" />
                {errors.mobile && <p className="invalid-feedback">This field is required</p>}
              </div>

              <button className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
      </>
  
    )
  }
  
  export default EditUser
  