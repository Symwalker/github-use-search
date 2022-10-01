import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
// import bgImg from "../images/bgImg.jpg"
import eror from "../images/eror.png"

function Github() {
    const [inputValue, setInputValue] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const [error, setError] = useState(false);
    const [callApi, setCallApi] = useState(false);

    useEffect(()=>{
        axios
        .get(` https://api.github.com/users/${inputValue ? inputValue : "hm-talha"} `)
        .then((res) => {
            setUserInfo(res.data)
            setError(false)
        })
        .catch((err) => {
            console.log(err);
            setError(true)

        })
    },[callApi])
    const handleForm = (e) => {
        e.preventDefault();
        console.log("inputValue", inputValue);

        if (!inputValue) {
            return alert("Field is empty")

        }
        setCallApi(!callApi)
        // axios
        //     .get(` https://api.github.com/users/${inputValue}`)
        //     .then((res) => {
        //         setUserInfo(res.data)
        //         setError(false)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         setError(true)

        //     })

        

    }
    console.log("userInfo", userInfo);


    const clear= ()=>{
        setInputValue("")
    }

    return (
        <div className='dabba1 '>
            <div className="dabba2 container-fluid text-center ">
                <h1 className='text-white pt-2 '>GITHUB USER SEARCH</h1>
            <form onSubmit={handleForm} >
                <input
                className=' mt-2 inputFiled '
                    value={inputValue}
                    type="text"
                    onChange={(e) => {
                        setInputValue(e.target.value)
                    }
                    }
                    placeholder="Search Username..."
                />
            </form>
            <div className="btn btn-primary clearBtn" onClick={clear}>clear search</div>
            </div>
            {error === false ? (
                <div className="dabba3 container mt-5 mb-5">
                    <div className="row ">
                        <div className="col-md-6 box1 ">
                     <img src={userInfo ? userInfo.avatar_url : "Profile1"} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-6 box2 ">
                    <ul>
                        <li>Name: {userInfo ? userInfo.name : "User Name"}</li>
                        <li>Bio: {userInfo ? userInfo.bio : "User Bio"}</li>
                        <li>Followers: {userInfo ? userInfo.followers : "User Followers"}</li>
                        <li>following: {userInfo ? userInfo.following : "User Followers"}</li>
                        <li>Public_Repo: {userInfo ? userInfo.public_repos : "User Public Repos"}</li>
                    </ul>
                        </div>
                    </div>
                </div>

            ) : (
               <img src={eror} alt="" />
               )}
        </div>
        // <div>
        //     <div className="container-fluid  bg-dark">
        //         <h1 className='text-white text-center'>GITHUB USER SEARCH </h1>
        //         <div className="container">
        //             <div className='inputBox'>
        //                 <form>
        //                     <input
        //                         type="text"
        //                         placeholder="Search Username..."
        //                     />
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Github

