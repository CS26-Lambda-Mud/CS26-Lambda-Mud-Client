import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// registration component
const Register = (props) => {
    const [form,setForm] = useState({username:"",password1:"",password2:""})
    console.log(form)
    console.log(props)
    const handleChanges = e => {
        setForm({...form, [e.target.name] : e.target.value})
    };
// https://cs26-django-backend.herokuapp.com/api/registration/
    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post('https://lambda-mud-test.herokuapp.com/api/registration/',form)
        .then(res =>{
            console.log("reg post res",res)
            localStorage.setItem("token",res.data.key )
        })
        props.history.push('/')
        
        
    }
    return(
        <form onSubmit={handleSubmit} className = "register-form">
            <div>
                <label>UserName: </label>
                <input onChange={handleChanges} value={form.username} type="text" name="username" required></input>
            </div>
            <div>
                <label>Password: </label>
                <input onChange={handleChanges} value={form.password1} type="password" name="password1" required></input>
            </div>
            <div>
                <label>Confirm password: </label>
                <input onChange={handleChanges} value={form.password2} type="password" name="password2" required></input>
            </div>
            <div>
            <button>Register!</button>
            </div>
            <div>
                <Link to="/">Need to login?</Link>
            </div>
        </form>
    )
}


export default Register