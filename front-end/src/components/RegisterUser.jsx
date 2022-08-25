import { useState } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";
import axios from "axios";

const RegisterUser =()=>{

    const history = useHistory();
    const [error,setError] = useState('');


    const [emailError, setEmailError] = useState('')
    const[userName,setUserName] = useState();
    const[userEmail,setUserEmail] = useState();
    const[userPhoneNumber,setUserPhoneNumber]=useState();
    const[userAge,setAge]=useState();

    const getUserName=(e)=>{
       setUserName(e.target.value);
       console.log(userName);
    }

    const validateEmail=(e)=>{
        
        if (validator.isEmail(e.target.value)) {
            setUserEmail(e.target.value);
            setEmailError("Email is valid");
          } else {
               setEmailError('Email is not valid')             
          }
    }

     

    const getUserPhoneNumber=(e)=>{
        setUserPhoneNumber(e.target.value);
        console.log(userPhoneNumber);
    }

    const getAge=(e)=>{
        setAge(e.target.value);
        console.log(userAge);
    }

     const registerUser= async (e)=>{
        e.preventDefault();

        const date_obj = new Date();
        const date = ("0" + date_obj.getDate()).slice(-2);
        const month = ("0" + (date_obj.getMonth() + 1)).slice(-2);
        const year = date_obj.getFullYear();

        const createdAt=year+"-"+month+"-"+date;

        if(userName===''){

        }
        if(userEmail===''){

        }
        if(userAge===''){

        }
        if(userPhoneNumber===''){

        }
        else{
            //  await fetch('http://localhost:8000/api/v1/user/register',{
            //     method:"POST",
            //     headers:{
            //         "Content-Type":"application/json"
            //     },
            //     body: JSON.stringify({
            //         userName,userEmail,userPhoneNumber,userAge,createdAt
            //     })
            // }).then((res)=>{
            //     console.log(res)
            // });
            // //console.log(res);

            

           
            const res = await axios.post("http://localhost:8000/api/v1/user/register",{
                    userName,userEmail,userPhoneNumber,userAge,createdAt
            });
            setError(res.data.error);
            if(res.data.error=="Duplicate email not allowed"){

            }
            else{
                history.push("/dashboard");
            }
        }
    }



    return(
    <div className="card col-sm-12 mt-5" style={{width:"40%",marginLeft:"30%",marginRight:"30%"}}>
        <form style={{padding:"10%"}} onSubmit={registerUser}>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label for="inputUserName">Username</label>
                    <input type="text" className="form-control" id="inputUserName" required="true" onChange={getUserName}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label for="inputEmail4">Email</label>
                    <small>  (Must be a valid email address)</small>
                    <input type="email" className="form-control" id="inputEmail4" required="true" onChange={validateEmail}/>
                    <span style={{fontWeight: 'bold',color: 'red'}}>{emailError}</span>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label for="inputPhoneNumber4">Phone Number</label>
                    <input type="tel" className="form-control" id="inputPhoneNumber4"  name="phone" pattern="[+]{0-9}[0-9]{11,14}" required="true" onChange={getUserPhoneNumber}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label for="inputAge">Age</label>
                    <small>   (Must be betwen 18 to 60 years)</small>
                    <input type="number" className="form-control" id="inputAge" required="true" min="18" max="60" onChange={getAge}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{width:"100%"}}>REGISTER</button>
            <span style={{color:"Red",fontSize:"32px",fontFamily:"bold"}}>{error}</span>
        </form>
    </div>
    );
}
export default RegisterUser;