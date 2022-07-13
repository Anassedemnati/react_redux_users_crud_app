import React,{useState} from 'react'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { editUser, getUser } from '../redux/actions';
import { Alert } from 'react-bootstrap';


const EditUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id}=useParams();
   
    const user = useSelector(state=>state.data.user)
    const {loading,error} = useSelector(state=>state.data)
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [address,setAddress]= useState('');
    const [contact,setContact]= useState('');
    const [message,setMessage] = useState(null);


    useEffect(()=>{ 
        dispatch(getUser(id))
    
    },[dispatch,id])
    useEffect(()=>{
    if(user){
        setName(user.name)
        setEmail(user.email)
        setAddress(user.address)
        setContact(user.contact)
    }
},[user])

const submitHandler =(e)=>{
    e.preventDefault()
    if(!name||!email||!address||!contact){
        setMessage('Please fill all the fields')
        return;
    }
    dispatch(editUser({id,name,email,address,contact}))
    setMessage(null);
    navigate('/');

}

  return (
    <div>
        <div className="container">
             <div className="row">
                    <div className="col-sm">
                        
                  
                        <div className="card col-md-6 mt-3 offset-3">
                        <div className="card-header">Edit User</div>
                        <div className="card-body">
                        {loading?(<h3>Loading ...</h3>):error?(<Alert variant='danger'>{error}</Alert>):(
                            <form onSubmit={submitHandler}>
                            <div className="form-group mb-3">
                                <label >name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} value={name || ''}/>
                               
                            </div>
                            <div className="form-group mb-3">
                                <label >address</label>
                                <input type="text" className="form-control" id="address" placeholder="address" onChange={(e)=>setAddress(e.target.value)} value={address || ''}/>
                            </div>
                            <div className="form-group mb-3">
                                <label>email</label>
                                <input type="email" className="form-control" id="email" placeholder="email@exmple.com" onChange={(e)=>setEmail(e.target.value)} value={email || ''}/>
                            </div>
                            <div className="form-group mb-3">
                                <label >contact</label>
                                <input type="text" className="form-control" id="contact" placeholder="contact" onChange={(e)=>setContact(e.target.value)} value={contact || ''}/>
                            </div>
                            {message &&
                             <div className="alert alert-danger">{message}</div>}
                             <button type="submit"  className="btn btn-primary">Update</button>
                            
                        </form>
                        )}
                        
                            
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default EditUser