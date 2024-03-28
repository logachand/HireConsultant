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

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const [consultantsCount, setConsultantsCount] = useState();
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


  const [totalUser, setTotalUser] = useState();
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_SERVER_API}/userCredentials/getUserCount`)
    .then((res)=>{
      setTotalUser(res.data.totalUser)
    })
  })

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Consultants</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{consultantsCount}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Create Consultant</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Users</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{totalUser}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Delete Consultant</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className="charts">
        {/* <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
        {/* <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer> */}


          

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
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Bar dataKey="des" fill="#8884d8" />
            <Bar dataKey="title" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
