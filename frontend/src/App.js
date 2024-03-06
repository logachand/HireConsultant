import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import CreateConsultant from "./pages/CreateConsultant.jsx";
import UpdateUser from "./pages/UpdateUser";
import Login from "./login/TesLogin/Login";
import Signup from "./login/TesSignup/Signup";
import Logout from "./login/Logout.jsx"
import ForgotPassword from "./login/ForgotPassword";
import ResetPassword from "./login/ResetPassword"
import Main from "./components/Main"
import Test from "./components/Test";
import Consultant from "./components/Consultant";
import HireForm from "./components/HireForm";
import ReviewConsultant from "./components/ReviewConsultant";
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
        <Route path="/test" element={<Test/>}/>
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
