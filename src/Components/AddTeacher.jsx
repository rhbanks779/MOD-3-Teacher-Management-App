import React, {useState} from "react";
import TeacherService from "./TeacherService";
import { useNavigate } from "react-router-dom";

export default function AddTeacher(){
    const navigate = useNavigate();
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
       
    const saveTeacher = (e) => {
        e.preventDefault();
        let teacher = {
          
            firstName: firstName,
            lastName : lastName,
            email: email,
        };
        console.log(teacher);
        TeacherService.addTeacher(teacher).then(res => {
            navigate('/teachers');
        }).catch(error => {
            console.log("Unable to save record.");
        })
        
    }

    const cancel= () => {
        navigate('/teachers');
    };

    return(
        <div>
                 <div className="container">
                     <div className="row">
                         <div className="card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text center"> Add Teacher</h3>
                                 <div className="card-body">
                                     <form>
                                         <div className="form-group">
                                             <label> First Name: </label>
                                             <input placeholder="First Name" name="firstName" className="form-control"
                                             value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                             </div>

                                         <div className="form-group">
                                             <label> Last Name: </label>
                                             <input placeholder="Last Name" name="lastName" className="form-control" 
                                             value={lastName} onChange={(e) => setLastName(e.target.value)}/>                                           
                                             </div>

                                         <div className="form-group">
                                             <label> Email: </label>
                                             <input placeholder="Email" name="email" className="form-control"
                                             value={email} onChange={(e) => setEmail(e.target.value)}/>
                                             </div>
                                             <br></br>
                                         <button className="btn btn-success" onClick={saveTeacher}>Save</button>
                                         <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
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
