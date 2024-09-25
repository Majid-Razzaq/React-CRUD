import { useForm } from "react-hook-form"


const CreateUser = () => {

  const {register,handleSubmit,watch, formState: { errors },} = useForm();
  const formSubmit = (data) => {
    console.log(data);
    
  }

  return (
    <>
      <div className="bg-dark shadow">
        <div className="container">
            <h2 className="h1 text-white py-3">React CRUD</h2>
        </div>
      </div>

      <div className="container">
        <div className="card border-0 shadow p-3 my-5">
          <form onSubmit={handleSubmit(formSubmit)}>
              <div className="mb-3">
                <label>Name:</label>
                <input {...register('name',{required: true})} type="text" className={`form-control ${errors.name && 'is-invalid'}`} placeholder="Enter Name" />
                {errors.name && <p className="invalid-feedback">This field is required</p>}
              </div>

              <div className="mb-3">
                <label>Email:</label>
                <input {...register('email',{required: true})} type="text" className={`form-control ${errors.email && 'is-invalid'}`} placeholder="Enter Email" />
                {errors.email && <p className="invalid-feedback">This field is required</p>}
              </div>

              <div className="mb-3">
                <label>Mobile:</label>
                <input {...register('mobile',{required: true})} type="text" className={`form-control ${errors.mobile && 'is-invalid'}`} placeholder="Enter Mobile" />
                {errors.mobile && <p className="invalid-feedback">This field is required</p>}
              </div>

              <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateUser
