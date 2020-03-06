import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Game-Style.css"
// Game component
const Game = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        axios
    .get('https://lambda-mud-test.herokuapp.com/api/adv/init/',{
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
    "Content-Type": "application/json"})
    .then(res =>{
        console.log("get init res",res)
        setData(res.data)
        
    })
      },[]);
    
    function Onpress(direction){
        axios
    .post('https://lambda-mud-test.herokuapp.com/api/adv/move/',direction,{
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
    "Content-Type": "application/json"})
    .then(res =>{
        console.log("Onpress post res",res)
        setData(res.data)
    })
    }
    
    
    console.log(data)
    return(
        
        <div>
            <h1>GAMETIME</h1>
            <div>
                <p>Hello {data.name}!</p>
                <p>You are at the {data.title}</p>
                <p>{data.description}</p>
            </div>
            <div>
                <button onClick={()=> {Onpress({"direction":"w"})}}>◀</button>
                <button onClick={()=> {Onpress({"direction":"n"})}}>⬆</button>
                <button onClick={()=> {Onpress({"direction":"e"})}}>▶</button>
            </div>
            <div>
                <button onClick={()=> {Onpress({"direction":"s"})}}>⬇</button>
            </div>
        </div>
    )
}


export default Game