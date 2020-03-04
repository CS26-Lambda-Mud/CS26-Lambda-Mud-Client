import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login-style.css"
// login component
const Game = () => {
    const [data,setData] = useState([{}])
     
    useEffect(() => {
        axios
    .get('https://lambda-mud-test.herokuapp.com/api/adv/init/',{
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
    "Content-Type": "application/json"})
    .then(res =>{
        console.log("get init res",res)
        setData([res.data])
        console.log(data)
    })
      },[]);
    
    // axios
    // .get('https://lambda-mud-test.herokuapp.com/api/adv/init/',{
    //     headers: { Authorization: `Token ${localStorage.getItem("token")}` },
    // "Content-Type": "application/json"})
    // .then(res =>{
    //     console.log("get init res",res)
    //     setData([...data,res.data])
    //     console.log(data)
    // })
        
    
    
    return(
        <h1>GAMETIME</h1>
    )
}


export default Game