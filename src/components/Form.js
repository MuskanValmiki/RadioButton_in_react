import React,{useState} from 'react';
import '../App.css';

function Form(){
    const [formData,setFormData] = useState({isAgree:false,gender:"Female"})
    const handleChange=event=>{
        const target=event.target
        const name=target.name
        const value=target.type==="checkbox" ? target.checked : target.value
        setFormData({
            ...formData,
            [name]:value
    })
    }
    return(
        <form id='main'>
            <div>
                <label>Female</label>
                <input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender==="Female"}/>
                <label>Male</label>
                <input type="radio" name="gender" value="Male" onChange={handleChange} checkedd={formData.gender==="Male"}/>
            </div>
            <div>
                <input type="checkbox" name="isAgree" checked={formData.isAgree} onChange={handleChange}/>
                <label>Are you agree ?</label>
            </div>
            <h1>Gender:{formData.gender}</h1>
            <p>is Agree : {formData.isAgree ? "Yes" : "No"}</p>
        </form>
    )
}

export default Form;