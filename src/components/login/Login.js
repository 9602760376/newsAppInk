import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
// import backgroudimage from '.././../assets/images/arash-FTSBoobq74s-unsplash.jpg'
const Login = () => {
    const [email,setEmail]=useState ('')
    const [password,setPassword]=useState ('')
     
    const login =async ()=>{
        await axios.get(`https://jsonplaceholder.typicode.com/comments`).then((response)=>{})
    }
    return (
        <div>
            <div style={{width:'100%'}}>
                <div className='backgroudimage'>
                    <h1 style={{ color: 'white', padding: '100px' }}>WelCome in <br />Login Page</h1>
                </div>
                <div className='cord' >
                    <form action="" method="post">
                        <label for="uname"><b>Username</b></label><br />
                        <input type="text" placeholder="Enter Username" name="uname" required  /><br />

                        <label for="psw"><b>Password</b></label><br />
                        <input type="password" placeholder="Enter Password" name="psw" required /><br /><br/>

                        <button type="submit" style={{width:'100%'}}>Login</button><br/><br/>
                        {/* <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label> */}


                        {/* <div class="container" style={{ backgroundColor: '#f1f1f1' }}>
                            <button type="button" class="cancelbtn">Cancel</button>
                            <span class="psw" style={{justifyItems:'end'}}>Forgot <a href="#">password?</a></span>
                        </div> */}


                    </form>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Login