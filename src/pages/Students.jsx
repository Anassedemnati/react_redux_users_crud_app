import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteStudent, getStudents } from '../redux/students-actions';
import { Alert } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


const Students = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {students,loading,error} = useSelector(state => state.studentData);


    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch]);

  
    
    const deletestudentHandler = (id) => {
        if (window.confirm('are you sure to delete student ?')) {
            dispatch(deleteStudent(id));
        
        }
    }

  return (
    <div>
         <div className="container">
             <div className="row">
                    <div className="col-sm">
                    <h2>List Students</h2>
                    <button type="button" class="btn btn-primary mb-3" onClick={()=>navigate('/students/addstudent')} >Add Student</button>
                    {loading?(<h3>Loading ...</h3>):error?(<Alert variant='danger'>{error}</Alert>):(
                         <Table striped bordered hover>
                         <thead>
                             <tr>
                             <th>Name</th>
                             <th>Graduated</th>
                             <th>gender</th>
                             <th>age</th>
                             <th>Action</th>
                             
                             </tr>
                         </thead>
                         <tbody>
                            {students&& students.map(student=>(
                              <tr key={student.id}>
                              <td>{student.name}</td>
                              <td>{student.isGraduated?"YES":"NO"}</td>
                              <td>{student.gender}</td>
                              <td>{student.age}</td>
                              <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" className="btn btn-danger ms-2" onClick={()=>deletestudentHandler(student.id)}>Delete</button>
                                    <button type="button" className="btn btn-warning ms-2" onClick={()=>navigate(`/editstudent/${student.id}`)}>Update</button>
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

export default Students