import React, { useState } from 'react'
import './Register.css';
import { auth } from './firebase.js';
import { Link, useHistory } from 'react-router-dom';
function Register() {
    const history = useHistory('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState([]);
    const [gender, setGender] = useState('');
    
    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth.user) {
                    auth.user.updateProfile({
                        displayName: firstName + "" + lastName

                    }).then((s) => {
                        history.push("/")
                    })
                }     
            })
            .catch((e) => {
                alert(e.message);
        })
    }
    return (

        <div className="logo">
            <h1>UNITE</h1>        
                <div className="register_container">
                    <center><h1> First time! Register below</h1></center>
                <form>
                    <div className="row">
                        <label>First Name: <input type="name" onChange={(e)=> setFirstName(e.target.value) } className="register_first" placeholder="text" /></label>
                        <label>&nbsp;&nbsp; Last Name: <input type="name" onChange={(e)=> setLastName(e.target.value) }className="register_last" placeholder="text" /></label> 
                    </div>
                    <center>
                        <label>&nbsp;&nbsp;&nbsp;Email ID: <input type="email" onChange={(e)=> setEmail(e.target.value) }className="register_email" placeholder="Eg: xyz@gmail.com" /></label>
                        <label>&nbsp;&nbsp;&nbsp; Password: <input type="password" onChange={(e)=> setPassword(e.target.value) }className="register_password" placeholder="@abc1234" /></label>
                    </center>
                    
                    <h5 className="register_dob">Date of Birth</h5>
                    <div className="dob">
                        <select className="register_date" onChange={(e)=> setBirthday([...birthday,e.target.value]) }>
                             <option value="Date">Date</option>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                             <option value="5">5</option>
                             <option value="6">6</option>
                             <option value="7">7</option>
                             <option value="8">8</option>
                             <option value="9">9</option>
                             <option value="10">10</option>
                             <option value="11">11</option>
                             <option value="12">12</option>
                             <option value="13">13</option>
                             <option value="14">14</option>
                             <option value="15">15</option>
                             <option value="16">16</option>
                             <option value="17">17</option>
                             <option value="18">18</option>
                             <option value="19">19</option>
                             <option value="20">20</option>
                             <option value="21">21</option>
                             <option value="22">22</option>
                             <option value="23">23</option>
                             <option value="24">24</option>
                             <option value="25">25</option>
                             <option value="26">26</option>
                             <option value="27">27</option>
                             <option value="28">28</option>
                             <option value="29">29</option>
                             <option value="30">30</option>
                             <option value="31">31</option>
                            </select>
                            <select className="register_month" onChange={(e)=> setBirthday([...birthday,e.target.value]) }>
                                <option value="Jan">Jan</option>
                                <option value="Feb">Feb</option>
                                <option value="Mar">Mar</option>
                                <option value="Apr">Apr</option>
                                <option value="May">May</option>
                                <option value="Jun">Jun</option>
                                <option value="Jul">Jul</option>
                                <option value="Aug">Aug</option>
                                <option value="Sep">Sep</option>
                                <option value="Oct">Oct</option>
                                <option value="Nov">Nov</option>
                                <option value="Dec">Dec</option>
                            </select>
                            <select className="register_year" onChange={(e)=> setBirthday([...birthday,e.target.value]) }>
                                <option value="Year">Year</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                                <option value="1982">1982</option>
                                <option value="1981">1981</option>
                            </select>
                    </div>
                    <h5 classname="register_gender">Gender</h5>
                    <div className="gender">
                        <label>Male</label>
                        <input type="radio" required onChange={(e)=>setGender(e.target.value)} name="gender" value="Male" />
                        <label>Female</label>
                        <input type="radio" required onChange={(e)=>setGender(e.target.value)} name="gender" value="Female" />
                        <label>Other</label>
                        <input type="radio" required onChange={(e)=>setGender(e.target.value)} name="gender" value="Other" />
                       
                    </div>    
                    <p className="register_policy">
                         By clicking sign up, you agree to our {" "}
                         <span>Terms, Data policy</span> and <span>Cookie Policy</span>. You 
                         May receive SMS notification from us and can opt out at any time. 
                    </p>
                    <center>
                        <button onClick={register} type="submit" className="register_here" >Sign Up</button>
                    </center>
                    <center>
                        <Link to="/Login">
                            <p className="register_login">Already have an account?</p>
                        </Link>
                    </center>
                </form>
            </div>
            </div>
        
    )
}

export default Register
