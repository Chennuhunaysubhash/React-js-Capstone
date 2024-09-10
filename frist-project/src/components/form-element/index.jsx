/* eslint-disable no-unused-vars */
import { useState } from "react";
import './FormComponent.css';

function FormComponent(){
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [formData, setFormData] = useState({
        name : '',
        email : ''
    });

function handleInputChange(event){
    //console.log(event);
    const {value} = event.target;
    setNameValue(value);
    //console.log(nameValue);
}
function handleEmailChange(event){
    const {value} = event.target;
    setEmailValue(value);
}

function handleOnChange(event){
    const {name,value} = event.target;
    setFormData({
        ...formData,
        [name] : value
    })
}
    
function handleSumbit(event){
    event.preventDefault();
    console.log(nameValue,emailValue);
    setNameValue('');
    setEmailValue('');

    console.log(formData);
    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
    setFormData({
        name:'',
        email:''
    })
    
}
    return(
        <div className="form-container">
            <h1>Form</h1>
           <form onSubmit={handleSumbit}>
           <input
            value={formData.name}
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={handleOnChange}
            /*onChange={(event)=>setFormData({
                ...formData,
                [event.target.name]: event.target.value
            })}*/
            />

            <input
            value={formData.email}
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleOnChange}
            /*onChange={(event)=>setFormData({
                ...formData,
                [event.target.name]: event.target.value
            })}*/
            />
            <button type="submit">Submit</button>
           </form>
        </div>
    );
}
export default FormComponent;