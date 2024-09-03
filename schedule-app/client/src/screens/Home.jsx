import BasicInfo from './BasicInfo';
import ProfessionalDetails from './ProfessionalDetails';
import SessionSetup from './SessionSetup';
import ReviewPage from './ReviewPage';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Home = ({user}) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  const navigate = useNavigate()
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    food: ''
  })

  const RegisterUser = async (e) => {
    const {username, email, password, firstName, lastName, address, phone, food} = data
    e.preventDefault();
    try {
      await axios.post('/register', {
        username,
        email,
        password, 
        firstName, 
        lastName, 
        address,
        phone,
        food
      })
      
    } catch (error) {
      alert('Registration failed')
      console.log(error)
    }
    alert("registration successful")
  }

  const steps = ["Step 1 of 4", "Step 2 of 4", "Step 3 of 4", "Step 4 of 4"];
  const titles = ["BASIC INFORMATION", "PROFESSIONAL DETAILS", "SESSION SETUP", "REVIEW AND FINISH UP"];
  const subtitles = ["Set up your personal profile", "Tell us more about you", "Set up your preferences for mentoring sessions", "Take a moment to review and confirm your information"];

  const PageDisplay = () => {
    if (page === 0) {
      return <BasicInfo data={data} setData={setData}/>
    } else if (page === 1) {
      return <ProfessionalDetails data={data} setData={setData}/>
    } else if (page === 2) {
      return <SessionSetup data={data} setData={setData}/>
    }else {
      return <ReviewPage data={data} setData={setData}/>
    }
  } 

  return (
    <div>
         <div style={{ marginTop: '10px', marginRight: '10px'}}>
            <a href="https://bobatalks.com"><img src={"./Bobatalk-Logo-darkblue.png"} alt="bobtalks logo" style={{width:'20%', height:'20%'}}/></a>
         </div>
        <div className='bg-gradient-to-r from-slate-100 to-red-600 w-full h-screen min-h-full flex flex-col justify-center py-36 sm:px-6 lg:px-8 z-100 mf:h-screen' style={{ width: '90%', marginTop: "50px"}}>
          <div style={{ float: 'left', width: '40%', marginLeft: "70px", marginTop: "60px"}}>
            <img src={"./2-teabag.png"} alt="tea bags" style={{width:'60%', height:'60%'}}/>
          </div>
          <div style={{ float: 'right'}}>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <h6 className="poppins-regular" style={{ fontSize:"15px", marginBottom:"none"}}>
              {steps[page]}
            </h6>
            <h1 className="poppins-semibold" style={{marginTop:"none", marginBottom:"none"}} >
              {titles[page]}
            </h1>
            <label className="poppins-light">
              {subtitles[page]}
            </label>
            {page === 0 ? <div>
              <h4 className="poppins-medium">Continued as {user?.email}
              <button 
              onClick={logout}
              style={{
                color: "black",
                border: "none",
                backgroundColor: "rgb(242, 196, 148)",
                padding: "0.5rem 1rem",
                cursor: "pointer",
              }}>
                Switch account
              </button> </h4>
            </div> : <div></div>}
            <div>
          </div>
          </div>
          <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <div>{PageDisplay()}</div>
            <div className='flex flex-row gap-3 pt-8'>
              <button 
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1)
              }}
              className='chewy-regular'
              style={{ marginLeft:"200px",width:"200px", height:"40px", fontSize:"20px", backgroundColor: "white"}}>
                Back</button>
              <button 
              onClick={(e) => {
                  if (page === titles.length - 1){
                    alert('Form Submitted')
                    RegisterUser(e);
                    console.log(data)
                    navigate('/signupsuccess');
                  } else {
                    setPage((currPage) => currPage + 1)
                  }
              }}
              className='chewy-regular'
              style={{ marginLeft:"10px", width:"200px", height:"40px", fontSize:"20px", backgroundColor: "white"}}>
                {page === titles.length - 1 ? "Submit" : "Next"}</button>
            </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Home