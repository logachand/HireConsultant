import React from 'react'
import "./JoinAs.css"
import MainNavbar from '../Navbar/MainNavbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
export default function JoinAs() {
  return (
  <>
  <MainNavbar/>
  <div>
    <h1 className='title'>Join As a Consultant or User</h1>
    <div className='crad'>
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"#fff", backgroundColor:"#172554 ",textAlign:"center",border:"3px solid #172554", borderRadius:"4px"}}>
            Hire Consultant
         </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontFamily:"times new roman"}}>
          Hire Consultant is a Portal, Where Consultant can Post 
          and User can hire the Consultant as well
        </Typography>
      </CardContent>
      <CardActions>
       <NavLink to= "/createAsConsutlant"><Button size="small">Join as Consultant</Button></NavLink>
        <NavLink to = "/login"><Button size="small">Join as User</Button></NavLink>
      </CardActions>
    </Card>
    </div>
  </div>
  </>
  )
}
