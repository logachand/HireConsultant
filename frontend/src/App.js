import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import CreateConsultant from "./pages/CreateConsultant.jsx";
import UpdateUser from "./pages/UpdateUser";
import Login from "./components/UserAuth/Login/Login.jsx";
import Signup from "./components/UserAuth/Signup/Signup.jsx";
import Logout from "./components/UserAuth/Logout.jsx"
import ForgotPassword from "./components/UserAuth/ForgotPassword.js";
import ResetPassword from "./components/UserAuth/ResetPassword.js"
import Main from "./components/Consultant/Main.js"
import Consultant from "./components/Consultant/Consultant.jsx";
import HireForm from "./components/Consultant/HireForm.jsx";
import ReviewConsultant from "./components/Consultant/ReviewConsultant.jsx";
import "react-toastify/dist/ReactToastify.css";
import TestHome from "./TestComp/TestHome";
import Testimonal from "./TestComp/Testimonal";

// import useAlan from "./hooks/Alan"

function App() {
  // useAlan()
  const [id, setId] = useState("");
  const getId = (id) => {
    setId(id);
  };

  console.log(`ENV VARIABLE : ${process.env.REACT_APP_SERVER_API}`) 
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
        <Route path="/hireForm" element={<HireForm/>}/>
        <Route path="/reviewConsutant" element={<ReviewConsultant/>}/>
      </Routes>
    </BrowserRouter>



  );
}




export default App;
