import React, {useState, useEffect} from "react";
import TeacherService from "./TeacherService";
import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom';

export default function ViewTeacher() {
    const navigate = useNavigate();
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    let params = useParams();

    useEffect(() => {
        TeacherService.getTeacherById(params.id) 
            .then(data => {
                setFirstName(data.data.firstName);
                setLastName(data.data.lastName);
                setEmail(data.data.email);
               console.log(data)
            })        
    }, [])
    

   let returnPage = () => {
        navigate('/teachers');
    }
    
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text center"> View Teacher</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label> First Name: </label>
                                            <input placeholder={firstName} readOnly={true} className="form-control"/>
                                        </div>

                                        <div className="form-group">
                                            <label> Last Name: </label>
                                            <input placeholder={lastName} readOnly={true} className="form-control"/>
                                            </div>

                                        <div className="form-group">
                                            <label> Email: </label>
                                            <input placeholder={email} readOnly={true} className="form-control"/>
                                            </div>
                                        <br></br>
                                        <button className="btn btn-danger" onClick={returnPage} style={{marginLeft: "10px"}}>Return</button>
                                    </form>
                                    <br></br><br></br>
                                     <img src={"https://i.pinimg.com/originals/a3/08/40/a30840e31bfa5b2c9e7a9581a162ba8d.jpg"} alt='mascot' height='25%' width='20%' />    
                                </div>
                            </div>
                        
                        </div>
                    
                    </div>
            </div>
        )
}
