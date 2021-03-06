import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login-style.css"
// login component
const Login = (props) => {
    const [form,setForm] = useState({username:"",password:""})
    console.log(form)
    const handleChanges = e => {
        setForm({...form, [e.target.name] : e.target.value})
    };
    // https://cs26-django-backend.herokuapp.com/api/login/
    const handleSubmit = e => {
        e.preventDefault();
        axios
    .post('https://lambda-mud-test.herokuapp.com/api/login/',form)
    .then(res =>{
        console.log("login post res",res)
        localStorage.setItem("token",res.data.key )
    })
    props.history.push('/game')
        
    }
    
    return(
        <form onSubmit={handleSubmit} className="login-form">
            <div>
                <label>Username: </label>
                <input onChange={handleChanges} type="text" name="username" value={form.username} required></input>
            </div>
            <div>
                <label>Password: </label>
                <input onChange={handleChanges} type="password" name="password" value={form.password} required></input>
            </div>
            <div>
                <button>Login!</button>
            </div>
            <div>
                <Link to="/register">Need to Register?</Link>
            </div>
            
        </form>
    )
}


export default Login