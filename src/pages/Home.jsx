import React,{useEffect} from 'react'
import { Alert } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {useSelector,useDispatch} from 'react-redux'
import { deleteUser, loadUsers } from '../redux/actions';
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {users,loading,error} = useSelector(state=>state.data)
 
    useEffect(()=>{
            dispatch(loadUsers())
    },[dispatch])

    const deleteUserHandler = (id)=>{
        console.log(id)
            if (window.confirm('are you sure to delete user ?')) {
                dispatch(deleteUser(id))
                
            }
           
        
    }
  return (
    <div>
        <div className="container">
             <div className="row">
                    <div className="col-sm">
                    <h2>List Clients</h2>
                    <button type="button" class="btn btn-primary mb-3" onClick={()=>navigate('/adduser')}>Add user</button>
                    
                    {loading?(<h3>Loading ...</h3>):error?(<Alert variant='danger'>{error}</Alert>):(
                         <Table striped bordered hover>
                         <thead>
                             <tr>
                             <th>Name</th>
                             <th>email</th>
                             <th>Contact</th>
                             <th>Address</th>
                             <th>Action</th>
                             
                             </tr>
                         </thead>
                         <tbody>
                            {users&& users.map(user=>(
                              <tr key={user.id}>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.contact}</td>
                              <td>{user.address}</td>
                              <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" className="btn btn-danger ms-2" onClick={()=>deleteUserHandler(user.id)}>Delete</button>
                                    <button type="button" className="btn btn-warning ms-2" onClick={()=>navigate(`/edituser/${user.id}`)}>Update</button>
                                </div>
                              </td>
                          </tr>
                            ))}
                            
                         </tbody>
                 </Table>
                    )}
                   
                    </div>
            </div>
         </div>
       

    </div>
  )
}

export default Home