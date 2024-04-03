import React, { useEffect, useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import Axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_SERVER_API}/consultant/getConsultant`, {
      headers: {
        "access-token": localStorage.getItem("Token"),
      },
    }).then((res) => setUsers(res.data));
  });

  const [consultantsCount, setConsultantsCount] = useState();
  const [reviewsConsultants, setReviewsConsultants] = useState([]);

  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_SERVER_API}/consultant/getConsultantCount`,
      {
        headers: {
          "access-token": localStorage.getItem("Token"),
        },
      }
    ).then((res) => {
      console.log(res.data);
      setConsultantsCount(res.data.totalConsultants);
    });
  });

  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_SERVER_API}/reviewConsultant/getReviewedConsultant`,
      {
        headers: {
          "access-token": localStorage.getItem("Token"),
        },
      }
    )
      .then((res) => {
        console.log(res.data);
        setReviewsConsultants(res.data);
      })
      .catch((err) => console.log(err));
  });

  const [totalUser, setTotalUser] = useState();
  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_SERVER_API}/userCredentials/getUserCount`
    ).then((res) => {
      setTotalUser(res.data.totalUser);
    });
  });

  const [cursorStyle, setCursorStyle] = useState("default");
  const openConsultant = () => {
    window.location.href = "/createForm";
  };
  const openConsultantList = () => {
    window.location.href = "/adminPanel";
  };
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Consultants</h3>
            
          </div>
          <h1>{consultantsCount}</h1>
        </div>
        <div
          className="card"
          onClick={() => openConsultant()}
          onMouseEnter={() => setCursorStyle("pointer")}
          onMouseLeave={() => setCursorStyle("default")}
          style={{ cursor: cursorStyle }}
        >
          <div className="card-inner">
            <h3>Create Consultant</h3>
            {/* <BsFillGrid3X3GapFill className="card_icon" /> */}
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Users</h3>
            {/* <BsPeopleFill className="card_icon" /> */}
          </div>
          <h1>{totalUser}</h1>
        </div>
        <div
          className="card"
          onClick={() => openConsultantList()}
          onMouseEnter={() => setCursorStyle("pointer")}
          onMouseLeave={() => setCursorStyle("default")}
          style={{ cursor: cursorStyle }}
        >
          <div className="card-inner">
            <h3>Delete Consultant</h3>
            {/* <BsFillBellFill className="card_icon" /> */}
          </div>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={users}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <Tooltip />
            <Legend />
            <Bar dataKey="hiredMembers" fill="#8884d8" />
            <Bar dataKey="consultantEmail" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={reviewsConsultants}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="consultantName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="points"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="value" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;




