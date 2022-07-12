import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const AddUser = () => {
    const navigate = useNavigate();
    
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [address,setAddress]= useState('');
    const [contact,setContact]= useState('');
    const [message,setMessage] = useState(null);


const submitHandler =(e)=>{
    e.preventDefault()
    console.log("from ")
    console.log(name,email,address,contact)
}


  return (
    <div>
         <div className="container">
             <div className="row">
                    <div className="col-sm">
                        <div className="card col-md-6 mt-3 offset-3">
                        <div className="card-header">New User</div>
                        <div className="card-body">
                        <form onSubmit={submitHandler}>
                            <div className="form-group mb-3">
                                <label for="exampleInputEmail1">name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} value={name}/>
                               
                            </div>
                            <div className="form-group mb-3">
                                <label for="address">address</label>
                                <input type="text" className="form-control" id="address" placeholder="address" onChange={(e)=>setAddress(e.target.value)} value={address}/>
                            </div>
                            <div className="form-group mb-3">
                                <label for="address">email</label>
                                <input type="email" className="form-control" id="email" placeholder="email@exmple.com" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                            </div>
                            <div className="form-group mb-3">
                                <label for="contact">contact</label>
                                <input type="text" className="form-control" id="contact" placeholder="contact" onChange={(e)=>setContact(e.target.value)} value={contact}/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Add</button>
                            </form>
                            
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
  
export default AddUser