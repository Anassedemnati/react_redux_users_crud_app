import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name,setName]= useState('');
    const [gender,setGender]=useState('');
    const [age,setAge]= useState(0);
    const [isGraduated,setIsGraduated]= useState(false);

    const [message,setMessage] = useState(null);
    const submitHandler =(e)=>{
        e.preventDefault()
       if (!name||!gender||!age) {
        setMessage('Please fill all the fields')
        return;
       }
       console.log({name,gender,courses:[],age,isGraduated})
        //navigate('/students');
    
    }
  return (
    <>
         <div className="container">
             <div className="row">
                    <div className="col-sm">
                    <div className="card col-md-6 mt-3 offset-3">
                        <div className="card-header">New User</div>
                        <div className="card-body">
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <label >name</label>
                                <input type="text" 
                                    className="form-control mb-3" 
                                    aria-describedby="name" 
                                    placeholder="Enter name" 
                                    required
                                    onChange={(e)=>setName(e.target.value)} 
                                    value={name}
                                />
                                <div className="input-group mb-3">
                                <label className="input-group-text" >gender</label>
                                <select className="form-select" value={gender} onChange={(e)=>setGender(e.target.value)}  >
                                    <option defaultValue>Choose...</option>
                                    <option value="M">male</option>
                                    <option value="F">female</option>
                                </select>
                                </div>
                                {/* <div className="form-group ">
                                <label >gender</label>
                                <input type="text" 
                                    className="form-control mb-3" 
                                    aria-describedby="gender" 
                                    placeholder="Enter gender" 
                                    required
                                    onChange={(e)=>setGender(e.target.value)} 
                                    value={gender}
                                />
                                </div> */}
                                <div className="form-group ">
                                <label >age</label>
                                <input type="number" 
                                    className="form-control mb-3" 
                                    aria-describedby="gender" 
                                    placeholder="Enter gender" 
                                    required
                                    onChange={(e)=>setAge(e.target.value)} 
                                    value={age}
                                />
                                </div>
                                <div className="form-check">
                                <input className="form-check-input"
                                 type="checkbox" 
                                 value={isGraduated} 
                                 onChange={(e)=>setIsGraduated(e.target.checked)}
                                 />
                                <label className="form-check-label">
                                    Graduated
                                </label>
                                </div>
                                {message &&
                             <div className="alert alert-danger">{message}</div>}
                             <button type="submit"  className="btn btn-primary col-12">Add</button>
                            </div>

                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        

    </>
  )
}

export default AddStudent