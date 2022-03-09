import React, {useState, useEffect} from 'react';
import TeacherService from "./TeacherService";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ListTeacher() {
    const navigate = useNavigate();
    // const[firstName, setFirstName] = useState('');
    // const[lastName, setLastName] = useState('');
    // const[email, setEmail] = useState('');
    const[teachers, setAllTeachers] = useState([]);

    function updateTeacher(id){
        navigate(`/update-teachers/${id}`);
    }

    function addTeacher(){
        navigate('/add-teachers');
    }

    function deleteTeacher(id){
        TeacherService.deleteTeacher(id).then( response => {
            setAllTeachers({teachers: teachers.filter(teacher => teacher.id !== id)});
           
        })
    }

    function viewTeacher(id){
        navigate(`/view-teacher/${id}`);
    }

    useEffect(() => {
        TeacherService.getTeachers() 
            .then(data => {
                setAllTeachers(data.data)
                console.log(data)
            })        
    }, [])
            

        return(
            <div>
                <h2 className="text-center">Teacher List:</h2>
                <Link to='/add-teachers'>
                 <button className="btn btn-primary" onClick={addTeacher} style={{fontWeight: 'bold', fontFamily: 'monospace'}}>Add Teacher</button>
                 </Link>
                 <img src={"https://i.pinimg.com/originals/a3/08/40/a30840e31bfa5b2c9e7a9581a162ba8d.jpg"} alt='mascot' height='8%' width='12%' style={{marginLeft: '450px'}} />
                  <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                teachers.map(
                                    teacher => 
                                        <tr key={teacher.id}>
                                            <td>{teacher.id}</td>
                                            <td>{teacher.firstName}</td>
                                            <td>{teacher.lastName}</td>
                                            <td>{teacher.email}</td>
                                            <td>
                                                <Link to={`/view-teacher/${teacher.id}`}>
                                                <button onClick={() => viewTeacher(teacher.id)} className="btn btn-info" style={{fontWeight: 'bold', fontFamily: 'monospace', marginRight: '10px'}}>View Teacher</button>
                                                    </Link>
                                                <Link to={`/update-teachers/${teacher.id}`}>
                                                <button onClick={() => updateTeacher(teacher.id)} className="btn btn-info" style={{fontWeight: 'bold', fontFamily: 'monospace'}}>Update Teacher</button>
                                                </Link>
                                                <Link to='/teachers'>
                                                <button onClick={() => deleteTeacher(teacher.id)} className="btn btn-danger" style={{fontWeight: 'bold', fontFamily: 'monospace', marginLeft: "10px"}}>Delete Teacher</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    
                                )
                            }
                        </tbody>
                     </table>
                    
                </div>

            </div>
        )
    
}
