import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

const GetAllUsers=()=>{


    const[usersInfo,setUserInfo] = useState(['']);
    const[name,setUserName] = useState('All Users');
    const[filteredUser,setFilteredUser] = useState('All Users');
    
    const dropdownItemClicked=(event)=>{
        setUserName(event.target.innerHTML);



    }


    useEffect(()=>{
        const apiResponse = fetch("http://localhost:8000/api/v1/user/get-all-users")
        .then(response=>response.json())
        .then(data=>setUserInfo(data.users));  
    });


    
            return(
                <div style={{marginLeft:"20%"}}>
                    <div class="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {name}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to="/get-all-users" style={{color:"black",textDecoration:"none",marginLeft:"25px"}}>ALL USERS</Link>
                            {
                               usersInfo.map((user)=><Link to={`/user/${user.userName}`} className="dropdown-item" onClick={dropdownItemClicked}>{user.userName}</Link>)
                            }
                        </div>
                    </div>
                    
                    <div className="row">
                        {
                            usersInfo.map((user)=><div className="col-md-4 col-sm-12">
                            <div className="card" style={{width:"18rem",height:"15rem"}}>
                                    <div className="card-body">
                                        <h6>UserName:</h6>
                                        <p className="card-title" style={{color:"black",fontWeight:"bold"}}>{user.userName}</p>
                                        <h6>User Email:<br/>{user.userEmail}</h6>
                                        <h6>User Phone Number:<br/>{user.userPhoneNumber}</h6>
                                        <h6>Date Created:<br/>{user.createdAt}</h6>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
             </div>
    );
}
export default GetAllUsers;