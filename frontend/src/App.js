import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "./adminPanel/AdminPanel.jsx";
import CreateConsultant from "./adminPanel/CreateConsultant.jsx";
import UpdateUser from "./adminPanel/UpdateUser.jsx";
import Login from "./components/UserAuth/Login.jsx";
import Signup from "./components/UserAuth/Signin.jsx";
import Logout from "./components/UserAuth/Logout.jsx"
import ForgotPassword from "./components/UserAuth/ForgotPassword.jsx";
import ResetPassword from "./components/UserAuth/ResetPassword.jsx"
import Main from "./components/Consultant/Main.jsx"
import CreateAsConsultant from "./components/Consultant/CreateAsConsultant.jsx"
import Consultant from "./components/Consultant/Consultant.jsx";
import ViewDetails from "./components/Consultant/ViewDetails/ViewDetails.jsx"
import HireForm from "./components/Consultant/HireForm.jsx";
import ReviewConsultant from "./components/Consultant/ReviewConsultant.jsx";
import JoinAs from "./components/JoinAs/JoinAs.jsx";
import "react-toastify/dist/ReactToastify.css";
import TestHome from "./TestComp/TopNavbar.jsx";
import Testimonal from "./TestComp/Testimonal";
import SuccessPopUp from "./components/SuccessPopUp/PopUp.jsx"


function App() {

  const [id, setId] = useState("");
  
  const getId = (id) => {
    setId(id);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/testHome" element={<TestHome/>}/>
        <Route path="/testimonal" element={<Testimonal/>}/>
        <Route path="/" element={<Consultant/>}/>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route path="/resetPassword/:id/:token" element={<ResetPassword/>}/>
        <Route path="/adminPanel" element={<AdminPanel getId={getId} />} />
        <Route path="/createForm" element={<CreateConsultant />} />
        <Route path="/updateForm" element={<UpdateUser id={id} />} />
        <Route path="/createAsConsutlant" element={<CreateAsConsultant/>}/>
        <Route path="/hireForm/:id" element={<HireForm />}/>
        <Route path="/reviewConsutant/:id" element={<ReviewConsultant />}/>
        <Route path="/viewDetails/:id" element={<ViewDetails/>}/>
        <Route path="/joinAs" element={<JoinAs/>}/>
        <Route path="/pop" element={<SuccessPopUp/>}/>
      </Routes>
    </BrowserRouter>



  );
}




export default App;
